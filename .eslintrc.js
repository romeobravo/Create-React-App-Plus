module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'rules': {
    'semi': ['error', 'never'],

    'react/jsx-filename-extension': 'off'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src'
        ]
      }
    }
  }
};
