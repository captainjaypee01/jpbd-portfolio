# John Paul Dala — Portfolio (React 19 + Vite + Tailwind 4.1)

A modern, animated portfolio showcasing full‑stack and IoT work, featuring an interactive IoT workflow demo, project gallery with filters, animated timelines and counters, and an accessible, performant UI.

**Tech:** React 19 (TypeScript) · Vite · Tailwind CSS 4.1 · shadcn‑style UI · `motion` (Framer Motion for React 19) · Vercel

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Editing Content](#editing-content)
- [Styling & Design System](#styling--design-system)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [Performance & SEO](#performance--seo)
- [Testing (Optional)](#testing-optional)
- [Deployment (Vercel)](#deployment-vercel)
- [CI (Optional)](#ci-optional)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

- **Hero** with typewriter intro, CTAs, and animated headshot
- **About** with animated counters and tech highlights
- **Experience** vertical timeline with staggered scroll animations
- **Skills** with category filters and animated progress bars
- **Projects** with tech badge filters and card animations
- **IoT Workflow Demo** interactive, click‑triggered packet flow (dashboard → MQTT → device → dashboard)
- **Education & Certifications** cards
- **Contact** form (mailto fallback) + copy‑to‑clipboard for email/phone
- **Responsive** mobile‑first layout; dark theme by default
- **A11y**: focus rings, semantic HTML, keyboard‑friendly

---

## Requirements

- **Node.js 22+**
- **npm** (or pnpm/yarn)

---

## Quick Start

```bash
# 1) Create a Vite React TS project
npm create vite@latest portfolio -- --template react-ts
cd portfolio

# 2) Replace the generated files with this repository’s files

# 3) Install dependencies
npm i

# 4) Start dev server
npm run dev
# → http://localhost:5173
```

**Assets to add:**

- `public/Resume.pdf` (your latest resume)
- `public/headshot.JPG` (profile photo)

---

## Project Structure

```
portfolio/
├── public/
│   ├── Resume.pdf           # Downloaded via Hero/Footer
│   └── headshot.JPG         # Hero headshot
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn-style primitives (Button, Card, ...)
│   │   ├── layout/          # Header, Footer
│   │   └── animations/      # Typewriter, etc.
│   ├── data/                # Content data (projects, experience, skills)
│   ├── sections/            # Page sections (Hero, About, Skills, ...)
│   ├── pages/               # Route components (Home)
│   ├── lib/                 # Utilities, constants (links, contact)
│   ├── index.css            # Tailwind 4 entry & theme tokens
│   ├── main.tsx             # App bootstrap
│   └── App.tsx              # Routes & layout
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## Configuration

### Environment Variables (optional)

If you later switch to a real contact API:

```
VITE_CONTACT_ENDPOINT=https://your.vercel.app/api/contact
VITE_ANALYTICS_ID=G-XXXXXXX
```

Access with `import.meta.env.VITE_CONTACT_ENDPOINT`.

### Links & Contact

Edit `src/lib/utils.ts`:

```ts
export const EMAIL = 'jaypeedala31@gmail.com'
export const PHONE = '+65 8894 3684'
export const LOCATION = 'Singapore'
export const GITHUB = 'https://github.com/captainjaypee01'
export const LINKEDIN = 'https://www.linkedin.com/in/johnpauldala/'
```

---

## Editing Content

### Skills

`src/data/skills.ts`

```ts
{ name: 'React', level: 90, category: 'Frontend' }
```

Categories: `Frontend`, `Backend & API`, `Cloud & Infrastructure`, `DevOps & Tools`, `AI & Data`.

### Experience

`src/data/experience.ts`

```ts
{
  company: 'Lingjack Engineering Works Pte Ltd',
  role: 'Senior Software Engineer',
  start: 'Sept 2021',
  end: 'Present',
  bullets: ['Led IoT admin dashboard...', 'Azure architecture...']
}
```

### Projects

`src/data/projects.ts`

```ts
{
  title: 'IoT Monitoring Dashboard',
  description: 'Real-time visualizations...',
  tech: ['React','Vite','Tailwind','MQTT','FastAPI','Laravel','OpenAI'],
  type: 'IoT',
  links: { demo: 'https://...', repo: 'https://github.com/...' }
}
```

Tags in the **filter** come from each project’s `tech` array.

### Assets

Place images/screenshots inside `public/` and reference them directly (`/your.png`).

---

## Styling & Design System

- Tailwind v4.1 **CSS‑first** setup: `@import "tailwindcss"` in `src/index.css`
- Theme tokens via `@theme` (OKLCH colors, radii). Example:

```css
@theme {
  --color-primary-600: oklch(0.63 0.12 245);
  --radius-2xl: 1.5rem;
}
```

- Utility classes for buttons, cards, badges live in `index.css`.
- UI primitives in `src/components/ui/*` are lightweight shadcn‑style components.

---

## Animations

- Using `` (for React 19): `import { motion } from 'motion/react'`
- Scroll reveals: `whileInView` + `viewport={{ once: true }}`
- IoT demo: `useAnimation()` drives packet across panels
- Typewriter: small custom component

> Consider honoring `prefers-reduced-motion` if you expand animations.

---

## Accessibility

- Focus styles via `.focus-ring`
- High‑contrast text on dark backgrounds
- Semantic headings (`h1` once in Hero, `h2` for sections)
- Buttons for actions; links for navigation; proper `rel="noreferrer"` on external links
- Copy‑to‑clipboard uses `<button>` semantics

---

## Performance & SEO

- **Vite** optimized production build
- Prefer compressed images (WebP) and responsive sizes
- Lazy loading is built‑in at the route level via `React.lazy`

**SEO Tips**

- Edit `<meta>` and Open Graph tags in `index.html`
- Descriptive `alt` text for all images

**Core Web Vitals**

- Keep images small
- Use CSS where possible for light effects
- Avoid heavy libraries without need

---

## Testing (Optional)

```bash
npm i -D vitest @testing-library/react @testing-library/user-event jsdom
```

`package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

`vitest.config.ts` (optional):

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom' }
})
```

Example test `src/sections/__tests__/Hero.test.tsx`:

```ts
import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText(/John Paul Dala/i)).toBeInTheDocument()
  })
})
```

---

## Deployment (Vercel)

1. Push code to GitHub/GitLab/Bitbucket
2. Import repo on Vercel
3. Framework: **Vite**
4. Build: `npm run build` · Output: `dist`
5. Ensure **Node 22** in Project Settings if needed
6. Add env vars if using contact API

`vercel.json` is included:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## CI (Optional)

`.github/workflows/ci.yml`:

```yaml
name: CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npm run test --if-present
```

(Optional) Lighthouse CI:

```json
{
  "ci": {
    "collect": { "staticDistDir": "dist" },
    "assert": { "assertions": { "categories:performance": ["warn", { "minScore": 0.9 }] } }
  }
}
```

---

## Troubleshooting

**Tailwind 4 styles missing**

- Ensure `@import "tailwindcss";` is at the top of `src/index.css`
- No `tailwind.config.js` required for basic v4

**Motion not animating**

- Use `motion` (for React 19): `import { motion } from 'motion/react'`

**shadcn/ui**

- Local primitives are provided; the official CLI isn’t required

**Resume link 404**

- Ensure `public/Resume.pdf` exists and matches case

**Headshot not visible**

- Ensure `public/headshot.JPG` exists

---

## Roadmap

- Theme toggle (system + manual)
- Real contact API (Vercel function) with spam protection
- Analytics (Plausible or GA4)
- Sitemap & robots.txt
- Project detail modals with lightbox
- Reduced‑motion preferences across animations

---

## License

MIT License © John Paul Dala

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

