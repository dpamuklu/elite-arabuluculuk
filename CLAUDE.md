# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 14 website for Elite Arabuluculuk (elitearabulucu.com), a Turkish mediation service company. The project uses App Router, TypeScript, and Tailwind CSS v4 with a professional legal services theme.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v3 with custom professional legal theme colors
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **SEO**: Built-in Next.js metadata API with Turkish language support
- **Font**: Inter (system fonts as fallback)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles with Tailwind and theme variables
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Home page
│   ├── hizmetler/      # Services pages
│   ├── hakkimizda/     # About pages
│   └── iletisim/       # Contact pages
├── components/
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## Design System

### Color Palette (Professional Legal Theme)
- **Primary**: Navy blue scale (50-950) with #1e40af as default
- **Navy**: Professional navy scale (50-950) for text and backgrounds  
- **Gold**: Accent color scale (50-950) for highlights and CTAs
- **Secondary**: Light gray (#f8fafc / #1e293b dark)
- **Background**: White (#ffffff / #0f172a dark)
- **Semantic Colors**: Destructive, muted, border colors

### Typography System
- **Font Families**: 
  - `font-sans`: Inter with system fallbacks
  - `font-serif`: Georgia, Cambria for formal content
  - `font-legal`: Georgia, Times for legal documents
- **Font Sizes**: Custom scale with line-height optimization
- **Turkish Language**: Optimized rendering with `turkish-text` class
- **Legal Text**: Special styling with `legal-text` class

### Component Library

#### UI Components
- **Typography**: H1-H6, paragraphs, legal text, blockquotes
- **Buttons**: Primary, secondary, outline, gold, navy variants
- **Forms**: Input, textarea, select, checkbox, radio with accessibility
- **Cards**: Service cards, testimonial cards, feature cards
- **Contact Methods**: Grid, info cards, emergency contact

#### Layout Components  
- **Header**: Professional header with navigation and top bar
- **Footer**: Comprehensive footer with contact info and links
- **Container**: Responsive container with padding utilities

## Key Features

- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Turkish language metadata, Open Graph tags
- **Performance**: Optimized images, package imports, security headers
- **Accessibility**: Semantic HTML, proper ARIA labels
- **Dark Mode**: Automatic system preference detection

## Page Structure

- **Home** (`/`): Hero section, services overview, feature highlights
- **Services** (`/hizmetler`): Detailed service offerings
- **About** (`/hakkimizda`): Company information and team
- **Contact** (`/iletisim`): Contact form and information

## Development Notes

- Uses Tailwind CSS v3 with professional legal color scheme
- Custom design system with navy/gold color palette  
- TypeScript strict mode enabled for better code quality
- Security headers configured in next.config.ts
- Lucide React icons optimized via Next.js package imports
- Mobile-first responsive design principles
- Turkish language content and metadata throughout
- Accessibility compliant (WCAG 2.1) form components
- Print-friendly styles for legal documents
- Professional typography optimized for Turkish text

## Design Tokens

### Colors
```css
/* Primary Navy Scale */
navy-50 to navy-950

/* Gold Accent Scale */  
gold-50 to gold-950

/* Semantic Colors */
primary, secondary, accent, muted, border, destructive
```

### Typography Classes
```css
.turkish-text          /* Optimized Turkish text rendering */
.legal-text            /* Legal document styling */
.section-padding       /* Consistent section spacing */
.card-shadow          /* Professional card shadows */
```

### Component Usage
```tsx
import { Button, PrimaryButton } from "@/components/ui/Button";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { ServiceCard, TestimonialCard } from "@/components/ui/Card";
import { Input, Textarea, Select } from "@/components/ui/Form";
import { ContactMethodsGrid } from "@/components/ui/ContactMethods";
```