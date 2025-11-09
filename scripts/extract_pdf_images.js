/**
 * Extract images from LinkedIn PDFs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIVATE_CONTENT = path.join(__dirname, '..', '__private_content', 'Resume & Linkedin');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'linkedin');

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function extractImagesFromPDFs() {
  console.log('Searching for PDFs in:', PRIVATE_CONTENT);
  
  if (!fs.existsSync(PRIVATE_CONTENT)) {
    console.log('✗ Private content directory not found');
    return;
  }
  
  const files = fs.readdirSync(PRIVATE_CONTENT);
  const pdfFiles = files.filter(f => f.toLowerCase().endsWith('.pdf'));
  
  console.log(`Found ${pdfFiles.length} PDF files\n`);
  console.log('Note: PDF image extraction requires specialized tools.');
  console.log('For now, please manually extract images from PDFs or use online tools.');
  console.log('\nRecommended: Use Adobe Acrobat or online PDF to image converters.');
  console.log('\nPDFs found:');
  pdfFiles.forEach(f => console.log(`  - ${f}`));
}

extractImagesFromPDFs().catch(console.error);

