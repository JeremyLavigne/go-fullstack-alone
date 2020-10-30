module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'no-console': 0,
    },
};
