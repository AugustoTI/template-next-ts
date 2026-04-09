# Agent Instructions

## Commands

```bash
pnpm dev          # Start Next.js dev server
pnpm build        # Production build
pnpm lint         # ESLint (fails on warnings, auto-fixes)
pnpm format       # Prettier (write + check)
pnpm tsc          # TypeScript type-check
pnpm test         # Jest (passWithNoTests)
pnpm test:watch   # Jest watch mode
pnpm storybook    # Storybook on port 6006
pnpm storybook:build
pnpm commit       # Interactive commitizen (conventional commits)
pnpm clean        # Remove .next and coverage
```

## Git Hooks (lefthook)

- **pre-commit**: ESLint → Prettier (CSS/JSON/MD/MDX/MJS) → TypeScript → Tests (staged
  TS/TSX only)
- **commit-msg**: commitlint (conventional commits)
- **pre-push**: Build → Lint

## Key Conventions

- Path alias: `~/*` → `src/*`
- Commit messages: conventional format (conventionalcommits.org)
- Unused vars: error unless prefixed with `_`
- Test files: `*.test.ts` or `*.spec.ts` (none currently exist)
- Storybook stories: `*.stories.tsx` alongside components

## Architecture

- **src/app/** - Next.js App Router pages
- **src/components/ui/** - Radix/Ark UI component library
- **src/providers/** - React context providers (theme)
- **src/config/** - App config (env, constants)
- **src/styles/** - Global CSS (Tailwind 4 + themes)
- **src/utils/** - Utility functions

## Tech Stack

- Next.js 16 (App Router, typed routes)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4 (CSS-based config)
- Storybook 10 (MSW for API mocking)
- Jest + happy-dom for testing
- @t3-oss/env-nextjs for type-safe env vars
