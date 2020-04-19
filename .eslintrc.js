module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "@typescript-eslint/explicit-function-return-type": 0,
        "react/prop-types": 0
    }
};
