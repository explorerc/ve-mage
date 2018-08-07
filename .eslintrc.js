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
    'no-extend-native':'off'
  }

}
