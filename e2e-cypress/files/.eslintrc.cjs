/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    '@boehringer-ingelheim/eslint-config/base/strict',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: 'tests/**/*.cy.ts',
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['prettier'],
  root: true,
  rules: {
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    'sonarjs/no-duplicate-string': 'off',
  },
};
