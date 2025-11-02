"""
Extract content from PDF files for portfolio content generation
"""

import os
import sys
from pathlib import Path

# Try to import pdf parsing libraries
try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    text = []
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            for page in reader.pages:
                text.append(page.extract_text())
        return '\n'.join(text)
    except Exception as e:
        print(f"Error with PyPDF2: {e}")
        return None

def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    text = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text.append(page.extract_text())
        return '\n'.join(text)
    except Exception as e:
        print(f"Error with pdfplumber: {e}")
        return None

def extract_pdf_text(pdf_path):
    """Extract text from PDF using available library"""
    if HAS_PDFPLUMBER:
        return extract_text_pdfplumber(pdf_path)
    elif HAS_PYPDF2:
        return extract_text_pypdf2(pdf_path)
    else:
        print("No PDF library available. Install: pip install pdfplumber")
        return None

def main():
    base_dir = Path(__file__).parent.parent
    resume_dir = base_dir / "__private_content" / "Resume & Linkedin"
    
    if not resume_dir.exists():
        print(f"Resume directory not found: {resume_dir}")
        return
    
    output_dir = base_dir / "extracted_content"
    output_dir.mkdir(exist_ok=True)
    
    # Extract from main resume
    main_resume = resume_dir / "Mayadah Alhashem Resume (Oct 1 2025).pdf"
    if main_resume.exists():
        print(f"\nExtracting from: {main_resume.name}")
        text = extract_pdf_text(str(main_resume))
        if text:
            with open(output_dir / "main_resume.txt", "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted {len(text)} characters")
    
    # Extract from LinkedIn activity
    linkedin_activity = resume_dir / "Activity _ Mayada (Maya) Alhashem _ LinkedIn (httpswww.linkedin.cominmayada-alhashemrecent-activityall).pdf"
    if linkedin_activity.exists():
        print(f"\nExtracting from: {linkedin_activity.name}")
        text = extract_pdf_text(str(linkedin_activity))
        if text:
            with open(output_dir / "linkedin_activity.txt", "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted {len(text)} characters")
    
    # Extract from "When Not to Use Machine Learning"
    ml_post = resume_dir / "When Not to Use Machine Learning _ LinkedIn.pdf"
    if ml_post.exists():
        print(f"\nExtracting from: {ml_post.name}")
        text = extract_pdf_text(str(ml_post))
        if text:
            with open(output_dir / "ml_linkedin_post.txt", "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted {len(text)} characters")

if __name__ == "__main__":
    main()

