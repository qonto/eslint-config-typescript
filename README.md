# @qonto/eslint-config-typescript

A shared ESLint TypeScript configuration used at Qonto. It has TypeScript specific rules from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

## Installation

`@qonto/eslint-config-typescript` has a few peer dependencies that need to be installed alongside:

- [`eslint`](https://eslint.org/)
- [`typescript`](https://www.typescriptlang.org/)

Install `@qonto/eslint-config-typescript` and its peer dependencies:

```bash
pnpm add -D @qonto/eslint-config-typescript eslint typescript
```

You can use the package manager of your choice.

## Usage

Here is an example of a `.eslintrc.js` file.

```js
module.exports = {
  extends: ["eslint:recommended"],
  overrides: [
    files: ['*.ts'],
    extends: ["@qonto/eslint-config-typescript"],
  ]
};
```
