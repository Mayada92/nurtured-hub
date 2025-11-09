"""
Extract certifications and courses from LinkedIn PDFs
This script will parse PDFs to find certification information
"""

import os
import sys
from pathlib import Path

# Try to import PDF libraries
try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    try:
        import PyPDF2
        HAS_PDFPLUMBER = False
        HAS_PYPDF2 = True
    except ImportError:
        print("Please install pdfplumber or PyPDF2: pip install pdfplumber")
        sys.exit(1)

def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def find_certifications(text):
    """Find certification keywords in text"""
    keywords = [
        'certification', 'certificate', 'certified', 'coursera', 'edx', 'udemy',
        'google', 'microsoft', 'aws', 'ibm', 'meta', 'linkedin learning',
        'professional certificate', 'specialization', 'course'
    ]
    
    lines = text.split('\n')
    certifications = []
    
    for i, line in enumerate(lines):
        line_lower = line.lower()
        for keyword in keywords:
            if keyword in line_lower:
                # Get context (previous and next lines)
                context = '\n'.join(lines[max(0, i-2):i+3])
                certifications.append({
                    'keyword': keyword,
                    'line': line.strip(),
                    'context': context
                })
                break
    
    return certifications

def main():
    private_content = Path(__file__).parent.parent / "__private_content" / "Resume & Linkedin"
    output_dir = Path(__file__).parent.parent / "extracted_content"
    output_dir.mkdir(exist_ok=True)
    
    pdf_files = list(private_content.glob("*.pdf"))
    
    print(f"Found {len(pdf_files)} PDF files")
    
    all_certifications = []
    
    for pdf_file in pdf_files:
        print(f"\nProcessing: {pdf_file.name}")
        try:
            if HAS_PDFPLUMBER:
                text = extract_text_pdfplumber(pdf_file)
            else:
                text = extract_text_pypdf2(pdf_file)
            
            certs = find_certifications(text)
            if certs:
                print(f"  Found {len(certs)} potential certifications")
                all_certifications.extend(certs)
                
                # Save extracted text
                output_file = output_dir / f"{pdf_file.stem}_extracted.txt"
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(text)
                print(f"  Saved full text to: {output_file}")
            
        except Exception as e:
            print(f"  Error processing {pdf_file.name}: {e}")
    
    # Save all certifications found
    if all_certifications:
        cert_file = output_dir / "certifications_found.txt"
        with open(cert_file, 'w', encoding='utf-8') as f:
            f.write("CERTIFICATIONS AND COURSES FOUND:\n")
            f.write("=" * 80 + "\n\n")
            for cert in all_certifications:
                f.write(f"Keyword: {cert['keyword']}\n")
                f.write(f"Line: {cert['line']}\n")
                f.write(f"Context:\n{cert['context']}\n")
                f.write("-" * 80 + "\n\n")
        print(f"\n✓ Saved certifications to: {cert_file}")
    else:
        print("\n⚠ No certifications found in PDFs")

if __name__ == "__main__":
    main()

