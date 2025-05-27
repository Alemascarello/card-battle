module.exports = {
  bumpMinorPreMajor: true, // permite gerar 'minor' mesmo em 0.x.x
  types: [
    { type: "feat", section: "Features", release: "minor" },
    { type: "improv", section: "Improvements", release: "patch" },
    { type: "bugfix", section: "Bug Fixes", release: "patch" },
    { type: "hotfix", section: "Hot Fixes", release: "patch" },
    { type: "chore", section: "Chores", release: false },
  ],
  parserOpts: {
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  },
};
