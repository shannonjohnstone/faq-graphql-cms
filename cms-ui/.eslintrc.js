module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'afterColon': true }],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'max-len': ['error', 80, {
      "ignoreComments": true,
      "ignoreStrings": true
    }],
  }
}
