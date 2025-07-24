const config = {
  printWidth: 120,
  tabWidth: 1,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: false,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^next",
    "^@?\\w",
    "^@/features/(.*)$",
    "^@/pages/(.*)$",
    "^@/entities/(.*)$",
    "^@/widgets/(.*)$",
    "^@/shared/(.*)$",
    "^../",
    "^./",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
