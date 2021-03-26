// eslint-disable-next-line no-undef
module.exports = {
    'env': {
      'node': true,
      'es2021': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
      'ecmaVersion': 12,
      'sourceType': 'module'
    },
    'plugins': [
      '@typescript-eslint'
    ],
    'rules': {
      semi: 1,
      indent: [ 'error', 2 ],
      'comma-dangle': [ 'error', {
        arrays: 'never',
        functions: 'never'
      } ],
      quotes: [ 'error', 'single' ],
      'no-trailing-spaces': [ 'error', { ignoreComments: true } ],
      'prefer-const': 'error',
      'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
      'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ]
    }
  };