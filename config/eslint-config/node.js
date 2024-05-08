const { resolve } = require("node:path");
const process = require("node:process");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["neon/common", "neon/node", "neon/typescript"],
	parserOptions: { project },
	ignorePatterns: ["**/dist/*"],
	rules: {
		"line-comment-position": "off",
		"no-inline-comments": "off",
		"id-length": "off",
	},
};
