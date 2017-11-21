module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  rules: {
    'arrow-parens': 0,
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none', printWidth: 120 }]
  }
};
