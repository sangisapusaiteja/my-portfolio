# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Dark Theme** - Sleek dark mode with blue/purple neon gradients
- **Glassmorphism UI** - Glass-morphic cards with backdrop blur
- **Smooth Animations** - Framer Motion scroll-triggered and entrance animations
- **Lenis Smooth Scroll** - Buttery smooth scrolling experience
- **Custom Cursor** - Interactive cursor with hover effects (auto-disabled on touch devices)
- **Fully Responsive** - Optimized for all screen sizes
- **Centralized Data** - Single data file for easy content updates
- **Gradient Text Effects** - Eye-catching gradient and glow animations

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Utility-first CSS with cascade layers
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling
- **Lucide Icons** - Icon set
- **shadcn/ui** - UI components

## Project Structure

```
portfolio-3d/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Main portfolio page
│   │   └── globals.css             # Global styles & animations
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   └── TypingAnimation.tsx # Role typing effect
│   │   ├── about/
│   │   │   └── About.tsx           # About section
│   │   ├── tech-stack/
│   │   │   └── TechStack.tsx       # Tech stack with category filters
│   │   ├── projects/
│   │   │   └── Projects.tsx        # Projects showcase
│   │   ├── experience/
│   │   │   └── Experience.tsx      # Experience timeline
│   │   ├── contact/
│   │   │   └── Contact.tsx         # Contact section
│   │   ├── shared/
│   │   │   ├── Navigation.tsx      # Responsive navigation
│   │   │   ├── CustomCursor.tsx    # Custom cursor (desktop only)
│   │   │   └── SmoothScroll.tsx    # Lenis scroll wrapper
│   │   └── ui/                     # shadcn/ui components
│   └── lib/
│       ├── data.ts                 # All portfolio content & data
│       └── utils.ts                # Utility functions
├── public/
│   └── resume.pdf                  # Your resume (add this)
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All portfolio content is centralized in a single file: **`src/lib/data.ts`**

Edit this file to update:

- **Personal info** - Name, greeting, description, roles, resume URL
- **Navigation** - Nav menu items
- **About section** - Bio paragraphs, stats, highlights
- **Tech stack** - Technologies and categories
- **Projects** - Title, description, tech tags, links
- **Experience** - Companies, roles, achievements
- **Contact** - Email, social links, footer text

### Add Your Resume

Place your resume PDF in the `public/` folder as `resume.pdf`.

## Build

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy

Vercel auto-detects Next.js and handles builds and deployments.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contact

**Saiteja Sangisapu**
- Email: tejasai38409@gmail.com
- LinkedIn: [linkedin.com/in/saiteja-sangisapu](https://linkedin.com/in/saiteja-sangisapu)
- GitHub: [github.com/saiteja-sangisapu](https://github.com/saiteja-sangisapu)

---

Built with Next.js, TypeScript & Tailwind CSS
