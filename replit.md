# Ravi Teja Bhagavatula - Portfolio Website

## Project Overview
A premium, minimalist portfolio website showcasing the work and achievements of Ravi Teja Bhagavatula, an AI/ML enthusiast and computer science student. The website features a sophisticated black, white, and grey color palette with smooth animations and an engaging user experience.

## Tech Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Animations**: CSS animations with scroll-triggered reveals
- **Build Tool**: Vite
- **Backend**: Express.js (minimal, serving the SPA)

## Project Structure
- `/client/src/components/` - Reusable React components (Hero, About, Education, Skills, Projects, Achievements, Footer, Navigation)
- `/client/src/pages/` - Page components (Portfolio main page)
- `/client/src/data/` - Portfolio data in TypeScript
- `/shared/schema.ts` - TypeScript interfaces for type safety

## Design Principles
- **Minimalist**: Clean, uncluttered design with generous white space
- **Premium Feel**: Sophisticated color palette, smooth transitions, and subtle animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: Proper semantic HTML and ARIA labels
- **Monochrome Palette**: Black (#000000), White (#FFFFFF), and various greys for a professional look

## Key Features
1. **Hero Section**: Large typography with name, title, and contact links
2. **About Section**: Professional bio with contact information card
3. **Education Timeline**: Visual timeline of educational background
4. **Skills Grid**: Categorized technical skills with icons
5. **Projects Showcase**: Alternating layout showcasing 4 key projects with descriptions and tech stacks
6. **Achievements Section**: Featured achievements, certifications, and competitive programming stats
7. **Smooth Navigation**: Fixed navbar with smooth scroll to sections
8. **Scroll Animations**: Fade-in-up animations triggered on scroll

## Running the Project
The workflow "Start application" runs `npm run dev` which starts both the Express backend and Vite frontend on the same port.

## Recent Changes
- Initial portfolio website implementation (October 27, 2025)
- Implemented all sections with premium monochrome design
- Added smooth scroll navigation and animations
- Configured design tokens for consistent styling
