module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-empty-function":"off",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor":"off",
    "eslint-disable-next-line": "off",
    "semi": ["error", "always"],
		"unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-explicit-any": "warn",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
    "prettier/prettier": [
      'off'
    ]
  }
};
