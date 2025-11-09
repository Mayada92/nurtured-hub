import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', '__private_content', 'Supportive images to have in relevant activities');
const targetBase = path.join(__dirname, '..', 'public', 'images');

// Create organized directories
const imageDirs = {
  projects: path.join(targetBase, 'projects'),
  courses: path.join(targetBase, 'courses'),
  speaking: path.join(targetBase, 'speaking'),
  training: path.join(targetBase, 'training'),
  papers: path.join(targetBase, 'papers'),
  work: path.join(targetBase, 'work'),
  volunteering: path.join(targetBase, 'volunteering'),
  sports: path.join(targetBase, 'sports'),
  awards: path.join(targetBase, 'awards'),
};

// Create directories
Object.values(imageDirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image mapping based on filename patterns
const imageMapping = {
  // Projects
  'Gaza hachathon.webp': { target: 'volunteering', name: 'gaza-hackathon.webp' },
  'lab 7 bootcamp.webp': { target: 'projects', name: 'lab7-bootcamp.webp' },
  'lab 7 bootcamp team.webp': { target: 'projects', name: 'lab7-bootcamp-team.webp' },
  'lab 7 bootcamp prototype.webp': { target: 'projects', name: 'lab7-bootcamp-prototype.webp' },
  'Biorista, Lab7 bootcamp dashboard.webp': { target: 'projects', name: 'lab7-bootcamp-dashboard.webp' },
  'Techstars weekend hackathon.webp': { target: 'projects', name: 'techstars-hackathon.webp' },
  'Quraanathon certificate.webp': { target: 'projects', name: 'quraanathon-certificate.webp' },
  
  // Courses
  'Udacity nanodegree.webp': { target: 'courses', name: 'udacity-nanodegree.webp' },
  'MIT xPRO course.webp': { target: 'courses', name: 'mit-xpro-course.webp' },
  'MIT xPRO course 2.webp': { target: 'courses', name: 'mit-xpro-course-2.webp' },
  'IBM cloud computing.webp': { target: 'courses', name: 'ibm-cloud-computing.webp' },
  'Spotfire course.webp': { target: 'courses', name: 'tibco-spotfire.webp' },
  'Udemy Dash course.webp': { target: 'courses', name: 'udemy-dash-course.webp' },
  'circular economy course.webp': { target: 'courses', name: 'circular-economy-course.webp' },
  'business model course.webp': { target: 'courses', name: 'business-model-course.webp' },
  'Org psych course.webp': { target: 'courses', name: 'org-psych-course.webp' },
  'Life purpose life coach course.webp': { target: 'courses', name: 'life-coach-course.webp' },
  'future of work MISK certificate.webp': { target: 'courses', name: 'misk-future-of-work.webp' },
  'Advanced Artificial Lift Training.webp': { target: 'courses', name: 'advanced-artificial-lift.webp' },
  
  // Speaking & Training
  'SkillUp Talk.webp': { target: 'speaking', name: 'skillup-talk.webp' },
  'SkillUp Talk 2.webp': { target: 'speaking', name: 'skillup-talk-2.webp' },
  'NACE talk application of ML and AI in oil and gas.webp': { target: 'speaking', name: 'nace-ml-ai-talk.webp' },
  'Personal branding talk.webp': { target: 'speaking', name: 'personal-branding-talk.webp' },
  'alumni talks personal branding talk.webp': { target: 'speaking', name: 'alumni-personal-branding.webp' },
  'work life balance talk.webp': { target: 'speaking', name: 'work-life-balance-talk.webp' },
  'Monshaat Bootcamp.webp': { target: 'training', name: 'monshaat-bootcamp.webp' },
  'Wasla Connect Presentation.webp': { target: 'training', name: 'wasla-connect-presentation.webp' },
  'IET present around the world.webp': { target: 'speaking', name: 'iet-present-world.webp' },
  'IET present around the world 2.webp': { target: 'speaking', name: 'iet-present-world-2.webp' },
  'GGWcup UN SDGs football talk.webp': { target: 'speaking', name: 'ggwcup-un-sdgs-football.webp' },
  'GGWcup UN SDGs football2.webp': { target: 'speaking', name: 'ggwcup-un-sdgs-football-2.webp' },
  'GGWcup UN SDGs football.webp': { target: 'speaking', name: 'ggwcup-un-sdgs-football-3.webp' },
  'FOOTBALL talk.webp': { target: 'speaking', name: 'football-talk.webp' },
  'mcdermot talk certificate.webp': { target: 'speaking', name: 'mcdermott-certificate.webp' },
  
  // Papers
  'IPTC 2020.webp': { target: 'papers', name: 'iptc-2020.webp' },
  'IPTC 2020 banner.webp': { target: 'papers', name: 'iptc-2020-banner.webp' },
  'IPTC paper ML.webp': { target: 'papers', name: 'iptc-ml-paper.webp' },
  'SPE MEALC.webp': { target: 'papers', name: 'spe-mealc.webp' },
  'ADIPEC 2019.webp': { target: 'papers', name: 'adipec-2019.webp' },
  
  // Work & Awards
  'P&FDD awards.webp': { target: 'awards', name: 'pfdd-awards.webp' },
  'P&FDD award 1.webp': { target: 'awards', name: 'pfdd-award-1.webp' },
  'P&FDD award 2.webp': { target: 'awards', name: 'pfdd-award-2.webp' },
  
  // Sports
  'bahrain FC game (with Eastern Flames).webp': { target: 'sports', name: 'bahrain-fc-game.webp' },
  'Al Ain football game (me with Eastern Flames).webp': { target: 'sports', name: 'al-ain-football-game.webp' },
  'Portugal Training pro football academy.webp': { target: 'sports', name: 'portugal-training.webp' },
  'Prodirect portogual training plan.webp': { target: 'sports', name: 'prodirect-portugal-plan.webp' },
  'Saudi Football National Team coach.webp': { target: 'sports', name: 'saudi-national-team-coach.webp' },
  'Saudi Football National Team tryouts.webp': { target: 'sports', name: 'saudi-national-team-tryouts.webp' },
  'Saudi Muay Thai medal.webp': { target: 'sports', name: 'saudi-muay-thai-medal.webp' },
  'Kickboxing ORANGE BELT.webp': { target: 'sports', name: 'kickboxing-orange-belt.webp' },
  'Kickboxing training.webp': { target: 'sports', name: 'kickboxing-training.webp' },
  'Community Championship soccer.webp': { target: 'sports', name: 'community-championship-soccer.webp' },
};

// Copy images
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  let copied = 0;
  let skipped = 0;
  
  files.forEach(file => {
    if (file.endsWith('.webp')) {
      const mapping = imageMapping[file];
      if (mapping) {
        const sourcePath = path.join(sourceDir, file);
        const targetDir = imageDirs[mapping.target];
        const targetPath = path.join(targetDir, mapping.name);
        
        try {
          fs.copyFileSync(sourcePath, targetPath);
          console.log(`✓ Copied: ${file} → ${mapping.target}/${mapping.name}`);
          copied++;
        } catch (err) {
          console.error(`✗ Error copying ${file}:`, err.message);
        }
      } else {
        console.log(`⚠ Skipped (no mapping): ${file}`);
        skipped++;
      }
    }
  });
  
  console.log(`\nSummary: ${copied} copied, ${skipped} skipped`);
} else {
  console.error(`Source directory not found: ${sourceDir}`);
}

