/**
 * Content Extraction Utility
 * 
 * This script helps extract content from PDFs and other documents
 * and creates structured content entries for the Astro site.
 * 
 * Usage: node scripts/extract-content.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Note: This is a template. You'll need to install pdf-parse or use a service
// to actually extract PDF text. For now, this provides structure.

async function extractPDFText(pdfPath) {
  // TODO: Implement PDF extraction using pdf-parse or similar
  // For now, return placeholder
  console.log(`Would extract text from: ${pdfPath}`);
  return '';
}

function createContentEntry(type, data, filename) {
  const contentDir = path.join(rootDir, 'src', 'content', type);
  const filePath = path.join(contentDir, `${filename}.md`);
  
  const frontmatter = `---
${Object.entries(data)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}:\n${value.map((v) => `  - ${JSON.stringify(v)}`).join('\n')}`;
    }
    if (typeof value === 'string' && value.includes('\n')) {
      return `${key}: |\n${value.split('\n').map((line) => `  ${line}`).join('\n')}`;
    }
    return `${key}: ${JSON.stringify(value)}`;
  })
  .join('\n')}
---

${data.description || data.content || ''}
`;

  // Create directory if it doesn't exist
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(filePath, frontmatter, 'utf-8');
  console.log(`Created: ${filePath}`);
}

// Helper to parse dates
function parseDate(dateStr) {
  // Try various date formats
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    console.warn(`Could not parse date: ${dateStr}`);
    return new Date();
  }
  return date;
}

// Example: Extract LinkedIn posts structure
async function extractLinkedInPosts() {
  const pdfPath = path.join(rootDir, '__private_content', 'Resume & Linkedin', 
    'Activity _ Mayada (Maya) Alhashem _ LinkedIn (httpswww.linkedin.cominmayada-alhashemrecent-activityall).pdf');
  
  console.log('\n=== Extracting LinkedIn Posts ===');
  // TODO: Implement actual PDF extraction
  // For now, provide structure guidance
  
  const posts = [
    {
      title: 'When Not to Use Machine Learning',
      slug: 'when-not-to-use-machine-learning',
      lang: 'en',
      date: parseDate('2024-01-15'),
      excerpt: 'A thoughtful piece on understanding when machine learning is not the right solution.',
      canonical_url: 'https://www.linkedin.com/posts/...',
    },
    // Add more posts as extracted
  ];
  
  return posts;
}

console.log('Content extraction utility ready.');
console.log('Note: PDF extraction requires pdf-parse or similar library.');
console.log('Run: npm install pdf-parse');

