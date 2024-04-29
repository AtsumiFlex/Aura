// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "config/**", "packages/**"],
	extends: ["@aurajs/eslint-config/node.js"],
	parserOptions: { project: true },
};
