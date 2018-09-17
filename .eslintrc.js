module.exports = {
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'html'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'no-extend-native': 'off',
    'no-new': 'off',
    "no-alert": 0,
    "no-spaced-func": 2,
    "no-var": 0,
    "no-debugger": 'off',
    "no-useless-constructor": 'off',
    "object-curly-spacing": 1
  },
  globals: {
    Vhall: true,
    VhallInteraction: true,
    VhallInteractionGuest: true
  }

}
