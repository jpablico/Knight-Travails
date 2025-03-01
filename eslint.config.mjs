import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'], // Files to lint
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // Support both browser and Node.js environments
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Prettier errors are shown by ESLint
    },
  },
  pluginJs.configs.recommended, // Base ESLint rules
  pluginReact.configs.flat.recommended, // React-specific rules
];
