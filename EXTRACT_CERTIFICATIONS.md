# Extracting Certifications from LinkedIn Documents

## PDF Files in `__private_content/Resume & Linkedin/`:

1. **Activity _ Mayada (Maya) Alhashem _ LinkedIn.pdf** (28MB) - Contains LinkedIn posts and activity
2. **LinkedIn.pdf** (91KB) - LinkedIn profile export
3. **Mayadah Alhashem Resume (Oct 1 2025).pdf** (233KB) - Main resume
4. **When Not to Use Machine Learning _ LinkedIn.pdf** (965KB) - Specific LinkedIn post

## Steps to Extract Certifications:

### Option 1: Manual Review (Recommended)
1. Open each PDF in a PDF reader
2. Look for sections titled:
   - "Licenses & Certifications"
   - "Certifications"
   - "Courses"
   - "Education" (may include professional development)
3. Note down:
   - Certification/Course Name
   - Issuing Organization (Coursera, Google, AWS, etc.)
   - Completion Date
   - Credential URL (if available)
   - Skills/topics covered

### Option 2: Use Python Script
1. Install PDF library: `pip install pdfplumber`
2. Run: `python scripts/extract_linkedin_certifications.py`
3. Review `extracted_content/certifications_found.txt`

## Common Certification Platforms to Look For:

- **Coursera** - Professional Certificates, Specializations
- **edX** - MicroMasters, Professional Certificates
- **Google** - Google Cloud, Google Career Certificates
- **AWS** - AWS Certifications
- **Microsoft** - Microsoft Learn, Azure Certifications
- **LinkedIn Learning** - Course Certificates
- **IBM** - Professional Certificates
- **Meta** - Professional Certificates
- **Udemy** - Course Certificates

## Template for Certification Entry:

Create file: `src/content/courses/[platform]-[course-name]-en.md`

```markdown
---
title: "Certification Name"
lang: en
institution: "Platform Name"  # e.g., "Coursera", "Google"
platform: "coursera"  # or "google", "aws", "linkedin-learning", etc.
year: 2024
domain: data-science  # or appropriate domain
level: certification
description: "Description of what the certification covers"
certificate_url: "https://..." # Link to credential verification
term: "Completed January 2024"  # Completion date
---
```

## Next Steps:

After extracting certifications, I'll:
1. Create markdown entries for each certification
2. Add them to the courses collection
3. They'll appear on profile pages filtered by domain
4. Skills from certifications will be added to relevant work entries

