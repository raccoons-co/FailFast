module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "eol-last": ["warn", "always"],
    "quotes": ["warn", "double"],
      "max-len": ["warn", 120 ],
      "max-lines": ["warn", 92 ]
  },
  reportUnusedDisableDirectives: true,
  noInlineConfig: false
};
