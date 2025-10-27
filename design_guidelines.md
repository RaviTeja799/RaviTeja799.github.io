# Ravi Teja Bhagavatula - Premium Portfolio Design Guidelines

## Design Approach
**Selected Approach**: Swiss Modernism meets Apple HIG minimalism - drawing inspiration from premium portfolio sites like Linear's landing page structure, combined with the restraint of Apple's design language. Focus on generous whitespace, precise typography, and subtle micro-interactions that convey premium quality without unnecessary decoration.

## Core Design Principles
1. **Breathing Room**: Generous spacing between all elements creates premium feel
2. **Typography as Art**: Large, bold headlines with careful hierarchy
3. **Precision**: Pixel-perfect alignment and consistent spacing throughout
4. **Subtle Motion**: Minimal, purposeful animations that enhance rather than distract

---

## Layout System

### Spacing Primitives
Use Tailwind units of **4, 8, 16, 24, 32** for consistent rhythm:
- Component padding: p-8, p-16
- Section spacing: py-24, py-32 (desktop), py-16 (mobile)
- Element gaps: gap-4, gap-8
- Margins: mt-8, mb-16

### Container Strategy
- Maximum width: max-w-6xl for content sections
- Full-width sections with inner containers: w-full with max-w-6xl mx-auto
- Text-heavy content: max-w-4xl for optimal reading

---

## Typography Hierarchy

### Font Selection
**Primary**: Inter or Manrope (Google Fonts)
- Clean, modern sans-serif with excellent readability
- Multiple weights for hierarchy (400, 500, 600, 700)

### Type Scale
```
Hero Name: text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight
Hero Subtitle: text-2xl md:text-3xl font-medium tracking-wide
Section Headers: text-4xl md:text-5xl font-bold tracking-tight
Subsection Headers: text-2xl md:text-3xl font-semibold
Project Titles: text-xl md:text-2xl font-semibold
Body Text: text-base md:text-lg leading-relaxed
Small Text: text-sm md:text-base
Labels/Meta: text-xs md:text-sm uppercase tracking-wider font-medium
```

---

## Component Library

### Hero Section
**Layout**: Full viewport height (min-h-screen) with centered content
- Name in massive type with letter-spacing
- "AI ML Enthusiast" as styled subtitle with divider lines
- Contact links as minimal text links horizontally arranged
- Scroll indicator at bottom (subtle downward arrow with fade animation)
- Background: Subtle gradient mesh or abstract geometric pattern (very subtle, premium)

**Image Strategy**: Use a professional headshot or abstract tech visualization as subtle background element with low opacity overlay. Position: right side, taking 40% width on desktop, hidden on mobile.

### Navigation
**Position**: Fixed top with backdrop blur on scroll
- Logo/Name: Left-aligned, text-base font-semibold
- Menu: Right-aligned horizontal links with underline-on-hover
- Hamburger: Mobile only, minimal three-line icon
- Height: py-4 with border-bottom on scroll

### About Section
**Layout**: Two-column on desktop (grid-cols-2), stacked mobile
- Left: Large paragraph with professional bio
- Right: Contact info as clean list with icons
- Add "Currently" callout for Google Student Ambassador role

### Education Section
**Layout**: Timeline-style vertical layout
- Each degree as card with left-aligned date indicator
- Institution name prominent (text-xl font-semibold)
- Degree details below in smaller text
- Connecting line between cards (vertical border-l on desktop)

### Technical Skills Section
**Layout**: Four-column grid (lg:grid-cols-4, md:grid-cols-2)
- Each category as minimal card
- Category label: uppercase, tracking-wider, text-sm
- Skills as comma-separated list or vertical stack
- Hover: subtle lift effect (transform scale)

### Projects Showcase
**Layout**: Two-column alternating layout (zigzag pattern)
- Project cards alternate: image-left/content-right, then flip
- Each card spans full container width
- Image area: 45% width, project details: 55% width
- Project title: text-2xl font-bold
- Description: text-base leading-relaxed with bullet points as clean list
- Tech stack: Pills/tags with rounded-full, px-4 py-2, subtle borders
- Generous spacing between projects (mb-32)

**Image Strategy**: Include screenshot/mockup images for each project (4 images total). Use placeholder with project-specific descriptions (Android app UI, web dashboard, chatbot interface, classification app).

### Achievements Section
**Layout**: Mixed grid approach
- Google Cloud Arcade: Featured card (larger, 2-column span)
- Certifications: Grid of 4 badges (lg:grid-cols-4, md:grid-cols-2)
- Hackathons & LeetCode: Stat cards with large numbers + labels
- School Captain/SIH: Timeline or badge format

### Footer
**Layout**: Three-column grid (desktop), stacked (mobile)
- Left: Name + tagline
- Center: Quick links (About, Projects, Contact)
- Right: Social links (LinkedIn, GitHub, Email)
- Copyright below in text-xs

---

## Animations & Interactions

### Scroll-Triggered Reveals
- Fade-in-up: Elements enter with translateY(-20px) → 0
- Stagger: Projects reveal sequentially with 100ms delay
- Threshold: trigger at 10% viewport visibility

### Hover States
- Cards: subtle lift (translateY(-4px)) + shadow increase
- Links: underline with slide-in animation
- Buttons: slight scale (1.02) + increased shadow
- Tech tags: slight opacity increase

### Micro-interactions
- Navigation: underline expands from center on hover
- Project images: subtle zoom (scale 1.05) on parent card hover
- Skill cards: gentle border glow on hover

---

## Responsive Behavior

### Breakpoints
- Mobile: < 768px (single column everything)
- Tablet: 768px - 1024px (two-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

### Mobile Optimizations
- Hero: Reduce font sizes by 30-40%
- Navigation: Collapse to hamburger menu
- Projects: Stack to single column, image above content
- Skills: Two-column grid maximum
- Reduce all py spacing by 33% (py-32 → py-16)

---

## Images Section

**Total Images Required**: 6

1. **Hero Background/Accent** (Optional but recommended): Abstract tech visualization, neural network patterns, or professional portrait - positioned right side with 30% opacity
2. **Project 1 - GNSS Logger**: Android app screenshot showing map interface with collision detection UI
3. **Project 2 - CivicVoice**: Web dashboard showing report tracking interface and status cards
4. **Project 3 - AI Health Checker**: Chatbot interface with conversation bubbles and symptom analysis
5. **Project 4 - Garbage Detection**: App interface showing image classification results with category labels
6. **Achievements Banner**: Google Cloud Arcade badge or certificate composite

**Implementation**: All project images use aspect-ratio-video (16:9) with object-cover, rounded corners (rounded-lg), and subtle shadow.