module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: false
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    settings: {
        react: {
            pragma: "React",
            version: "^16.6.3",
        },
    },
    plugins: [
        "react"
    ],
    rules: {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "react/prop-types": 0
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ]
};