import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['node_modules/', 'dist/', '.github/', '.vscode/', 'build/', 'scripts/', 'tests/', 'output/'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.json'],

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-fallthrough': 'off',
    },
  },
];
