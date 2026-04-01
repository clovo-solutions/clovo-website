# Clovo Solutions — Agency Website

A high-performance, SEO-optimized, dark-themed agency website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Project Structure

```
clovo-solutions/
├── public/
│   └── logo.svg                 # Clovo logo
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, Tailwind, custom utilities
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── services/
│   │   │   ├── page.tsx         # Services page (server)
│   │   │   └── ServicesDetail.tsx  # Services detail (client)
│   │   └── contact/
│   │       ├── page.tsx         # Contact page (server)
│   │       └── ContactForm.tsx  # Contact form (client)
│   └── components/
│       ├── AnimatedSection.tsx  # Reusable scroll animation wrapper
│       ├── Navbar.tsx           # Navigation with mobile menu
│       ├── Hero.tsx             # Hero section
│       ├── Services.tsx         # Services overview cards
│       ├── HowItWorks.tsx       # 3-step process section
│       ├── Benefits.tsx         # Outcomes / stats section
│       ├── Testimonials.tsx     # Client testimonials
│       ├── Contact.tsx          # CTA + Calendly placeholder
│       └── Footer.tsx           # Site footer
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone or download the project
cd clovo-solutions

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option A: Git Integration (Recommended)

1. Push the project to a GitHub/GitLab repo
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Customization

### Calendly Integration

In `src/components/Contact.tsx`, replace the placeholder with your Calendly embed:

```tsx
// Option 1: iframe
<iframe
  src="https://calendly.com/YOUR_LINK"
  width="100%"
  height="100%"
  frameBorder="0"
/>

// Option 2: React widget
npm install react-calendly
import { InlineWidget } from "react-calendly";
<InlineWidget url="https://calendly.com/YOUR_LINK" />
```

### Colors

Edit `tailwind.config.js` to change the accent color:

```js
colors: {
  accent: "#01D957", // Change this
}
```

Also update the CSS variable in `globals.css`:

```css
:root {
  --accent: #01D957;
  --accent-rgb: 1, 217, 87;
}
```

### Fonts

Fonts are loaded via Google Fonts in `globals.css`. Replace the imports and CSS variables to change typography.

### Contact Form

The form in `/contact` is currently a placeholder. Connect it to:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` 
- **Netlify Forms**: Add `data-netlify="true"` to the form
- **Custom API**: Send a `fetch` request in the submit handler

## Performance

- Static generation by default (no backend)
- Optimized images via `next/image`
- Minimal JavaScript — animations only on client components
- Semantic HTML for accessibility and SEO
- Proper meta tags and Open Graph data

## License

This project is proprietary to Clovo Solutions.
