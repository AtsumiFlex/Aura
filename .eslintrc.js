// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "packages/**"],
	extends: ["@aurajs/eslint-config/node.js"],
	parserOptions: { project: true },
};
