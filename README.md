# NurtureLens - Bilingual Portfolio Website

A modern, clean bilingual (English/Arabic) portfolio website built with Astro, featuring multiple professional focus areas, content collections, and smooth animations.

## 🚀 Features

- **Bilingual Support**: Full English/Arabic content with RTL support for Arabic
- **Professional Profiles**: 4 specialized CV views (Children & Education, Data Science, Volunteering, Engineering)
- **Content Collections**: Projects, posts, papers, and profiles managed via Astro Content Collections
- **Modern Design**: Floating visual language with subtle animations
- **Print-Ready CVs**: A4 formatted print styles for profile pages
- **GitHub Pages Ready**: Automated deployment workflow included

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── __private_content/          # Local-only content (gitignored)
├── public/                     # Static assets (images, CVs, etc.)
├── src/
│   ├── components/             # Astro & React components
│   │   ├── FloatingLayer.tsx  # React island for floating blobs
│   │   ├── SectionReveal.tsx  # React island for scroll reveals
│   │   ├── ImageStage.tsx     # React island for parallax images
│   │   ├── LanguageSwitcher.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── TableOfContents.astro
│   │   └── ...
│   ├── config/
│   │   └── ui.ts              # UI configuration (motion, density, spacing)
│   ├── content/               # Astro content collections
│   │   ├── projects/
│   │   ├── posts/
│   │   ├── papers/
│   │   └── profiles/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro        # Redirects to /en
│   │   ├── en/                # English pages
│   │   └── ar/                # Arabic pages (RTL)
│   ├── styles/
│   │   ├── theme.css          # Design tokens
│   │   └── global.css         # Global styles & print CSS
│   └── utils/
│       └── path.ts            # Bilingual routing utilities
└── astro.config.mjs
```

## 🎨 Customization

- **Design Tokens**: Edit `src/styles/theme.css` for colors, typography, spacing
- **Motion Settings**: Edit `src/config/ui.ts` to toggle animations
- **Hero Content**: Edit `src/pages/en/index.astro` and `src/pages/ar/index.astro`

## 📝 Content Management

Content is organized in `src/content/`:

- **Work Experience**: `work/` - Tag with domain (`sports`, `educational-psychology`, `engineering`, `data-science`)
- **Volunteering**: `volunteering/` - Set `is_hackathon: true` for hackathons
- **Training/Lectures**: `training/` - Training sessions and workshops
- **Public Speaking**: `speaking/` - Talks, presentations, panels
- **Courses**: `courses/` - Organized by domain (single domain per course)
- **Projects**: `projects/` - Portfolio projects with tags
- **Posts**: `posts/` - Blog posts and articles
- **Papers**: `papers/` - Research publications

Each entry needs English (`-en.md`) and Arabic (`-ar.md`) versions.

Profile pages automatically filter work by domain based on focus:
- `/profile/children-education` → shows `educational-psychology` work only
- `/profile/data-science` → shows `data-science` work only
- `/profile/engineering` → shows `engineering` work only
- `/profile/volunteering` → shows all volunteering

## 🛠️ Development

```bash
npm install          # Install dependencies
npm run dev         # Start dev server → http://localhost:4321/en
npm run build       # Build for production
npm run preview     # Preview production build
```

**Visit**: http://localhost:4321/en or http://localhost:4321/ar

## 🚢 Deployment

The site is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Update `astro.config.mjs` with your GitHub username and repo name:

```javascript
export default defineConfig({
  // ...
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

## 📦 Dependencies

- **Astro**: Static site generator
- **React**: For interactive components
- **Framer Motion**: Smooth animations
- **Zod**: Schema validation for content collections
- **MDX**: Markdown with JSX support

## ♿ Accessibility

- Skip-to-content link
- Proper ARIA labels on interactive elements
- Focus-visible styles
- Semantic HTML
- Reduced motion support
- RTL support for Arabic

## 📄 License

This project is open source and available for personal use.
