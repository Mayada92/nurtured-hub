"""
Extract text content from Word documents
"""

import sys
from pathlib import Path

try:
    from docx import Document
    HAS_DOCX = True
except ImportError:
    HAS_DOCX = False
    print("python-docx not installed. Install with: pip install python-docx")

def extract_docx_text(docx_path):
    """Extract text from a Word document"""
    if not HAS_DOCX:
        return None
    
    try:
        doc = Document(docx_path)
        text = []
        for paragraph in doc.paragraphs:
            if paragraph.text.strip():
                text.append(paragraph.text)
        return '\n'.join(text)
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

def main():
    base_dir = Path(__file__).parent.parent
    resume_file = base_dir / "Mayadah Alhashem Resume New (Nov 8 2025).docx"
    
    if not resume_file.exists():
        print(f"Resume file not found: {resume_file}")
        return
    
    output_dir = base_dir / "extracted_content"
    output_dir.mkdir(exist_ok=True)
    
    print(f"\nExtracting from: {resume_file.name}")
    text = extract_docx_text(str(resume_file))
    if text:
        output_file = output_dir / "Mayadah Alhashem Resume New (Nov 8 2025)_extracted.txt"
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {len(text)} characters to {output_file}")
    else:
        print("Failed to extract text")

if __name__ == "__main__":
    main()

