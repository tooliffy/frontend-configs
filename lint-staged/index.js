module.exports = {
  "**/*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.{css,scss}": ["stylelint --fix", "prettier --write"],
  "**/*.{json,md}": ["prettier --write"],
};
