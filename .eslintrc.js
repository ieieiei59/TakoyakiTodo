module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-plusplus': 'off',
    'func-names': 'off',
    'semi': [2, 'never'],
    'no-console': 'off'
  }
}
