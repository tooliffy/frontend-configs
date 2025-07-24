const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    [
      "@semantic-release/gitlab",
      {
        gitlabUrl: "https://gitlab.com",
      },
    ],
  ],
};

export default config;
