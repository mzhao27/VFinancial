const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const react = require("eslint-plugin-react");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      eslintPluginPrettierRecommended,
      react,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
