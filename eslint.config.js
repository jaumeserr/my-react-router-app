import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';

export default [
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**'],
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: parserTS,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            '@typescript-eslint': eslintPluginTS,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'es5',
                    semi: true,
                    printWidth: 100,
                    bracketSpacing: true,
                    arrowParens: 'avoid',
                    endOfLine: 'auto',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'error',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'prefer-const': 'error',
            eqeqeq: ['error', 'always'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
