import { defineFlatConfig } from 'eslint-define-config';

import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default defineFlatConfig([
  { ignores: ['build/'] },
  {
    languageOptions: {
      globals: {
        ...globals.es,
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  eslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        parser: true,
      },
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
]);
