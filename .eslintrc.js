module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", require.resolve("./index")],
  overrides: [
    {
      files: ["test/**.spec.ts"],
      env: {
        jest: true,
      },
    },
  ],
};
