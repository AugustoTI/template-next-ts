# template-next-ts

Template base para projetos **Next.js 16 (App Router)** com **TypeScript**, **Tailwind CSS
v4**, componentes UI via **shadcn/ui + Base UI** e tooling completo de qualidade (lint,
format, testes, commits e hooks de git).

## Stack

| Categoria       | Tecnologia                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org) (App Router, Typed Routes, React Compiler)                                       |
| UI              | [React 19](https://react.dev)                                                                                     |
| Estilização     | [Tailwind CSS v4](https://tailwindcss.com)                                                                        |
| Componentes     | [shadcn/ui](https://ui.shadcn.com) sobre [`@base-ui/react`](https://base-ui.com) (headless, não Radix)            |
| Variantes       | `tailwind-variants`                                                                                               |
| Temas           | [`@wrksz/themes`](https://www.npmjs.com/package/@wrksz/themes)                                                    |
| Validação/Env   | [Zod](https://zod.dev) + [`@t3-oss/env-nextjs`](https://env.t3.gg)                                                |
| Datas           | [`dayjs`](https://day.js.org)                                                                                     |
| Testes          | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) + `jsdom` + [MSW](https://mswjs.io) |
| Documentação UI | [Storybook 10](https://storybook.js.org) (framework `@storybook/nextjs-vite`)                                     |
| Lint            | ESLint 9 (flat config) + `typescript-eslint`                                                                      |
| Format          | Prettier (sort-imports + tailwind plugins)                                                                        |
| Git hooks       | [Lefthook](https://github.com/evilmartians/lefthook)                                                              |
| Commits         | [Commitlint](https://commitlint.js.org) (Conventional Commits)                                                    |
| Package manager | [pnpm](https://pnpm.io)                                                                                           |

## Pré-requisitos

- Node.js compatível com as versões definidas nas dependências (`@types/node ^26`)
- [pnpm](https://pnpm.io/installation)

## Como rodar

```bash
pnpm install        # instala as dependências
pnpm dev            # inicia o servidor de desenvolvimento (http://localhost:3000)
```

## Scripts disponíveis

```bash
pnpm dev                  # servidor de desenvolvimento
pnpm build                # build de produção
pnpm start                # sobe o build de produção
pnpm lint                 # ESLint (--fix, --max-warnings=0)
pnpm format               # Prettier (write + check)
pnpm test                 # roda os testes com Vitest
pnpm test:watch           # Vitest em modo watch
pnpm clean                # remove .next e coverage
pnpm storybook            # Storybook em modo dev (porta 6006)
pnpm storybook:build      # build estático do Storybook
```

Para checar tipos manualmente (o hook de pre-commit já faz isso):

```bash
pnpm exec tsc
```

## Estrutura do projeto

O projeto segue o [Feature-Sliced Design (FSD)](https://feature-sliced.design). A pasta
`app/` na raiz é usada apenas pelo roteador do Next.js; o código da aplicação vive em
`src/`, organizado em camadas:

```text
app/                  # roteamento do Next.js (layouts e page.tsx apenas re-exportam)
src/
├── _app/             # camada app: providers, estilos globais e fontes
│   ├── providers/
│   └── styles/       # global.css (entrada do Tailwind v4) e fonts.ts
├── _pages/           # camada pages: uma slice por página (ex.: _pages/home)
├── widgets/          # blocos de UI grandes que compõem páginas
├── features/         # interações do usuário com valor de negócio
├── entities/         # entidades de negócio (user, product...)
└── shared/           # código reutilizável sem regra de negócio
    ├── config/       # env.ts (validação de variáveis de ambiente com Zod + t3-env)
    ├── lib/          # helpers (cn, error-handler, log, wait...) e testes em __tests__/
    │   └── hooks/    # hooks React reutilizáveis (debounce, throttle, pagination, idle...)
    └── ui/           # primitivos de UI (shadcn/ui + @base-ui/react + CVA) e stories
```

`_app` e `_pages` têm prefixo `_` para não colidirem com as convenções `app/` e `pages/`
do Next.js.

As camadas `widgets`, `features` e `entities` começam vazias e devem ser preenchidas
conforme o projeto cresce:

- **`widgets`**: blocos de UI grandes e autossuficientes que compõem uma página (header,
  sidebar, feed...). Combinam `features`, `entities` e `shared`. Cada slice expõe sua API
  pública em `src/widgets/<slice>/index.ts`.
- **`features`**: interações do usuário que entregam valor de negócio (login, adicionar ao
  carrinho, filtrar lista...). Usam `entities` e `shared`. Cada slice expõe sua API
  pública em `src/features/<slice>/index.ts`.
- **`entities`**: entidades de negócio do domínio (user, product, order...): tipos,
  schemas, chamadas de API e componentes de exibição. Usam apenas `shared`. Cada slice
  expõe sua API pública em `src/entities/<slice>/index.ts`.

Regras do FSD (verificadas pelo ESLint via `no-restricted-imports`, em
`eslint.config.ts`):

- Uma camada só importa das camadas **abaixo** dela: `_app` → `_pages` → `widgets` →
  `features` → `entities` → `shared`. A pasta `app/` pode importar de qualquer camada.
- Slices da mesma camada não importam umas das outras (ex.: `features/auth` não importa
  `features/cart`).
- Cada slice expõe uma API pública em `index.ts`, e quem está de fora importa só por ela:
  `~/entities/user`, nunca `~/entities/user/ui/user-card`.
- Dentro de uma slice, use imports relativos; entre camadas, use o alias `~/...`.
- Segmentos comuns dentro de uma slice: `ui/`, `model/`, `api/`, `lib/`, `config/`.

Exemplo de página:

```text
src/_pages/home/
├── index.ts          # export { HomePage } from './ui/home-page'
└── ui/
    └── home-page.tsx
app/page.tsx          # import { HomePage } from '~/_pages/home'; export default HomePage
```

Principais pontos de extensão:

- **Alias de import**: use sempre `~/...` (mapeado para `src/*`) entre camadas.
- **Novos componentes de UI**: adicione via CLI do `shadcn` (`components.json` já está
  configurado com os aliases `~/shared/ui`, `~/shared/lib` e `~/shared/lib/hooks`, base
  color `zinc` e ícones do `react-icons`), em vez de criar a estrutura manualmente.
- **Variáveis de ambiente**: declare em `src/shared/config/env.ts` (client/server/shared)
  — nunca leia `process.env` diretamente no restante do código.
- **Logs de desenvolvimento**: use `devLog`/`devWarn`/`devError` de
  `src/shared/lib/log.ts` em vez de `console.*` (só logam em `NODE_ENV=development`).
- **Tratamento de erros**: `errorHandler`/`errorHandlerAsync`
  (`src/shared/lib/error-handler.ts`) retornam tuplas `[data, error]` em vez de lançar
  exceção — prefira esse padrão em vez de `try/catch` nos pontos que os consomem.

## Estilização e temas

- Não existe `tailwind.config.*` — a configuração do Tailwind v4 vive em
  `src/_app/styles/global.css` e `components.json`.
- O tema é fornecido pelo `@wrksz/themes` (`ThemeProvider` configurado em
  `src/_app/providers/index.tsx`, com suporte a modo claro/escuro/sistema).
- Componentes seguem o padrão `data-slot` + variantes (veja `src/shared/ui/button.tsx`
  como referência de variantes/tamanhos).

## Qualidade e Git hooks

Este projeto usa [Lefthook](https://github.com/evilmartians/lefthook) para automatizar
checagens via hooks de git:

- **pre-commit**: ESLint (`--fix`), Prettier (em `*.{css,json,md,mdx,mjs}`), checagem de
  tipos (`tsc`) e Vitest (`related` nos arquivos `*.{ts,tsx}` staged).
- **commit-msg**: valida a mensagem de commit com Commitlint seguindo
  [Conventional Commits](https://www.conventionalcommits.org/) (ex.: `feat:`, `fix:`,
  `chore:`).
- **pre-push**: roda `pnpm build` e `pnpm lint` completos.

Ou seja, o commit/push será bloqueado se lint, tipos, testes relacionados ou build
falharem — mantenha essas checagens passando localmente em vez de usar `--no-verify`.

## Testes

- Ambiente: [Vitest](https://vitest.dev) + `jsdom` (configurado em `vitest.config.mts`,
  com `@vitejs/plugin-react` e resolução de paths do `tsconfig.json`).
- `@testing-library/react`, `@testing-library/dom` e `@testing-library/user-event` para
  testes de componentes; `msw` e `msw-storybook-addon` para mockar requisições em testes e
  no Storybook.
- Exemplos em `src/shared/lib/__tests__/` — coloque os testes em uma pasta `__tests__/` ao
  lado do código testado, com o padrão `*.test.ts(x)`.

## Storybook

As stories devem seguir o padrão `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` (ou `.mdx`),
conforme `.storybook/main.ts`. Framework: `@storybook/nextjs-vite`. Addons habilitados:
a11y, docs, themes e `msw-storybook-addon`.

## Convenções de código

- Sem ponto e vírgula, aspas simples, vírgula final em tudo, largura de linha 90
  (Prettier).
- Ordem de imports é automática (plugin `@ianvs/prettier-plugin-sort-imports`): React →
  Next → `types` → `~/_app` → `~/_pages` → `~/widgets` → `~/features` → `~/entities` →
  `~/shared` → imports relativos.
- Variáveis/argumentos/erros de catch não utilizados devem ser prefixados com `_`
  (permitido pelo ESLint).
- Conteúdo/copy da aplicação está em **pt-BR** — mantenha esse padrão ao adicionar novas
  páginas/textos.

## Assistência com IA (Claude Code)

Este repositório inclui um [`CLAUDE.md`](./CLAUDE.md) com instruções de arquitetura e
comandos voltadas para o [Claude Code](https://claude.com/claude-code). Consulte-o para
mais contexto ao usar ferramentas de IA neste projeto.
