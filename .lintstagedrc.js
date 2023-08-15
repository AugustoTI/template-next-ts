const path = require('path')

const buildEslintCommand = (filenames) =>
  `pnpm lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, 'pnpm test -- --findRelatedTests'],
}
