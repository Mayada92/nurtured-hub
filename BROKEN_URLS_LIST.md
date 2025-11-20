# Broken/Non-Usable URLs List

## Critical Issues (Won't Work on Live Site)

### 1. Private Content Path
- **File**: `src/pages/en/profile/[focus].astro` (Line 275)
- **URL**: `/__private_content/BSU Work/Praise Brochure EDPS 604 (1).pdf`
- **Issue**: Points to private folder that won't be accessible on GitHub Pages
- **Fix**: Remove or move file to public folder and update path

## Generic/Non-Specific Certificate URLs

### 2. Generic Udemy Homepage
- **Files**: 
  - `src/content/courses/tibco-spotfire-udemy-en.md` (Line 12)
  - `src/content/courses/fuzzy-logic-python-udemy-en.md` (Line 12)
- **URL**: `https://www.udemy.com/`
- **Issue**: Generic homepage, not specific to the course or user's certificate
- **Fix**: Update to specific course URL or remove if no specific certificate link exists

### 3. Generic HackerRank Homepage
- **File**: `src/content/courses/hackerrank-30-days-python-en.md` (Line 12)
- **URL**: `https://www.hackerrank.com/`
- **Issue**: Generic homepage, not specific to the user's certificate
- **Fix**: Update to specific certificate/profile URL or remove

### 4. Generic SPE Certification Page
- **File**: `src/content/courses/spe-petroleum-engineering-en.md` (Line 13)
- **URL**: `https://www.spe.org/en/members/certification/`
- **Issue**: Generic certification page, not user-specific
- **Fix**: Update to user-specific certificate URL or remove

## Links to Remove from Profile Pages (Per User Request)

The user wants profile pages to function as simple resume variations without links to:
- Projects (ProjectCard links to project detail pages)
- Activities (VolunteeringCard, TrainingCard links)
- Talks (SpeakingCard links to recordings, slides, events)
- Writing (PostCard links to articles)
- Papers (PaperCard links to PDFs and DOIs)

These should be removed from profile pages but can remain on dedicated pages (projects, writing, papers, etc.).

## Summary

**Total Issues Found**: 4 critical URL issues + profile page link removal requirement

**Priority**:
1. Fix private content path (critical - won't work on live site)
2. Update generic certificate URLs or remove them
3. Remove all project/activity/talk links from profile pages
4. Fix profile page styling (zoom, contrast, congestion, missing images)

