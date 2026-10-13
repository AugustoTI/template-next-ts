# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

```bash
pnpm dev                  # Start Next.js dev server
pnpm build                # Production build
pnpm start                # Serve production build
pnpm lint                 # ESLint (--max-warnings=0, --fix, cached in .temp/)
pnpm format               # Prettier --check --write (cached in .temp/)
pnpm test                 # Vitest single run (vitest run)
pnpm test:watch           # Vitest watch mode
pnpm test:coverage        # Vitest with v8 coverage
pnpm tsc                  # Type-check (no emit) — no package.json script, pnpm runs the binary
pnpm storybook            # Storybook dev server on port 6006
pnpm storybook:build      # Build static Storybook
pnpm clean                # Remove .next and coverage
```

Run a single test file / filter by name / run tests related to a source file:

```bash
pnpm test src/shared/lib/__tests__/cn.test.ts
pnpm test -t "name"
pnpm vitest related --run src/shared/lib/cn.ts   # what lefthook runs on pre-commit
```

## Git hooks (lefthook.yml)

Pre-commit, commit-msg, and pre-push hooks run automatically and will block commits/pushes
that fail:

- **pre-commit** (parallel): `eslint --fix` on `src` and `app` (when `*.{ts,tsx,mts,cts}`
  are staged), `prettier --write` on staged `*.{css,json,md,mdx}`, `tsc` type-check, and
  `vitest related --run` on staged `*.{ts,tsx}`.
- **commit-msg**: `commitlint` — commit messages must follow **Conventional Commits**
  (`@commitlint/config-conventional`).
- **pre-push**: full `pnpm build`.

When making changes, assume these will run — keep lint/type-check clean rather than
relying on `--no-verify`.

## Architecture

This is a **Next.js 16 App Router** template (not a monorepo — `pnpm-workspace.yaml` only
holds pnpm settings like `allowBuilds`, no `packages:` entries).

### Path alias

`~/*` maps to `src/*` (configured in `tsconfig.json`; Vitest picks it up via
`resolve.tsconfigPaths`). Use `~/...` across layers/slices; use relative imports only
inside a single slice.

### Feature-Sliced Design (FSD)

The codebase follows [Feature-Sliced Design](https://feature-sliced.design). The root
`app/` folder is **only** the Next.js router: route files stay thin and re-export from FSD
layers (e.g. `app/page.tsx` → `import { HomePage } from '~/_pages/home'`). Everything else
lives in `src/`, in layers from highest to lowest:

- `src/_app/` — app-wide setup: `providers/` (`Providers`, wraps `ThemeProvider`),
  `styles/global.css` (Tailwind v4 entry + CSS variables, referenced by `components.json`,
  Prettier's `tailwindStylesheet` and `.storybook/preview.tsx`), `styles/fonts.ts`
  (`next/font`).
- `src/_pages/` — one slice per page (`_pages/home/index.ts` + `ui/home-page.tsx`).
- `src/widgets/` — large self-contained UI blocks composing a page.
- `src/features/` — user interactions with business value.
- `src/entities/` — business entities (types, schemas, API calls, display components).
- `src/shared/` — reusable code with no business logic, split into segments:
  - `shared/ui/` — shadcn/ui-generated primitives built on **`@base-ui/react`** (not
    Radix), variants via `class-variance-authority` (`cva`). Stories are colocated
    (`button.stories.tsx`). `components.json` aliases point here (`components`/`ui` →
    `~/shared/ui`, `utils` → `~/shared/lib/cn`, `lib` → `~/shared/lib`, `hooks` →
    `~/shared/lib/hooks`); style `base-lyra`, base color `zinc`, icons `react-icons`.
  - `shared/config/env.ts` — typed/validated env vars via `@t3-oss/env-nextjs` + `zod`.
    Add new env vars here (client/server/shared), never read `process.env` elsewhere.
  - `shared/lib/hooks/` — general-purpose React hooks (debounce, throttle, media-query,
    pagination, idle, geolocation, etc.) — check here before writing a new one.
  - `shared/lib/` — framework-agnostic helpers (tests in `shared/lib/__tests__/`):
    - `cn.ts` — `clsx` + `tailwind-merge` class merger, used everywhere (also registered
      as a Prettier/Tailwind sort function via `tailwindFunctions: ["cn", "cva"]`).
    - `error-handler.ts` — `errorHandler`/`errorHandlerAsync` return Go-style
      `[data, error]` tuples instead of throwing; prefer this over try/catch at call sites
      that consume it.
    - `log.ts` — `devLog`/`devError`/`devWarn` only log when
      `env.NODE_ENV === 'development'`; use instead of raw `console.*`.

`_app`/`_pages` are prefixed with `_` so they don't collide with Next's `app/`/`pages/`
conventions.

Rules (enforced by `no-restricted-imports` blocks generated in `eslint.config.ts`):

- A layer may only import from layers **below** it (`_app` → `_pages` → `widgets` →
  `features` → `entities` → `shared`). Root `app/` may import from any layer.
- Slices of the same layer must not import each other.
- Sliced layers (`_pages`, `widgets`, `features`, `entities`) expose a public API in
  `<layer>/<slice>/index.ts`; outside code imports `~/<layer>/<slice>`, never deep paths.
- Typical segments inside a slice: `ui/`, `model/`, `api/`, `lib/`, `config/`.

### Styling & theming

- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.*` file — config
  lives in `global.css` and `components.json`).
- Theming is provided by `@wrksz/themes` — `ThemeProvider` is wired in
  `src/_app/providers/index.tsx` with `attribute="class"`, `defaultTheme="system"`,
  `enableSystem`.
- Components use `data-slot` attributes and CVA variant objects; follow the existing
  pattern in `src/shared/ui/button.tsx` (variants:
  `default|outline|secondary|ghost|destructive|link`; sizes:
  `default|xs|sm|lg|icon|icon-xs|icon-sm|icon-lg`) when adding new primitives.
- Adding new shadcn components should go through the `shadcn` CLI (`components.json` is
  already configured) rather than hand-rolling structure.

### Next.js config (`next.config.ts`)

- `typedRoutes: true` — route paths are type-checked; use typed `Link`/`router` APIs
  accordingly.
- `reactCompiler: true` — the React Compiler (babel-plugin-react-compiler) is enabled;
  avoid manual `useMemo`/`useCallback` micro-optimizations that fight the compiler unless
  there's a proven need.
- `cacheComponents: true` and `partialPrefetching: true` are enabled.
- Imports `~/shared/config/env` at the top for build-time env validation.

### Testing

- Vitest (`vitest.config.mts`) + `@testing-library/react` + `jsdom`, with `globals: true`
  (`describe`/`it`/`vi` without imports) and `@vitejs/plugin-react`.
- `vitest.setup.ts` loads `@testing-library/jest-dom/vitest` matchers, mocks
  `window.matchMedia`, `ResizeObserver` and `IntersectionObserver`, and calls
  `vi.clearAllMocks()` after each test.
- Tests live in a `__tests__/` folder next to the code under test, named `*.test.ts(x)`
  (see `src/shared/lib/__tests__/`).
- Coverage only includes `src/**/*.ts` (plus `*.container.{ts,tsx}`) and excludes
  `stories`, `styles`, `config`, `types`, `services`, etc.
- `msw` + `msw-storybook-addon` are available for network mocking in tests and Storybook
  (worker directory: `public/`).

### Storybook

Config in `.storybook/main.ts`: stories are any `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` or
`.mdx` (colocated with the component, e.g. `src/shared/ui/button.stories.tsx`), framework
`@storybook/nextjs-vite`, addons: a11y, docs, themes, `msw-storybook-addon`.
`.storybook/preview.tsx` imports `src/_app/styles/global.css` and toggles the `dark` class
via `withThemeByClassName`.

### Code style (enforced, don't fight it)

- No semicolons, single quotes, trailing commas everywhere, 90-char print width,
  `arrowParens: avoid` (Prettier).
- Import order is enforced by `@ianvs/prettier-plugin-sort-imports`: React → Next →
  (blank) → `types` → `~/_app` → `~/_pages` → `~/widgets` → `~/features` → `~/entities` →
  `~/shared` → (blank) → relative imports.
- ESLint flat config (`eslint.config.ts`) combines `@eslint/js` recommended,
  `typescript-eslint` recommended, `eslint-config-prettier`, `@eslint-react`
  `recommended-typescript`, `react-hooks` recommended, and the FSD import rules. Unused
  vars/args/catch bindings prefixed with `_` are allowed.
- App content/UI copy is in **pt-BR** — match this unless told otherwise.
