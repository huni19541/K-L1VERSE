// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "airbnb",
//     "plugin:prettier/recommended",
//   ],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "react-hooks", "prettier"],
//   rules: {
//     "react/react-in-jsx-scope": 0,
//     "react/prefer-stateless-function": 0,
//     "react/jsx-filename-extension": 0,
//     "react/jsx-one-expression-per-line": 0,
//     "react/prop-types": "off",
//     "react/function-component-definition": [
//       2,
//       { namedComponents: ["arrow-function", "function-declaration"] },
//     ],
//     "no-nested-ternary": 0,
//     "prettier/prettier": ["error", { endOfLine: "auto" }],
//     "import/prefer-default-export": "off",
//     "import/no-extraneous-dependencies": [
//       "error",
//       {
//         devDependencies: false,
//         optionalDependencies: false,
//         peerDependencies: false,
//       },
//     ],
//   },
//   settings: {
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//         paths: ["src"],
//       },
//     },
//   },
// };
