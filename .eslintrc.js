module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'eslint-plugin-import-helpers'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import-helpers/order-imports': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': {
      allows: ['public'],
    },
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/no-find-dom-node': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^app/',
          '/^lib/',
          '/^@shared/',
          '/^$/',
          '/^&/',
          '/^@app/',
          '/^@back/',
          '/^@front/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'ignore', ignoreCase: true },
      },
    ],
  },
};
