module.exports = {
    plugins: ['css', 'prettier'],
    extends: ['eslint:recommended', 'plugin:css/recommended'],
    rules: {
      // Add your custom rules here
      "prettier/prettier": "error"
    },
    env: {
        node: true
      },
    parserOptions: {
        ecmaVersion: 6
      }
  };  