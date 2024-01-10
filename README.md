# ✨ Template start for NextJS 14 with Typescript ✨

Embedded technology list:

- Typescript
- Jest
- Eslint
- Testing Library
- Prettier
- Husky
- Lint-Staged
- TailwindCSS
- Next-PWA

All of these existing settings in the template are customizable. Feel free to modify and
adapt them to your taste and project.

## Installing 👨‍💻

To run the template, open the terminal in the repository you want and run in your terminal

```bash
# Yarn
yarn create next-app <name-of-your-project> -e https://github.com/AugustoTI/template-next-ts

# NPM
npx create-next-app <name-of-your-project> -e https://github.com/AugustoTI/template-next-ts

# PNPM
pnpm create next-app <name-of-your-project> -e https://github.com/AugustoTI/template-next-ts
```

<aside>
💡 don't forget to rename the project in package.json 👀
</aside>
<br />

## Generating and testing static serverless builds on NextJS 14

On version 14 of NextJS, a new way of exporting your project to static or
[SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) and serverless was introduced
(replacing the old command `next export`).

Go to your `next.config.js` file and add the new option.:

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  output: 'export', // "export" | "standalone" | undefined
  // ...
}

module.exports = nextConfig
```

<footer>
💡 Important: This type of build contains some important restrictions that you should be aware of.
<a target='_blank' href='https://nextjs.org/docs/app/building-your-application/deploying/static-exports'>See in the documentation</a>
</footer>
<br />

Finally, to test your production bundle, run the command:

```bash
# Yarn
yarn build
yarn start:static

# NPM
npm run build
npm run start:static

# PNPM
pnpm build
pnpm start:static
```
