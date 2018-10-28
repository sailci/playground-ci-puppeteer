module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    jquery: true,
    mocha: true,
  },
  rules: {
    'global-require': 'off',
    'no-restricted-syntax': 'off',
    'import/no-dynamic-require': 'off',
    'no-await-in-loop': 'off',
    'no-loop-func': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
  globals: {
    config: true,
  },
  plugins: ['chai-friendly'],
};
