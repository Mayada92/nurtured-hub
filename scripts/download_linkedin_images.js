/**
 * Instructions and helper for downloading LinkedIn profile images
 * 
 * Since LinkedIn profile images require authentication, you'll need to:
 * 1. Visit your LinkedIn profile
 * 2. Right-click on your profile picture
 * 3. Save image as... to public/images/profile/your-photo.jpg
 * 
 * Alternatively, you can use images from:
 * - UC Berkeley profile page
 * - Professional headshots
 * - Social media profiles you own
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROFILE_DIR = path.join(__dirname, '..', 'public', 'images', 'profile');

// Ensure directory exists
if (!fs.existsSync(PROFILE_DIR)) {
  fs.mkdirSync(PROFILE_DIR, { recursive: true });
  console.log(`Created directory: ${PROFILE_DIR}`);
}

// Common image URLs that might work (replace with actual URLs)
const imageSources = [
  // Add URLs here if you find them publicly accessible
  // 'https://ischool.berkeley.edu/people/mayadah-alhashem/photo.jpg',
  // 'https://linkedin.com/in/mayada-alhashem/photo.jpg',
];

console.log(`
📸 Profile Image Setup Guide
============================

1. Download your profile picture manually:
   - Visit: https://www.linkedin.com/in/mayada-alhashem
   - Right-click on your profile photo
   - Save as: public/images/profile/mayada-profile.jpg

2. Or use your UC Berkeley profile photo:
   - Visit: https://www.ischool.berkeley.edu/people/mayadah-alhashem
   - Save the photo to: public/images/profile/mayada-ucb.jpg

3. Supported formats: JPG, PNG, WebP
4. Recommended size: 400x400px or larger (square)
5. Optimize images for web (compress if > 200KB)

Once you add the image, update:
- src/pages/en/profile/[focus].astro
- src/pages/ar/profile/[focus].astro
- Any other pages that need profile images

Current profile directory: ${PROFILE_DIR}
`);

