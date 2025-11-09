/**
 * Download WordPress blog assets (logo, favicon, branding images)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORDPRESS_URL = 'https://mayadaalhashem.wordpress.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'brand');

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`  ✓ Already exists: ${path.basename(filepath)}`);
      resolve(filepath);
      return;
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  ✓ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        console.log(`  ✗ Failed: ${url} (${response.statusCode})`);
        fs.unlinkSync(filepath);
        resolve(null);
      }
    }).on('error', (err) => {
      console.log(`  ✗ Error: ${err.message}`);
      fs.unlinkSync(filepath);
      resolve(null);
    });
  });
}

async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function extractImages(html) {
  const images = new Set();
  
  // Find all image sources
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let url = match[1];
    // Convert relative URLs to absolute
    if (url.startsWith('//')) {
      url = 'https:' + url;
    } else if (url.startsWith('/')) {
      url = WORDPRESS_URL + url;
    } else if (!url.startsWith('http')) {
      url = WORDPRESS_URL + '/' + url;
    }
    images.add(url);
  }
  
  // Find favicons and site icons
  const linkRegex = /<link[^>]+(?:rel=["'](?:icon|shortcut icon|apple-touch-icon)["']|href=["']([^"']*(?:favicon|icon|logo)[^"']*)["'])/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    let url = match[1] || match[2];
    if (url) {
      if (url.startsWith('//')) {
        url = 'https:' + url;
      } else if (url.startsWith('/')) {
        url = WORDPRESS_URL + url;
      } else if (!url.startsWith('http')) {
        url = WORDPRESS_URL + '/' + url;
      }
      images.add(url);
    }
  }
  
  return Array.from(images);
}

async function main() {
  console.log('Fetching WordPress blog HTML...');
  try {
    const html = await fetchHTML(WORDPRESS_URL);
    
    console.log('\nExtracting image URLs...');
    const imageUrls = await extractImages(html);
    
    console.log(`Found ${imageUrls.length} potential images/logos\n`);
    
    // Filter for logos, favicons, and brand-related images
    const brandImages = imageUrls.filter(url => {
      const lower = url.toLowerCase();
      return lower.includes('logo') || 
             lower.includes('favicon') || 
             lower.includes('icon') || 
             lower.includes('brand') ||
             lower.includes('site-icon');
    });
    
    console.log(`Found ${brandImages.length} brand-related images\n`);
    console.log('Downloading brand assets...\n');
    
    for (const url of brandImages.slice(0, 10)) { // Limit to first 10
      const filename = url.split('/').pop().split('?')[0];
      const ext = path.extname(filename) || '.png';
      const safeFilename = filename || `wordpress-asset-${Date.now()}${ext}`;
      const filepath = path.join(OUTPUT_DIR, safeFilename);
      
      console.log(`Downloading: ${filename || url}`);
      await downloadFile(url, filepath);
    }
    
    // Also try common WordPress asset paths
    const commonAssets = [
      `${WORDPRESS_URL}/wp-content/uploads/sites/` // WordPress uploads
    ];
    
    console.log('\n✓ Done! Check:', OUTPUT_DIR);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

