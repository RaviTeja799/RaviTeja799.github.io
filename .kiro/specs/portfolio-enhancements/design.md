# Design Document

## Overview

This design document outlines the technical architecture and implementation approach for enhancing the portfolio website. The enhancements include removing Replit dependencies for platform independence, adding interactive features (contact form, theme toggle), creating detailed project pages, implementing resume download functionality, and building a dedicated badges/certificates showcase page. The design maintains the existing monochrome aesthetic while adding new capabilities.

## Architecture

### Current Architecture

The portfolio currently uses:
- **Frontend**: React 18 with TypeScript, Vite build tool, Wouter for routing
- **Styling**: Tailwind CSS with custom design system, Radix UI components
- **Backend**: Express.js server (minimal usage currently)
- **Hosting**: Replit-specific deployment with custom Vite plugins
- **State Management**: React Query for data fetching, local component state

### Target Architecture

The enhanced portfolio will use:
- **Frontend**: React 18 with TypeScript (unchanged)
- **Build System**: Vite with Replit plugins removed, optimized for static hosting
- **Routing**: Wouter with additional routes for project details and badges page
- **Theme Management**: next-themes library (already in dependencies) for dark/light mode
- **Email Service**: EmailJS or Resend API for contact form submissions
- **PDF Generation**: Client-side PDF generation using jsPDF or react-pdf, or pre-generated static PDF
- **Deployment Targets**: Vercel, Netlify, GitHub Pages, or any static hosting platform

### Deployment Strategy

**Static Site Generation Approach:**
- Remove server-side dependencies where possible
- Generate fully static HTML/CSS/JS bundle
- Use client-side routing with fallback for 404 handling
- Leverage serverless functions (Vercel/Netlify) for contact form email sending

## Components and Interfaces

### 1. Data Model Updates

**Updated Schema (shared/schema.ts):**

```typescript
// Add new interfaces
export interface ProjectDetail extends Project {
  images: string[];
  problemStatement: string;
  solutionApproach: string;
  outcomes: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Badge {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'competitive' | 'ai-ml' | 'leadership';
  imageUrl: string;
  verificationUrl?: string;
  issueDate?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Update Education to include high school
// Update Achievement to include Deputy Head of Projects
```

### 2. Theme System

**Implementation using next-themes:**

```typescript
// app-level theme provider wrapper
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
  <App />
</ThemeProvider>

// Theme toggle component
<ThemeToggle /> // Sun/Moon icon button in Navigation
```

**CSS Variables Approach:**
- Define CSS custom properties for both themes in index.css
- Use Tailwind's dark: modifier for theme-specific styles
- Maintain monochrome palette: dark mode (white text on black), light mode (black text on white)

### 3. Contact Form Component

**Location:** `client/src/components/ContactForm.tsx`

**Features:**
- Form validation using react-hook-form with zod schema
- Email integration via EmailJS or Resend API
- Loading states and success/error feedback
- Accessible form with proper labels and ARIA attributes

**Email Service Integration:**
- **Option 1 - EmailJS**: Client-side email sending, free tier available, no backend required
- **Option 2 - Resend API**: Serverless function endpoint, more reliable, requires API key
- **Recommendation**: EmailJS for simplicity and zero backend requirements

**API Endpoint (if using serverless):**
```
POST /api/contact
Body: { name, email, subject, message }
Response: { success: boolean, message: string }
```

### 4. Project Detail Pages

**Routing Structure:**
```
/ - Main portfolio page
/projects/:projectId - Individual project detail page
/badges - Badges and certificates page
```

**Project Detail Component:**
- **Location:** `client/src/pages/ProjectDetail.tsx`
- **Data Source:** Extended project data in portfolio-data.ts
- **Image Gallery:** Embla carousel (already in dependencies) for project screenshots
- **Layout:** Hero section with title, image gallery, detailed description sections, tech stack, links

**Navigation Flow:**
- Project cards on main page link to `/projects/:projectId`
- Back button returns to main page with scroll position preserved
- Share functionality (optional) for social media

### 5. Resume Download

**Implementation Approach:**

**Option 1 - Pre-generated PDF (Recommended):**
- Create professional PDF resume using design tools (Figma, Canva, LaTeX)
- Store in `client/public/resume/` directory
- Simple download link triggers file download
- Pros: Perfect formatting, fast, no runtime generation
- Cons: Manual updates required

**Option 2 - Dynamic PDF Generation:**
- Use @react-pdf/renderer or jsPDF
- Generate PDF from portfolio data at runtime
- Pros: Always up-to-date with data changes
- Cons: Complex styling, larger bundle size

**Recommendation:** Pre-generated PDF for better control and performance

**Download Button:**
- Location: Navigation bar and Hero section
- Triggers direct download of PDF file
- File naming: `Ravi_Teja_Bhagavatula_Resume.pdf`

### 6. Badges and Certificates Page

**Component:** `client/src/pages/BadgesPage.tsx`

**Layout Structure:**
```
- Page Header
- Category Tabs or Sections:
  - Cloud Certifications (GCP, AWS)
  - Competitive Programming (LeetCode)
  - AI/ML Certifications (IBM, edX)
  - Leadership & Recognition
- Badge Grid (responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop)
```

**Badge Card Component:**
- Badge image/icon
- Title and issuer
- Issue date
- Verification link (if available)
- Hover effect with additional details

**Data Source:**
- Extend portfolio-data.ts with badges array
- Include image URLs (can use public CDN links or local assets)

### 7. Navigation Updates

**Enhanced Navigation Component:**
```typescript
<Navigation>
  <Logo />
  <NavLinks>
    <Link to="/">Home</Link>
    <Link to="/#projects">Projects</Link>
    <Link to="/badges">Badges</Link>
    <Link to="/#contact">Contact</Link>
  </NavLinks>
  <Actions>
    <ThemeToggle />
    <DownloadResumeButton />
  </Actions>
  <MobileMenu /> // Hamburger for mobile
</Navigation>
```

## Data Models

### Updated Portfolio Data Structure

```typescript
// portfolio-data.ts additions

education: [
  {
    id: "edu-3",
    degree: "10th Class (High School)",
    institution: "Srujana School",
    location: "Visakhapatnam, Andhra Pradesh",
    period: "2020-2021",
    details: "Secondary School Certificate"
  },
  // ... existing education entries
]

achievements: [
  {
    id: "achievement-new",
    title: "Deputy Head of Projects",
    description: "Currently serving as Deputy Head of Projects, leading technical initiatives and project coordination",
    type: "leadership",
    period: "2025-2026"
  },
  // ... existing achievements
]

// New data structures
projectDetails: ProjectDetail[] // Extended project info with images, demos, etc.
badges: Badge[] // All certifications and badges
```

### Contact Form Validation Schema

```typescript
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters")
});
```

## Error Handling

### Contact Form Error Scenarios

1. **Validation Errors**: Display inline error messages below each field
2. **Network Errors**: Show toast notification with retry option
3. **Email Service Failures**: Log error, display user-friendly message, suggest alternative contact methods
4. **Rate Limiting**: Implement client-side throttling (1 submission per 60 seconds)

### Theme Toggle Error Handling

1. **LocalStorage Unavailable**: Fall back to default theme (dark mode)
2. **Invalid Theme Value**: Reset to default theme

### Project Detail Page Error Handling

1. **Invalid Project ID**: Redirect to 404 page or main portfolio
2. **Missing Project Data**: Display error message with link back to projects section

### Resume Download Error Handling

1. **File Not Found**: Display error toast, provide alternative contact method
2. **Download Blocked**: Show instructions for allowing downloads

## Testing Strategy

### Unit Testing

**Components to Test:**
- ContactForm: validation logic, submission handling
- ThemeToggle: theme switching, persistence
- ProjectDetail: data rendering, navigation
- BadgesPage: filtering, sorting, display logic

**Testing Library:** React Testing Library (already in use based on test IDs in components)

**Test Coverage Goals:**
- Form validation: all validation rules
- Theme persistence: localStorage interactions
- Routing: navigation between pages
- Data rendering: all data types display correctly

### Integration Testing

**Scenarios:**
1. **Contact Form Flow**: Fill form → Submit → Verify email sent → Display success message
2. **Theme Persistence**: Toggle theme → Reload page → Verify theme persists
3. **Project Navigation**: Click project → View details → Navigate back → Verify scroll position
4. **Resume Download**: Click download → Verify file downloads with correct name

### Manual Testing Checklist

**Responsive Design:**
- Test all pages on mobile (375px), tablet (768px), desktop (1440px)
- Verify touch interactions on mobile devices
- Test navigation menu collapse/expand

**Accessibility:**
- Keyboard navigation for all interactive elements
- Screen reader compatibility
- Color contrast ratios (WCAG AA compliance)
- Focus indicators visible

**Cross-Browser:**
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

**Performance:**
- Lighthouse score > 90 for all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

### Deployment Testing

**Pre-Deployment:**
1. Build production bundle: `npm run build`
2. Test production build locally: `npm run preview`
3. Verify all assets load correctly
4. Test all routes and navigation

**Post-Deployment:**
1. Verify deployment on target platform (Vercel/Netlify)
2. Test contact form email delivery
3. Verify resume download works
4. Check all external links (GitHub, LinkedIn, etc.)
5. Test theme toggle and persistence
6. Verify responsive design on real devices

## Replit Independence Implementation

### Dependencies to Remove

```json
// Remove from package.json devDependencies:
"@replit/vite-plugin-cartographer"
"@replit/vite-plugin-dev-banner"
"@replit/vite-plugin-runtime-error-modal"
```

### Vite Config Updates

```typescript
// vite.config.ts - simplified
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
```

### Build Scripts Update

```json
// package.json scripts
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy:vercel": "vercel --prod",
  "deploy:netlify": "netlify deploy --prod"
}
```

### Deployment Configuration Files

**Vercel (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages (github-pages-config.md):**

```json
// package.json additions
{
  "homepage": "https://{username}.github.io/{repo-name}",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
```

```typescript
// vite.config.ts - add base path for GitHub Pages
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/{repo-name}/' : '/',
  // ... rest of config
});
```

**Deployment Steps:**
1. Create empty GitHub repository
2. Initialize git and add remote: `git remote add origin https://github.com/{username}/{repo-name}.git`
3. Install gh-pages: `npm install gh-pages --save-dev`
4. Configure package.json with homepage and deploy scripts
5. Update vite.config.ts with base path
6. Commit and push to main branch: `git add . && git commit -m "Initial commit" && git push -u origin main`
7. Deploy to GitHub Pages: `npm run deploy`
8. Enable GitHub Pages in repository settings (source: gh-pages branch)

## Responsive Design Strategy

### Breakpoint System

**Tailwind CSS Breakpoints:**
```
sm: 640px   - Small devices (large phones)
md: 768px   - Medium devices (tablets)
lg: 1024px  - Large devices (laptops)
xl: 1280px  - Extra large devices (desktops)
2xl: 1536px - 2X large devices (large desktops)
```

**Portfolio Breakpoints:**
- **Mobile**: < 768px (sm and below)
- **Tablet**: 768px - 1023px (md)
- **Desktop**: 1024px+ (lg and above)

### Mobile-First Approach

All components will be designed mobile-first, with progressive enhancement for larger screens:

```css
/* Base styles for mobile */
.component { padding: 1rem; }

/* Tablet enhancements */
@media (min-width: 768px) {
  .component { padding: 2rem; }
}

/* Desktop enhancements */
@media (min-width: 1024px) {
  .component { padding: 3rem; }
}
```

### Component Responsive Behaviors

**Navigation:**
- Mobile (< 768px): Hamburger menu, full-screen overlay, stacked links
- Tablet/Desktop (≥ 768px): Horizontal menu bar, inline links, visible theme toggle

**Hero Section:**
- Mobile: Single column, reduced font sizes (text-4xl → text-6xl), centered content
- Tablet: Slightly larger fonts, maintained single column
- Desktop: Full viewport height, maximum font sizes (text-8xl), optional background image

**About Section:**
- Mobile: Single column, stacked content
- Tablet: Single column with increased padding
- Desktop: Two-column grid (bio left, contact right)

**Education Timeline:**
- Mobile: Simplified timeline, no connecting line, reduced card padding
- Tablet: Vertical timeline with connecting line
- Desktop: Full timeline with date indicators and connecting line

**Skills Grid:**
- Mobile: Single column or 2-column grid
- Tablet: 2-column grid
- Desktop: 4-column grid

**Projects:**
- Mobile: Single column, image above content, full-width cards
- Tablet: Single column with larger cards
- Desktop: Alternating two-column layout (zigzag pattern)

**Project Detail Page:**
- Mobile: Single column, stacked image gallery, full-width content
- Tablet: Single column with larger images
- Desktop: Two-column layout with image gallery sidebar

**Badges Page:**
- Mobile: 2-column grid, smaller badge cards
- Tablet: 3-column grid
- Desktop: 4-column grid, larger badge cards with hover effects

**Contact Form:**
- Mobile: Full-width inputs, stacked layout, larger touch targets
- Tablet: Slightly narrower form (max-w-2xl)
- Desktop: Centered form (max-w-xl), inline label/input for some fields

### Touch Target Optimization

All interactive elements on mobile will meet WCAG 2.1 Level AAA guidelines:
- Minimum touch target: 44px × 44px
- Adequate spacing between targets: minimum 8px
- Buttons and links: padding to ensure minimum size
- Form inputs: minimum height 44px

### Typography Scaling

**Responsive Font Sizes:**
```typescript
// Hero name
mobile: text-4xl (36px)
tablet: text-6xl (60px)
desktop: text-8xl (96px)

// Section headers
mobile: text-3xl (30px)
tablet: text-4xl (36px)
desktop: text-5xl (48px)

// Body text
mobile: text-base (16px)
tablet: text-base (16px)
desktop: text-lg (18px)

// Small text
mobile: text-sm (14px)
tablet: text-sm (14px)
desktop: text-base (16px)
```

### Image Optimization

**Responsive Images:**
- Use srcset for different screen densities (1x, 2x, 3x)
- Lazy loading for below-the-fold images
- WebP format with fallback to PNG/JPG
- Appropriate sizes for each breakpoint

**Image Dimensions:**
```
Mobile: max-width 375px
Tablet: max-width 768px
Desktop: max-width 1200px
```

### Layout Containers

**Container Max Widths:**
```typescript
// Main content container
mobile: px-4 (16px padding)
tablet: px-6 (24px padding)
desktop: px-8 max-w-6xl mx-auto (32px padding, 1152px max)

// Text content
mobile: px-4
tablet: px-6 max-w-4xl mx-auto
desktop: px-8 max-w-4xl mx-auto (896px max)

// Full-width sections
mobile: w-full px-4
tablet: w-full px-6
desktop: w-full px-8
```

### Spacing System

**Responsive Spacing:**
```typescript
// Section padding (vertical)
mobile: py-12 (48px)
tablet: py-16 (64px)
desktop: py-24 (96px)

// Component gaps
mobile: gap-4 (16px)
tablet: gap-6 (24px)
desktop: gap-8 (32px)

// Element margins
mobile: mb-8 (32px)
tablet: mb-12 (48px)
desktop: mb-16 (64px)
```

### Orientation Handling

**Device Rotation:**
- Use CSS media queries for orientation: `@media (orientation: landscape)`
- Adjust hero section height in landscape mobile mode
- Optimize navigation for landscape tablets
- Maintain layout integrity during orientation changes

### Performance Considerations

**Mobile Optimization:**
- Reduce animation complexity on mobile devices
- Lazy load images and heavy components
- Minimize JavaScript bundle size
- Use CSS transforms for animations (GPU-accelerated)
- Implement code splitting for route-based chunks

**Testing Viewports:**
- iPhone SE (375px × 667px)
- iPhone 12/13/14 (390px × 844px)
- iPad (768px × 1024px)
- iPad Pro (1024px × 1366px)
- Desktop (1920px × 1080px)

## Design Decisions and Rationales

### 1. Static Site Approach
**Decision:** Generate fully static site without server-side rendering
**Rationale:** Simplifies deployment, reduces hosting costs, improves performance, easier to maintain

### 2. EmailJS for Contact Form
**Decision:** Use EmailJS for client-side email sending
**Rationale:** No backend required, free tier sufficient, easy integration, reliable service

### 3. Pre-generated Resume PDF
**Decision:** Use pre-generated PDF instead of runtime generation
**Rationale:** Better formatting control, faster downloads, smaller bundle size, professional appearance

### 4. next-themes for Theme Management
**Decision:** Use next-themes library (already in dependencies)
**Rationale:** Battle-tested solution, handles SSR/SSG, localStorage persistence, system theme detection

### 5. Wouter for Routing
**Decision:** Continue using Wouter instead of React Router
**Rationale:** Already integrated, lightweight (1.5KB), sufficient for portfolio needs, simpler API

### 6. Monochrome Theme Palette
**Decision:** Maintain black/white/grey palette in both themes
**Rationale:** Consistent with existing design guidelines, professional appearance, accessibility-friendly

### 7. Component-Based Architecture
**Decision:** Create reusable components for new features
**Rationale:** Maintainability, testability, consistency with existing codebase

## Migration Path

### Phase 1: Data Updates (Low Risk)
1. Add high school education entry
2. Add Deputy Head of Projects achievement
3. Extend project data with detail fields
4. Create badges data structure

### Phase 2: Replit Independence (Medium Risk)
1. Remove Replit dependencies
2. Update Vite configuration
3. Test build process
4. Create deployment configs

### Phase 3: Theme System (Low Risk)
1. Implement ThemeProvider
2. Create ThemeToggle component
3. Update CSS variables
4. Test theme persistence

### Phase 4: Contact Form (Medium Risk)
1. Create ContactForm component
2. Integrate EmailJS
3. Add validation
4. Test email delivery

### Phase 5: New Pages (Medium Risk)
1. Create ProjectDetail page
2. Create BadgesPage
3. Update routing
4. Add navigation links

### Phase 6: Resume Download (Low Risk)
1. Create/add resume PDF
2. Add download button
3. Test download functionality

### Phase 7: Testing & Deployment (High Priority)
1. Run all tests
2. Deploy to staging
3. Perform manual testing
4. Deploy to production
