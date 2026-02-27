# TaskFlow

Landing page for a SaaS task management tool. Modern SaaS aesthetic with violet palette, interactive kanban board mockup built entirely in React, integration badges, and tiered pricing.

## Tech Stack

- **Next.js 16** — App Router, Turbopack
- **Tailwind CSS v4** — `@theme` directive for custom design tokens
- **Framer Motion** — Scroll-triggered animations
- **Lucide React** — Icon system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
components/
  Header.tsx          — Fixed navbar with mobile hamburger menu
  Hero.tsx            — Hero with CTA and kanban board mockup
  KanbanMockup.tsx    — Interactive kanban board built in React
  Features.tsx        — Feature blocks with mini illustrations
  Integrations.tsx    — Third-party integration badges
  Pricing.tsx         — Tiered pricing plans
  Reviews.tsx         — Customer testimonials
  CtaBanner.tsx       — Call-to-action banner
  Footer.tsx          — Site footer with navigation
```
