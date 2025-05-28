module.exports = {
  branches: ["master"],
  preset: "conventionalcommits",
  parserOpts: {
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  },
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "feat", release: "minor", section: "Features" },
          { type: "improv", release: "patch", section: "Improvements" },
          { type: "bugfix", release: "patch", section: "Bug Fixes" },
          { type: "hotfix", release: "patch", section: "Hot Fixes" },
          { type: "chore", release: false, section: "Chores" },
        ],
        parserOpts: {
          headerPattern: /^(\w+)(?:\((.+)\))?: (.+)$/,
          headerCorrespondence: ["type", "scope", "subject"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
