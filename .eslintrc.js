module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style':"off",
    'react/jsx-filename-extension':'off',
    "import/prefer-default-export":"off",
    "jsx-a11y/label-has-associated-control":"off",
    "react/prop-types":"off",
    "no-console":["error", { allow: ["tron"] }],
    "react/jsx-props-no-spreading":"off"
  },
};
