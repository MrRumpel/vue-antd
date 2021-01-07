module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: 'warn',
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'spaced-comment': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'typescript/class-name-casing': 'off',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
  },
  plugins: ['prettier', '@typescript-eslint'],
};
