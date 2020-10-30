module.exports = {
    plugins: ['jest'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'no-console': 0,
    },
};
