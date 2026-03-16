# LendWise LO Landing Page

A personal landing page template for LendWise Mortgage loan officers. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Customize for a New LO

**Everything you need to change is in one file:** `src/config/lo-profile.ts`

### Step-by-step:

1. **Edit `src/config/lo-profile.ts`** with the LO's info:
   - Name, title, tagline
   - Phone, email, SMS number
   - NMLS and DRE numbers
   - Application URL (workFlowId & siteId from mortgage platform)
   - About bio and hero description
   - "Why Work With Me" cards (`aboutCards`)
   - Loan programs offered (`programs` — remove any the LO doesn't offer)
   - Client reviews/testimonials (`reviews`)
   - Page metadata for SEO

2. **Add the LO's headshot** to `public/images/team/` and update `photoPath` in the profile

3. **Update the vCard** at `public/{firstname}-{lastname}.vcf` with the LO's contact info

4. **Restart the dev server** — `npm run dev`

That's it. No other files need to be touched.

## Page Sections

1. **Header** — LendWise logo, Apply Now, Contact Me, Download vCard, Rate Tracker buttons
2. **Parallax Hero** — LO photo, name, title, tagline, experience summary
3. **Why Work With Me** — 4 value proposition cards (configurable)
4. **Loan Programs** — Grid of available programs (configurable)
5. **Odin AI** — AI mortgage assistant showcase with owl video
6. **Rate Tracker** — Lead capture form for rate monitoring
7. **Client Reviews** — Scrolling carousel of testimonials (configurable)
8. **Apply CTA** — Pre-approval call to action with contact info
9. **Footer** — Company info, compliance, and links
10. **Mobile Tab Bar** — Bottom navigation for mobile users

## Tech Stack

- **Next.js 16** — React framework with Turbopack
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **GSAP** — Scroll-based parallax effects
- **Lucide React** — Icon library

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx          — Main page (all sections)
    layout.tsx        — Root layout with metadata
    globals.css       — Global styles
  components/ui/
    parallax-hero.tsx — Hero section with photo
    luma-bar.tsx      — Mobile bottom navigation
    animated-background.tsx — Section background effects
    star-button.tsx   — Animated CTA buttons
  config/
    lo-profile.ts     — LO profile data (EDIT THIS)
public/
  images/             — Logos, icons, LO photos
  videos/             — Owl animation video
  *.vcf               — vCard download file
```

## Compliance

All pages include required disclosures:
- Company NMLS and DRE numbers
- Individual LO NMLS and DRE numbers
- Equal Housing Lender statement
