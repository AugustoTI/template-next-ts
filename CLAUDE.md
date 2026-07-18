# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

```bash
pnpm dev                  # Start Next.js dev server
pnpm build                # Production build
pnpm start                # Serve production build
pnpm lint                 # ESLint (src only, --max-warnings=0, --fix)
pnpm format               # Prettier --write --check on staged/all files
pnpm test                 # Jest (--passWithNoTests)
pnpm test:watch           # Jest watch mode
pnpm tsc                  # Type-check (no emit) — not a package.json script but used by lefthook; run `pnpm exec tsc`
pnpm storybook            # Storybook dev server on port 6006
pnpm storybook:build      # Build static Storybook
pnpm clean                # Remove .next and coverage
```

Run a single test file:

```bash
pnpm test src/hooks/use-debounce.test.ts
pnpm test -- --findRelatedTests src/utils/cn.ts   # what lefthook runs on pre-commit
```

There is no dedicated test script filter flag beyond Jest's own CLI — pass a path or
`-t "name"` after `pnpm test --`.

## Git hooks (lefthook.yml)

Pre-commit, commit-msg, and pre-push hooks run automatically and will block commits/pushes
that fail:

- **pre-commit**: `eslint --fix`, `prettier --write` (on `*.{css,json,md,mdx,mjs}`), `tsc`
  type-check, and `jest --findRelatedTests` on staged `*.{ts,tsx}`.
- **commit-msg**: `commitlint` — commit messages must follow **Conventional Commits**
  (`@commitlint/config-conventional`).
- **pre-push**: full `pnpm build` and `pnpm lint`.

When making changes, assume these will run — keep lint/type-check clean rather than
relying on `--no-verify`.

## Architecture

This is a **Next.js 16 App Router** template (not a monorepo — `pnpm-workspace.yaml` only
holds pnpm settings like `allowBuilds`, no `packages:` entries).

### Path alias

`~/*` maps to `src/*` (configured in both `tsconfig.json` and `jest.config.ts`). Always
import via `~/...`, never relative paths across top-level `src` folders.

### Directory layout

- `src/app/` — Next.js App Router routes/layouts.
- `src/components/ui/` — shadcn/ui-generated primitives, built on top of
  **`@base-ui/react`** headless components (not Radix). Variants are defined with
  `class-variance-authority` (`cva`). See `components.json` for the shadcn config: style
  `base-lyra`, base color `zinc`, icon library `react-icons`, aliases (`~/components`,
  `~/components/ui`, `~/hooks`, `utils` → `~/utils/cn`).
- `src/config/env.ts` — typed/validated env vars via `@t3-oss/env-nextjs` + `zod`. Add new
  env vars here (client/server/shared), never read `process.env` directly elsewhere.
- `src/hooks/` — general-purpose React hooks (debounce, throttle, media-query, pagination,
  idle, geolocation, etc.) — check here before writing a new one, this template already
  has a broad set.
- `src/utils/` — framework-agnostic helpers:
  - `cn.ts` — `clsx` + `tailwind-merge` class merger, used as the Tailwind class-merging
    function everywhere (also registered as a Prettier/Tailwind sort function via
    `tailwindFunctions: ["cn", "cva"]`).
  - `error-handler.ts` — `errorHandler`/`errorHandlerAsync` return Go-style
    `[data, error]` tuples instead of throwing; prefer this pattern over try/catch at call
    sites that consume it.
  - `log.ts` — `devLog`/`devError`/`devWarn` only log when
    `env.NODE_ENV === 'development'`; use instead of raw `console.*` for dev-only
    diagnostics.
- `src/styles/global.css` — Tailwind v4 entry point and CSS variables (referenced by
  `components.json` and Prettier's `tailwindStylesheet`).

### Styling & theming

- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.*` file — config
  lives in `global.css` and `components.json`).
- Theming is provided by `@wrksz/themes` — `ThemeProvider` is wired in
  `src/app/layout.tsx` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`.
- Components use `data-slot` attributes and CVA variant objects; follow the existing
  pattern in `src/components/ui/button.tsx` (variants:
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
- Imports `~/config/env` at the top for build-time env validation.

### Internationalization (i18n)

`i18next` + `react-i18next`, integrated with the App Router via `next-i18next` (the App
Router-oriented rewrite, with `next-i18next/server`, `next-i18next/client`, and
`next-i18next/proxy` entrypoints — not the legacy Pages Router `next-i18next`).

- `src/i18n/config.ts` — `i18nConfig`: `supportedLngs` (currently only `pt-BR`),
  `fallbackLng` and a `resourceLoader` that reads JSON from disk in dev (`fs/promises`)
  vs. dynamic `import()` in production.
- `src/i18n/locales/<locale>/<namespace>.json` — translation files, one per locale +
  namespace (e.g. `src/i18n/locales/pt-BR/home.json`).
- `src/i18n/resource-type.ts` — builds the `Resources` type from imported namespace JSONs;
  `src/@types/i18next.d.ts` augments `i18next`'s `CustomTypeOptions.resources` with it so
  `t()` keys are typed/autocompleted.
- `src/proxy.ts` — Next.js `proxy.ts` (the file-convention successor to `middleware.ts`)
  calling `createProxy(i18nConfig)` from `next-i18next/proxy`; `matcher` excludes `api`,
  `_next/static`, `_next/image`, `assets`, and static public files.
- `src/app/layout.tsx` calls `initServerI18next(i18nConfig)` at module scope, is an
  `async` Server Component that resolves `{ i18n, lng }` via `getT()`, builds `resources`
  with `getResources(i18n)`, and wraps children in
  `<I18nProvider language={lng} resources={resources}>` (from `next-i18next/client`) —
  `<html lang={lng}>` is dynamic, not a hardcoded `"pt-BR"` anymore.
- Server Components/pages get a typed, namespaced `t` via
  `const { t } = await getT('namespace')` (see `src/app/page.tsx`).

**Never hardcode user-facing copy** — add the key to the relevant namespace JSON and call
`t('key')`. Adding a new namespace requires updating three places: the locale JSON file,
the `ns` array in `src/i18n/config.ts`, and the `_resources` object in
`src/i18n/resource-type.ts` (otherwise `t()` won't be typed for it)

### Testing

- Jest + `@testing-library/react` + `@happy-dom/jest-environment` (not jsdom).
- `msw` + `msw-storybook-addon` are available for network mocking in tests and Storybook
  (worker directory: `public/`).
- No test files exist yet in this template — when adding the first ones, colocate as
  `*.test.ts(x)` next to the source file (matches lefthook's `--findRelatedTests` glob).

### Storybook

Config in `.storybook/main.ts`: stories are any `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` or
`.mdx`, framework `@storybook/nextjs`, addons: onboarding, a11y, themes, docs.

### Code style (enforced, don't fight it)

- No semicolons, single quotes, trailing commas everywhere, 90-char print width,
  `arrowParens: avoid` (Prettier).
- Import order is enforced by `@ianvs/prettier-plugin-sort-imports`: React → Next →
  (blank) → `types` → `~/types` → `~/configs` → `~/i18n` → `~/lib` → `~/utils` →
  `~/actions` → `~/hooks` → `~/components/ui` → `~/components` → `~/assets` → (blank) →
  relative imports.
- ESLint flat config (`eslint.config.mjs`) combines `typescript-eslint`,
  `eslint-config-next/core-web-vitals`, `react`/`react-hooks` recommended, and
  `eslint-plugin-storybook`. Unused vars/args/catch bindings prefixed with `_` are
  allowed.
- App content/UI copy is in **pt-BR** (only locale in `i18nConfig.supportedLngs`) — match
  this unless told otherwise, and route it through the i18n `t()` function rather than
  hardcoded JSX strings (see [Internationalization (i18n)](#internationalization-i18n)).
