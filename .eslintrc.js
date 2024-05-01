/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "packages/**"],
	extends: ["@aurajs/eslint-config/node.js"],
	parserOptions: { project: true },
};
