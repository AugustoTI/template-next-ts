# template-next-ts

Template base para projetos **Next.js 16 (App Router)** com **TypeScript**, **Tailwind CSS
v4**, componentes UI via **shadcn/ui + Base UI** e tooling completo de qualidade (lint,
format, testes, commits e hooks de git).

## Stack

| Categoria       | Tecnologia                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework       | [Next.js 16](https://nextjs.org) (App Router, Typed Routes, React Compiler)                                                                                  |
| UI              | [React 19](https://react.dev)                                                                                                                                |
| Estilização     | [Tailwind CSS v4](https://tailwindcss.com)                                                                                                                   |
| Componentes     | [shadcn/ui](https://ui.shadcn.com) sobre [`@base-ui/react`](https://base-ui.com) (headless, não Radix)                                                       |
| Variantes       | `class-variance-authority` (CVA)                                                                                                                             |
| Temas           | [`@wrksz/themes`](https://www.npmjs.com/package/@wrksz/themes)                                                                                               |
| Validação/Env   | [Zod](https://zod.dev) + [`@t3-oss/env-nextjs`](https://env.t3.gg)                                                                                           |
| Datas           | [`dayjs`](https://day.js.org)                                                                                                                                |
| i18n            | [`i18next`](https://www.i18next.com) + [`react-i18next`](https://react.i18next.com) + [`next-i18next`](https://github.com/i18next/next-i18next) (App Router) |
| Testes          | [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com) + `happy-dom` + [MSW](https://mswjs.io)                                           |
| Documentação UI | [Storybook 10](https://storybook.js.org)                                                                                                                     |
| Lint            | ESLint 9 (flat config) + `typescript-eslint`                                                                                                                 |
| Format          | Prettier (sort-imports + tailwind plugins)                                                                                                                   |
| Git hooks       | [Lefthook](https://github.com/evilmartians/lefthook)                                                                                                         |
| Commits         | [Commitlint](https://commitlint.js.org) (Conventional Commits)                                                                                               |
| Package manager | [pnpm](https://pnpm.io)                                                                                                                                      |

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
pnpm lint                 # ESLint em src/ (--fix, --max-warnings=0)
pnpm format               # Prettier (write + check)
pnpm test                 # roda os testes com Jest
pnpm test:watch           # Jest em modo watch
pnpm clean                # remove .next e coverage
pnpm storybook            # Storybook em modo dev (porta 6006)
pnpm storybook:build      # build estático do Storybook
```

Para checar tipos manualmente (o hook de pre-commit já faz isso):

```bash
pnpm exec tsc
```

## Estrutura do projeto

```text
src/
├── @types/
│   └── i18next.d.ts  # augmentation do i18next para tipar t() com base nos JSONs de tradução
├── app/              # rotas e layouts do App Router
├── components/
│   └── ui/           # primitivos de UI (shadcn/ui + @base-ui/react + CVA)
├── config/
│   └── env.ts        # validação de variáveis de ambiente (Zod + t3-env)
├── hooks/            # hooks React reutilizáveis (debounce, throttle, pagination, idle...)
├── i18n/
│   ├── config.ts             # configuração do next-i18next (locales, namespaces, resourceLoader)
│   ├── resource-type.ts      # monta o tipo `Resources` a partir dos JSONs para tipar t()
│   └── locales/<lng>/*.json  # arquivos de tradução por locale/namespace
├── styles/
│   └── global.css    # entrada do Tailwind v4 e variáveis de tema
├── utils/            # helpers agnósticos de framework (cn, error-handler, log, wait...)
└── proxy.ts          # proxy do Next.js (substitui middleware.ts) que aplica o i18nConfig
```

Principais pontos de extensão:

- **Alias de import**: use sempre `~/...` (mapeado para `src/*`), nunca caminhos relativos
  entre pastas de topo.
- **Novos componentes de UI**: adicione via CLI do `shadcn` (`components.json` já está
  configurado com o alias `~/components/ui`, base color `zinc` e ícones do `react-icons`),
  em vez de criar a estrutura manualmente.
- **Variáveis de ambiente**: declare em `src/config/env.ts` (client/server/shared) — nunca
  leia `process.env` diretamente no restante do código.
- **Logs de desenvolvimento**: use `devLog`/`devWarn`/`devError` de `src/utils/log.ts` em
  vez de `console.*` (só logam em `NODE_ENV=development`).
- **Tratamento de erros**: `errorHandler`/`errorHandlerAsync`
  (`src/utils/error-handler.ts`) retornam tuplas `[data, error]` em vez de lançar exceção
  — prefira esse padrão em vez de `try/catch` nos pontos que os consomem.

## Estilização e temas

- Não existe `tailwind.config.*` — a configuração do Tailwind v4 vive em
  `src/styles/global.css` e `components.json`.
- O tema é fornecido pelo `@wrksz/themes` (`ThemeProvider` configurado em
  `src/app/layout.tsx`, com suporte a modo claro/escuro/sistema).
- Componentes seguem o padrão `data-slot` + variantes CVA (veja
  `src/components/ui/button.tsx` como referência de variantes/tamanhos).

## Internacionalização (i18n)

O template usa [`i18next`](https://www.i18next.com) +
[`react-i18next`](https://react.i18next.com), integrados ao App Router via
[`next-i18next`](https://github.com/i18next/next-i18next) (a versão nova da lib, com
entrypoints `next-i18next/server`, `next-i18next/client` e `next-i18next/proxy`).

- **Configuração** (`src/i18n/config.ts`): define `supportedLngs`, `fallbackLng` e o
  `resourceLoader` — em desenvolvimento lê os JSONs direto do disco (`fs/promises`), em
  produção usa `import()` dinâmico dos arquivos já buildados.
- **Traduções**: um arquivo por locale/namespace em
  `src/i18n/locales/<locale>/<namespace>.json` (ex.: `src/i18n/locales/pt-BR/home.json`).
- **Tipagem de `t()`**: `src/i18n/resource-type.ts` monta um tipo `Resources` a partir dos
  JSONs importados, e `src/@types/i18next.d.ts` faz a augmentation do módulo `i18next`
  (`CustomTypeOptions.resources`) para autocompletar/validar as chaves de tradução.
- **Proxy** (`src/proxy.ts`): usa `createProxy(i18nConfig)` do `next-i18next/proxy` — é o
  arquivo `proxy.ts` do Next.js (substituto do antigo `middleware.ts`) que resolve o
  idioma da requisição. O `matcher` exclui `api`, assets estáticos e arquivos públicos
  (`favicon.ico`, `sw.js`, etc.).
- **Uso em Server Components**:
  - `src/app/layout.tsx` chama `initServerI18next(i18nConfig)` no escopo do módulo,
    resolve `{ i18n, lng }` via `getT()`, monta os `resources` com `getResources(i18n)` e
    envolve a árvore com `<I18nProvider language={lng} resources={resources}>` (de
    `next-i18next/client`) — o `<html lang={lng}>` agora é dinâmico em vez de fixo em
    `"pt-BR"`.
  - Páginas/componentes de servidor pegam um `t` tipado e namespaced com
    `const { t } = await getT('home')` (veja `src/app/page.tsx`).

Ao adicionar uma nova string de UI, **não hardcode o texto** — adicione a chave no JSON do
namespace correspondente e use `t('chave')`. Ao criar um namespace novo, registre-o em
três lugares: o arquivo JSON em `src/i18n/locales/<locale>/`, o array `ns` em
`src/i18n/config.ts` e o objeto `_resources` em `src/i18n/resource-type.ts` (para manter
`t()` tipado).

## Qualidade e Git hooks

Este projeto usa [Lefthook](https://github.com/evilmartians/lefthook) para automatizar
checagens via hooks de git:

- **pre-commit**: ESLint (`--fix`), Prettier (em `*.{css,json,md,mdx,mjs}`), checagem de
  tipos (`tsc`) e Jest (`--findRelatedTests` nos arquivos staged).
- **commit-msg**: valida a mensagem de commit com Commitlint seguindo
  [Conventional Commits](https://www.conventionalcommits.org/) (ex.: `feat:`, `fix:`,
  `chore:`).
- **pre-push**: roda `pnpm build` e `pnpm lint` completos.

Ou seja, o commit/push será bloqueado se lint, tipos, testes relacionados ou build
falharem — mantenha essas checagens passando localmente em vez de usar `--no-verify`.

## Testes

- Ambiente: Jest + `@happy-dom/jest-environment` (não usa `jsdom`).
- `msw` e `msw-storybook-addon` estão disponíveis para mockar requisições em testes e no
  Storybook.
- Ainda não há arquivos de teste no template — ao criar os primeiros, coloque-os como
  `*.test.ts(x)` ao lado do arquivo de origem (é o padrão que o hook de pre-commit já
  busca via `--findRelatedTests`).

## Storybook

As stories devem seguir o padrão `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` (ou `.mdx`),
conforme `.storybook/main.ts`. Addons habilitados: onboarding, a11y, themes e docs.

## Convenções de código

- Sem ponto e vírgula, aspas simples, vírgula final em tudo, largura de linha 90
  (Prettier).
- Ordem de imports é automática (plugin `@ianvs/prettier-plugin-sort-imports`): React →
  Next → `types` → `~/types` → `~/configs` → `~/i18n` → `~/lib` → `~/utils` → `~/actions`
  → `~/hooks` → `~/components/ui` → `~/components` → `~/assets` → imports relativos.
- Variáveis/argumentos/erros de catch não utilizados devem ser prefixados com `_`
  (permitido pelo ESLint).
- Conteúdo/copy da aplicação está em **pt-BR** — mantenha esse padrão ao adicionar novas
  páginas/textos.
- Textos visíveis na UI devem vir de `t('chave')` (i18next), não de strings hardcoded nos
  componentes — veja a seção [Internacionalização (i18n)](#internacionalização-i18n).

## Assistência com IA (Claude Code)

Este repositório inclui um [`CLAUDE.md`](./CLAUDE.md) com instruções de arquitetura e
comandos voltadas para o [Claude Code](https://claude.com/claude-code). Consulte-o para
mais contexto ao usar ferramentas de IA neste projeto.
