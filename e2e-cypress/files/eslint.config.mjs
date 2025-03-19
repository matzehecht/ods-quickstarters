import boehringer from '@boehringer-ingelheim/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default boehringer.config(
  boehringer.includeIgnoreFile(),
  boehringer.configs.strict,
  {
    ignores: ['build/**/*'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.*js', '.*.*js', 'reporters/*.*js'],
          defaultProject: 'tsconfig.eslint.json',
        },
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-expressions': 'off', // This rule is not compatible with Chai assertions like expect(foo).to.be.true
      'sonarjs/no-duplicate-string': 'off',
    },
  },
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  prettier,
  boehringer.configs.prettierDisable,
);
