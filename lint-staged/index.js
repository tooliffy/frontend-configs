module.exports = {
  "**/*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write", "git add"],
  "**/*.{css,scss}": ["stylelint --fix", "prettier --write", "git add"],
  "**/*.{json,md}": ["prettier --write", "git add"],
};
