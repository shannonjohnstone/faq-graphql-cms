module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'afterColon': true }],
    // 'semi': ['error', 'never'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'max-len': ['error', 80, {
      "ignoreComments": true,
      "ignoreStrings": true
    }],
    "node/no-unsupported-features/es-syntax": ["error", {
      "version": ">=10.15",
      "ignores": ["modules",]
    }]
  }
}
