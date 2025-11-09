/**
 * Helper script to extract WordPress blog posts
 * Usage: node scripts/extract_wordpress_posts.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const WORDPRESS_URL = 'https://mayadaalhashem.wordpress.com';
const RSS_FEED = `${WORDPRESS_URL}/feed/`;

async function fetchRSSFeed() {
  return new Promise((resolve, reject) => {
    https.get(RSS_FEED, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log('Fetching WordPress RSS feed...');
    const feed = await fetchRSSFeed();
    
    // Save raw feed for inspection
    const outputDir = path.join(__dirname, '..', 'extracted_content');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'wordpress_feed.xml'),
      feed,
      'utf8'
    );
    
    console.log('RSS feed saved to extracted_content/wordpress_feed.xml');
    console.log('Please review the feed and extract post titles, dates, and URLs manually.');
    console.log('Then I can create the markdown entries.');
  } catch (error) {
    console.error('Error fetching RSS feed:', error.message);
    console.log('\nAlternative: Please share the blog post URLs or content manually.');
  }
}

main();

