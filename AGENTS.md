<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ARKON Project Overview

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Package Manager:** npm

## Architecture & Conventions
- **i18n Localization:** 
  - Supported languages: Spanish (`es`) and English (`en`). Default is `es`.
  - Managed via Next.js middleware (`src/middleware.ts`) and dynamic `[lang]` routes.
  - Dictionaries located in `src/dictionaries/` (`en.ts`, `es.ts`).
- **File Structure:**
  - `src/app/[lang]/`: Contains all page routes (`/`, `/nosotros`, `/servicios`, `/contacto`).
  - `src/components/layout/`: Global layout components (`Navbar.tsx`, `Footer.tsx`).
  - `src/components/ui/`: Reusable UI elements (`Button.tsx`, `Accordion.tsx`, `FadeIn.tsx`).
- **Deployment:** 
  - Configured for `standalone` output in `next.config.ts`.
  - Uses a custom deployment script (`scripts/prepare-deploy.mjs`) to package the application as a ZIP archive for Webuzo/cPanel hosting. 
  - Run `npm run deploy:pack` to build and package the application.

## Development Guidelines
- **Routing:** Follow the App Router conventions. Place pages inside `src/app/[lang]/`.
- **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS unless absolutely necessary.
- **Localization:** All text visible to the user MUST be added to the dictionaries for i18n support. Do not hardcode strings in pages or components.
- **Animations:** Use Framer Motion and the custom `FadeIn` component for consistent reveal animations.
- **Components:** Keep UI components modular and place them in `src/components/ui/`.
