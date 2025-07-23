import type { Linter } from "eslint";

const config: Linter.BaseConfig = {
  env: {
    node: true,
    es2021: true,
  },
};

export default config;
