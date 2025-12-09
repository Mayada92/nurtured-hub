---
title: "BenefitsFlow - AI-Powered Public Benefits Navigator"
lang: en
year: 2025
tags: ["data-science", "machine-learning", "social-impact", "rag", "llm", "aws"]
summary: "UC Berkeley MIDS Capstone project: AI-powered assistant helping millions navigate California's public benefits system. Built with full RAG architecture, AWS deployment, and privacy-first design."
featured: true
cover: "/images/projects/benefitsflow-cover.jpeg"
images:
  - "/images/projects/benefitsflow-cover.jpeg"
  - "/images/projects/benefitsflow-logo.png"
  - "/images/projects/benefitsflow-architecture.png"
gallery:
  - type: image
    src: "/images/projects/benefitsflow-cover.jpeg"
    alt: "BenefitsFlow - Your California Benefits Navigator"
    caption: "BenefitsFlow: AI-powered assistant for navigating California's public benefits"
  - type: image
    src: "/images/projects/benefitsflow-logo.png"
    alt: "BenefitsFlow Logo"
    caption: "BenefitsFlow - Making public assistance accessible and understandable"
  - type: video
    src: "https://www.youtube.com/embed/BBJrJatFs2g"
    alt: "BenefitsFlow Demo Video"
    caption: "Video demonstration of BenefitsFlow features and capabilities"
  - type: image
    src: "/images/projects/benefitsflow-architecture.png"
    alt: "BenefitsFlow System Architecture"
    caption: "Full RAG architecture with data pipeline, backend orchestration, and frontend interface"
  - type: image
    src: "/images/projects/benefitsflow-data-pipeline.png"
    alt: "BenefitsFlow Data Pipeline Architecture"
    caption: "Data pipeline: Web scraping, normalization, chunking, embedding, and vector storage"
  - type: image
    src: "/images/projects/benefitsflow-backend.png"
    alt: "BenefitsFlow Backend Architecture"
    caption: "Backend architecture: FastAPI orchestration, RAG pipeline, and AWS integration"
  - type: image
    src: "/images/projects/benefitsflow-evaluation.png"
    alt: "BenefitsFlow Evaluation Strategy"
    caption: "Custom 4-tier evaluation pyramid: Accuracy, Actionability, Simplicity, and Empathy"
---

**UC Berkeley School of Information — MIDS Capstone Project | Fall 2024**

**AI • RAG Architecture • Social Impact • AWS Deployment**

BenefitsFlow tackles a challenge millions face: navigating public benefits is confusing, time-consuming, and fragmented. Our solution is an AI-powered assistant that helps people quickly understand eligibility, get personalized guidance, and access checklists and reminders — all without storing personal data.

## The Problem

Millions of Californians struggle to navigate the complex landscape of public assistance programs. The process is:
- **Confusing**: Fragmented information across multiple government websites
- **Time-consuming**: Hours spent trying to understand eligibility and requirements
- **Overwhelming**: Complex terminology and lengthy application processes
- **Inaccessible**: Limited support for those who need it most

## Our Solution

BenefitsFlow is an AI-powered conversational assistant that provides:
- **Quick Eligibility Assessment**: Understand what programs you qualify for
- **Personalized Guidance**: Get answers tailored to your specific situation
- **Actionable Checklists**: Download step-by-step guides for each program
- **Deadline Reminders**: Auto-generated calendar files to track important dates
- **Privacy-First**: Session-based, no personal data stored

## Technical Architecture

### Full RAG (Retrieval-Augmented Generation) Pipeline

**Data Pipeline**
- Web scraping from official California government sources
- Data normalization and cleaning
- Intelligent chunking for optimal retrieval
- Embedding generation using OpenAI embeddings
- Vector storage and indexing in Pinecone

**Backend/API (FastAPI)**
- Orchestration layer coordinating retrieval, ranking, and generation
- Metadata extraction system for deadlines and action items
- Program and session caching for performance
- Secure routing and API key management via AWS Secrets Manager
- Context assembly and prompt construction

**Frontend**
- FastAPI + HTML/CSS responsive interface
- Mobile-optimized design
- Session memory for contextual conversations
- Downloadable PDF checklists
- Auto-generated calendar files (.ics) for deadlines

### Technology Stack

- **LLM**: AWS Bedrock (Claude 3.5 Sonnet default)
- **Embeddings**: OpenAI text-embedding-3-small
- **Vector Database**: Pinecone vector search
- **Backend**: FastAPI orchestration layer
- **Deployment**: AWS EC2 with Docker Compose
- **Reverse Proxy**: Nginx with SSL/TLS
- **DNS**: AWS Route 53
- **Security**: AWS Secrets Manager

### Production Features

- **Live at benefitsflow.org** with full SSL/TLS encryption
- **Logging and monitoring** for system health
- **Prompt optimization** for response quality
- **Robust error handling** for reliability
- **Caching strategy** for performance and cost efficiency

## Evaluation Framework

We developed a custom 4-tier evaluation pyramid:

1. **Accuracy**: Does the response match the source information?
2. **Actionability**: Can the user take concrete next steps?
3. **Simplicity**: Is the language clear and accessible?
4. **Empathy**: Does the tone demonstrate understanding and support?

**Evaluation Methods**
- LLM-as-judge metrics for automated assessment
- Gold dataset of validated question-answer pairs
- RAG checkpoint testing at each pipeline stage
- SME (Subject Matter Expert) validation

## Key Features

### For Users
- **Natural Conversation**: Ask questions in plain language
- **Personalized Responses**: Get guidance specific to your situation
- **Multiple Programs**: Food assistance, healthcare, cash aid, housing, and more
- **Downloadable Checklists**: PDF guides with step-by-step instructions
- **Calendar Integration**: .ics files with important deadlines
- **Mobile-Friendly**: Access from any device
- **Privacy-Focused**: No personal data storage

### Technical Highlights
- **Full RAG Architecture**: Retrieval, ranking, context assembly, generation
- **Scalable Design**: Cloud-native architecture on AWS
- **Cost-Efficient**: Intelligent caching and prompt optimization
- **Secure**: AWS Secrets Manager, SSL/TLS, session-based design
- **Monitored**: Comprehensive logging and error tracking
- **Tested**: Multi-tier evaluation framework

## Impact & Applications

BenefitsFlow demonstrates how AI can be applied to real social challenges:

- **Accessibility**: Making government services more accessible
- **Equity**: Reducing barriers to public assistance
- **Efficiency**: Saving time for both users and case workers
- **Scalability**: Cloud-native design can serve millions
- **Privacy**: Proving AI can be helpful without collecting personal data

### Target Users
- Individuals seeking public assistance
- Case workers and social service providers
- Community organizations supporting vulnerable populations
- Anyone navigating California's benefits system

## Team

**UC Berkeley MIDS Capstone Team (Fall 2024)**

- **Mayada Alhashem** - Team Member, Full-Stack Development
- **Godsee Joy** - Team Member, Data Pipeline & ML
- **Deric Liang** - Team Member, Backend & Infrastructure

**Instructors**
- **Joyce Shen** - Capstone Instructor
- **Korin Reid** - Capstone Instructor

**Special Thanks**
A huge thank you to the subject matter experts who met with us and shaped this project with their insights. Your input made our solution stronger and more grounded in real user needs.

## What We Built

### Data Pipeline
✓ Web scraping from official government sources
✓ Data normalization and cleaning
✓ Intelligent chunking strategy
✓ Embedding generation
✓ Vector database ingestion (Pinecone)

### Backend System
✓ FastAPI orchestration layer
✓ RAG pipeline (retrieval → ranking → context → generation)
✓ Metadata extraction (deadlines, action items)
✓ Session and program caching
✓ AWS Secrets Manager integration
✓ Secure API routing

### Frontend Interface
✓ FastAPI + HTML/CSS responsive design
✓ Mobile-optimized layout
✓ Session memory for contextual conversations
✓ PDF checklist generation
✓ Calendar file (.ics) generation
✓ Accessible design patterns

### Model & AI
✓ OpenAI embeddings for semantic search
✓ Pinecone vector search
✓ AWS Bedrock LLMs (Claude 3.5 Sonnet)
✓ Prompt engineering and optimization
✓ Context assembly for RAG

### Evaluation & Testing
✓ Custom 4-tier evaluation pyramid
✓ LLM-as-judge metrics
✓ Gold dataset creation
✓ RAG checkpoint testing
✓ SME validation

### Production Deployment
✓ AWS EC2 hosting
✓ Docker Compose for container orchestration
✓ Nginx reverse proxy
✓ AWS Route 53 DNS configuration
✓ SSL/TLS encryption
✓ Logging and monitoring
✓ Error handling and recovery
✓ Performance optimization

## Live Solution

🔗 **Visit BenefitsFlow**: [benefitsflow.org](https://benefitsflow.org)

Try it yourself! Start a conversation and see how BenefitsFlow can help navigate California's public benefits system.

## Project Resources

- **Live Solution**: [benefitsflow.org](https://benefitsflow.org)
- **UC Berkeley Project Page**: [ischool.berkeley.edu/projects/2025/benefitsflow](https://www.ischool.berkeley.edu/projects/2025/benefitsflow)
- **Video Demo**: [Watch on YouTube](https://www.youtube.com/watch?v=BBJrJatFs2g)

## Technical Achievements

### Architecture Excellence
- Implemented full RAG architecture from scratch
- Designed scalable, cloud-native system
- Built production-grade deployment pipeline
- Created comprehensive evaluation framework

### Engineering Best Practices
- Modular, maintainable code structure
- Secure credential management
- Comprehensive logging and monitoring
- Intelligent caching for cost efficiency
- Mobile-first responsive design

### Social Impact Focus
- Privacy-first design (no personal data storage)
- Accessibility-focused interface
- Clear, empathetic language
- Focus on actionability and real user needs

## Reflections

This capstone project represents the culmination of our MIDS program at UC Berkeley, bringing together everything we learned about data science, machine learning, cloud architecture, and product development. More importantly, it demonstrates how AI can be applied to real social challenges, making government services more accessible and helping people navigate complex systems.

BenefitsFlow shows that AI can be powerful, practical, and privacy-preserving all at once. We're proud to have built something that could make a real difference in people's lives.

---

## Related Work

- **[Chronic Absenteeism Prediction](/nurtured-hub/en/projects/chronic-absenteeism-prediction)** - Educational data science for student support
- **[MindFlow](/nurtured-hub/en/projects/mindflow)** - AI-powered mindfulness platform
- **[Allam Challenge](/nurtured-hub/en/projects/allam-challenge)** - Arabic learning platform for children

---

*This project was developed as part of the UC Berkeley Master of Information and Data Science (MIDS) program Capstone course in Fall 2024.*

