/**
 * Extract all WordPress blog posts from RSS feed
 * This will create markdown files with full content and download images
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { XMLParser } from 'fast-xml-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RSS_FILE = path.join(__dirname, '..', 'extracted_content', 'wordpress_rss.xml');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'content', 'posts');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'blog');

// Ensure directories exist
[OUTPUT_DIR, IMAGES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGES_DIR, filename);
    
    // Skip if already exists
    if (fs.existsSync(filePath)) {
      console.log(`  ✓ Image already exists: ${filename}`);
      resolve(filePath);
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          console.log(`  ✓ Downloaded: ${filename}`);
          resolve(filePath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        console.log(`  ✗ Failed to download ${url}: ${response.statusCode}`);
        resolve(null);
      }
    }).on('error', (err) => {
      console.log(`  ✗ Error downloading ${url}: ${err.message}`);
      resolve(null);
    });
  });
}

function extractImagesFromContent(content) {
  const imageUrls = [];
  const imageRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    let imageUrl = match[1];
    // Remove query parameters for cleaner filenames
    const cleanUrl = imageUrl.split('?')[0];
    // Remove size suffixes (e.g., ?w=300)
    imageUrl = cleanUrl;
    imageUrls.push(imageUrl);
  }
  
  return [...new Set(imageUrls)]; // Remove duplicates
}

function cleanHtmlForMarkdown(html) {
  // Basic HTML to Markdown conversion
  let markdown = html
    // Remove WordPress-specific tags
    .replace(/<figure[^>]*>/gi, '')
    .replace(/<\/figure>/gi, '')
    .replace(/<p[^>]*>/gi, '\n\n')
    .replace(/<\/p>/gi, '')
    .replace(/<strong[^>]*>/gi, '**')
    .replace(/<\/strong>/gi, '**')
    .replace(/<em[^>]*>/gi, '*')
    .replace(/<\/em>/gi, '*')
    .replace(/<h([1-6])[^>]*>/gi, (match, level) => '\n\n' + '#'.repeat(parseInt(level)) + ' ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    // Replace images with markdown syntax
    .replace(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi, (match, src) => {
      const cleanSrc = src.split('?')[0];
      const filename = path.basename(cleanSrc);
      return `\n![Image](${src})\n`; // Keep original URL for now, will replace later
    })
    // Remove other HTML tags
    .replace(/<[^>]+>/g, '')
    // Clean up extra newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
    
  return markdown;
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function detectLanguage(title, content) {
  // Simple detection: if contains Arabic characters, it's Arabic
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(title + content) ? 'ar' : 'en';
}

async function processPost(item) {
  const title = item.title || '';
  const link = item.link || '';
  const pubDate = item.pubDate || '';
  const description = item.description || '';
  const content = item['content:encoded'] || item.content || '';
  const categories = item.category || [];
  
  // Parse date
  const date = new Date(pubDate);
  const dateStr = date.toISOString().split('T')[0];
  
  // Detect language
  const lang = detectLanguage(title, content);
  
  // Create slug
  const slug = createSlug(title) + (lang === 'ar' ? '-ar' : '-en');
  
  // Extract images
  const imageUrls = extractImagesFromContent(content);
  const coverImage = imageUrls[0] || null;
  
  // Download images and create mapping
  const imageMap = {};
  for (const imageUrl of imageUrls) {
    const filename = path.basename(imageUrl.split('?')[0]);
    const localPath = `/images/blog/${filename}`;
    
    try {
      await downloadImage(imageUrl, filename);
      imageMap[imageUrl] = localPath;
    } catch (err) {
      console.log(`  Warning: Could not download ${imageUrl}`);
      // Keep original URL as fallback
      imageMap[imageUrl] = imageUrl;
    }
  }
  
  // Replace image URLs in content
  let processedContent = content;
  for (const [originalUrl, localPath] of Object.entries(imageMap)) {
    const regex = new RegExp(originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    processedContent = processedContent.replace(regex, localPath);
  }
  
  // Convert HTML to Markdown (basic)
  const markdownContent = cleanHtmlForMarkdown(processedContent);
  
  // Create frontmatter
  const tags = Array.isArray(categories) ? categories.map(c => c.toLowerCase().replace(/\s+/g, '-')) : [];
  
  const frontmatter = `---
title: ${JSON.stringify(title)}
lang: ${lang}
date: ${dateStr}
excerpt: ${JSON.stringify(description.replace(/\[&#8230;\]/g, '').substring(0, 200))}
canonical_url: "${link}"
${coverImage && imageMap[coverImage] ? `cover: "${imageMap[coverImage]}"` : ''}
${tags.length > 0 ? `tags: ${JSON.stringify(tags)}` : ''}
---

`;
  
  // Write markdown file
  const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + markdownContent, 'utf8');
  
  console.log(`✓ Created: ${slug}.md (${lang})`);
  return { slug, lang, title, date: dateStr };
}

async function main() {
  console.log('Reading RSS feed...');
  const rssContent = fs.readFileSync(RSS_FILE, 'utf8');
  
  console.log('Parsing RSS feed...');
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text'
  });
  
  const result = parser.parse(rssContent);
  const items = result.rss?.channel?.item || [];
  
  if (Array.isArray(items) && items.length === 0) {
    console.log('No items found. Trying alternative structure...');
    const singleItem = result.rss?.channel?.item;
    if (singleItem) {
      items.push(singleItem);
    }
  }
  
  console.log(`\nFound ${items.length} posts. Processing...\n`);
  
  const processed = [];
  for (let i = 0; i < items.length; i++) {
    const item = Array.isArray(items) ? items[i] : items;
    console.log(`\n[${i + 1}/${items.length}] Processing: ${item.title || 'Unknown'}`);
    try {
      const post = await processPost(item);
      processed.push(post);
    } catch (err) {
      console.error(`  ✗ Error processing post: ${err.message}`);
    }
    
    // If not array, break after first item
    if (!Array.isArray(items)) break;
  }
  
  console.log(`\n\n✓ Complete! Processed ${processed.length} posts.`);
  console.log(`✓ Images saved to: ${IMAGES_DIR}`);
  console.log(`✓ Posts saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);

