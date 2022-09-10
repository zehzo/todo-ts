module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  ignorePatterns: [
    '*/.js',
    'node_modules/*',
    'build/*',
    'dist/*',
    '*.css',
    '*.svg',
    '*.json',
    '*.ejs',
    '*.js',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': [
      2, 
      { caseSensitive: false },
    ],
    'react/jsx-uses-react': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
};