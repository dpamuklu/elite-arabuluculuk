# Repository Guidelines

## Project Structure & Modules
- `src/app`: Next.js App Router pages, layouts, global styles.
- `src/components`: Reusable UI, forms, layout, providers.
- `src/lib`: Utilities and validation schemas (e.g., Zod forms).
- `src/types`: Shared TypeScript types.
- `public`: Static assets (images, icons).
- Config: `next.config.ts`, `tsconfig.json`, `tailwind.config.js`, `eslint.config.mjs`.

## Build, Test, and Dev
- `npm run dev`: Start local dev server with Turbopack on `http://localhost:3000`.
- `npm run build`: Production build (Next.js 15, SWC minify).
- `npm start`: Serve the production build.
- `npm run lint`: Lint with Next/TypeScript rules.
- Node: Use Node 18.18+ or 20+. Install deps with `npm ci`.

## Coding Style & Naming
- TypeScript strict mode enabled; prefer explicit types on exports.
- Indentation: 2 spaces; keep files typed (`.ts`/`.tsx`).
- Components: PascalCase in `src/components` (e.g., `ContactForm.tsx`).
- Pages/routes: lower-kebab in `src/app` (e.g., `hizmetler/page.tsx`).
- Utilities and modules: lower-camel or kebab (e.g., `lib/utils.ts`).
- Run `npm run lint` before committing.

## Testing Guidelines
- No framework is configured yet. If adding tests:
  - Unit: Jest + React Testing Library, files as `*.test.tsx` near source or under `src/__tests__`.
  - E2E: Playwright; store specs in `e2e/` and run in CI.
  - Aim for coverage on form validation (`src/lib/validations`) and server actions (`src/app/actions`).

## Commit & Pull Requests
- Commits: Clear, scoped messages; Conventional Commits welcomed (e.g., `feat: add newsletter form`).
- PRs must include:
  - Purpose and scope; linked issue/Task.
  - Screenshots/GIFs for UI changes (desktop + mobile).
  - Notes on accessibility, performance, or SEO if affected.
  - Checklist: `npm run lint` clean; build passes; manual test steps.

## Security & Configuration
- Secrets in `.env.local` (never commit). Example: `RESEND_API_KEY=...`.
- Do not log PII from forms; keep rate limiting intact (`src/app/actions/contact.ts`).
- Security headers are set in `next.config.ts`; keep or extend rather than remove.
