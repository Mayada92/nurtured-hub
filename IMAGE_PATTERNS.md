# Image Display Patterns for GitHub Pages

This document outlines the working patterns for displaying images in the Nurtured Hub site deployed to GitHub Pages.

## ✅ Recommended Pattern: Using BASE_URL

For images in Astro components and pages:

```astro
---
const base = import.meta.env.BASE_URL; // or use getBasePath()
---

<img src={`${base}images/brand/logo.jpg`.replace(/\/+/g, '/')} alt="Logo" />
```

**Why this works:**
- `import.meta.env.BASE_URL` automatically includes `/nurtured-hub/` in production
- Works in both dev and production
- Simple and reliable

## ✅ Alternative: Using getImagePath() Utility

For a more consistent approach:

```astro
---
import { getImagePath } from '../utils/path';
---

<img src={getImagePath('/images/brand/logo.jpg')} alt="Logo" />
```

**Why this works:**
- Handles dev vs production automatically
- Consistent API across the codebase
- Centralized logic for path handling

## ❌ Don't Use: Hardcoded Paths

```astro
<!-- This will break in production -->
<img src="/images/brand/logo.jpg" alt="Logo" />
```

**Why this fails:**
- Doesn't include the `/nurtured-hub/` base path
- Works in dev but breaks on GitHub Pages

## For Content Files (Markdown/MDX)

Astro should handle base paths automatically for images in content collections, but verify in build output.

## Testing

Visit `/en/image-test` to see all image display methods in action and verify they work correctly.

## Current Status

✅ Navigation logo - Fixed
✅ Landing page logos - Fixed  
✅ Hero images - Fixed
✅ About page images - Fixed
⏳ Content collection images (papers, projects, posts) - Need verification
⏳ Card component images - Need verification

