import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    year: z.number(),
    tags: z.array(z.string()),
    summary: z.string(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: z.string().optional(), // path to image in public
    images: z.array(z.string()).optional(), // Additional images for gallery
    video: z.string().optional(), // path to video file in public
    featured: z.boolean().default(false),
    relatedPapers: z.array(z.string()).optional(), // Array of paper slugs
    gallery: z.array(
      z.object({
        type: z.enum(['image', 'video']),
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
    ).optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    date: z.date(),
    excerpt: z.string(),
    canonical_url: z.string().url().optional(),
    cover: z.string().optional(), // Image path for blog post cover
    is_external: z.boolean().default(false), // For LinkedIn/Medium links vs full content
    tags: z.array(z.string()).optional(),
  }),
});

const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()),
    doi: z.string().optional(),
    pdf_url: z.string().optional(),
    citation_bibtex: z.string().optional(),
    cover: z.string().optional(), // Image path for paper cover
    images: z.array(z.string()).optional(), // Additional images for gallery
    video_url: z.string().optional(), // Video URL or relative path if available
    gallery: z.array(
      z.object({
        type: z.enum(['image', 'video']),
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
    ).optional(),
  }),
});

const profilesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    focus: z.enum(['children-education', 'data-science', 'volunteering', 'engineering']),
    headline: z.string(),
    include_tags: z.array(z.string()),
    pin_projects: z.array(z.string()).default([]),
    pin_posts: z.array(z.string()).default([]),
    pin_papers: z.array(z.string()).default([]),
  }),
});

const volunteeringCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    organization: z.string(),
    role: z.string(),
    start_date: z.date(),
    end_date: z.date().optional(),
    ongoing: z.boolean().default(false),
    domain: z.array(z.enum(['sports', 'educational-psychology', 'engineering', 'data-science', 'general'])),
    description: z.string(),
    achievements: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    is_hackathon: z.boolean().default(false),
    cover: z.string().optional(), // Image path for volunteering cover
    images: z.array(z.string()).optional(), // Additional images
    video_url: z.string().optional(), // Video URL or relative path if available
  }),
});

const trainingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    type: z.enum(['training', 'lecture', 'workshop']),
    organization: z.string(),
    venue: z.string().optional(),
    date: z.date(),
    audience: z.string().optional(),
    domain: z.array(z.enum(['sports', 'educational-psychology', 'engineering', 'data-science', 'general'])),
    description: z.string(),
    materials_url: z.string().url().optional(),
    slides_url: z.string().url().optional(),
    cover: z.string().optional(), // Image path for training cover
    images: z.array(z.string()).optional(), // Additional images
    video_url: z.string().optional(), // Video URL or relative path if available
  }),
});

const speakingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    type: z.enum(['talk', 'presentation', 'panel', 'keynote', 'webinar']),
    event: z.string(),
    venue: z.string().optional(),
    date: z.date(),
    domain: z.array(z.enum(['sports', 'educational-psychology', 'engineering', 'data-science', 'general'])),
    description: z.string(),
    recording_url: z.string().url().optional(),
    slides_url: z.string().url().optional(),
    event_url: z.string().url().optional(),
    cover: z.string().optional(), // Image path for speaking cover
    images: z.array(z.string()).optional(), // Additional images
    video_url: z.string().optional(), // Video URL or relative path if available
  }),
});

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    course_code: z.string().optional(), // e.g., "DATASCI 201" or certification ID
    institution: z.string(), // e.g., "UC Berkeley", "Coursera", "Google", "AWS", etc.
    platform: z.enum(['university', 'coursera', 'edx', 'udemy', 'linkedin-learning', 'google', 'microsoft', 'aws', 'ibm', 'other']).optional(), // Platform type
    term: z.string().optional(), // e.g., "Fall 2024", "Summer 2024", or completion date for certifications
    year: z.number(),
    domain: z.enum(['sports', 'educational-psychology', 'engineering', 'data-science', 'general']),
    level: z.enum(['undergraduate', 'graduate', 'professional', 'certification']).optional(),
    description: z.string(),
    syllabus_url: z.string().optional(),
    certificate_url: z.string().url().optional(), // For certifications - link to credential
    credits: z.number().optional(),
    cover: z.string().optional(), // Image path for course certificate/cover
  }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ar']),
    organization: z.string(),
    role: z.string(),
    start_date: z.date(),
    end_date: z.date().optional(),
    ongoing: z.boolean().default(false),
    domain: z.array(z.enum(['sports', 'educational-psychology', 'engineering', 'data-science'])),
    description: z.string(),
    achievements: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    cover: z.string().optional(), // Image path for work cover
    images: z.array(z.string()).optional(), // Additional images
    video_url: z.string().optional(), // Video URL or relative path if available
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
  papers: papersCollection,
  profiles: profilesCollection,
  volunteering: volunteeringCollection,
  training: trainingCollection,
  speaking: speakingCollection,
  courses: coursesCollection,
  work: workCollection,
};



