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
    },
    globals: {
      config: true,
    },
  };