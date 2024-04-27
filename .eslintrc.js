// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "packages/**", "libs/**"],
	extends: ["@aurajs/eslint-config/node.js"],
	parserOptions: { project: true },
};
