/**
 * Download profile images and graphics from LinkedIn/online sources
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'profile');

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
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      resolve(null);
    });
  });
}

async function main() {
  console.log('Downloading profile images and graphics...\n');
  
  // UC Berkeley profile image
  const ucBerkeleyImage = {
    url: 'https://www.ischool.berkeley.edu/sites/default/files/styles/profile_image/public/people/mayadah-alhashem.jpg',
    filename: 'uc-berkeley-profile.jpg'
  };
  
  // Additional images to try (these might need manual verification)
  const imagesToTry = [
    {
      url: 'https://media.licdn.com/dms/image/C5603AQF_placeholder/profile-displayphoto-shrink_400_400/0/',
      filename: 'linkedin-profile.jpg',
      note: 'This will need your actual LinkedIn profile image URL'
    }
  ];
  
  console.log('Downloading UC Berkeley profile image...');
  const berkeleyPath = path.join(OUTPUT_DIR, ucBerkeleyImage.filename);
  await downloadFile(ucBerkeleyImage.url, berkeleyPath);
  
  console.log('\n✓ Done! Check:', OUTPUT_DIR);
  console.log('\nNote: LinkedIn profile images require manual download or specific URLs.');
  console.log('You can download your LinkedIn profile picture from your LinkedIn account settings.');
}

main().catch(console.error);

