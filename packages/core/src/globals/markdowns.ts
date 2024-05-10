/**
 * Wraps a given text with asterisks to make it italic in markdown.
 *
 * @param {string} text - The text to be italicized.
 * @returns {string} The italicized text.
 */
export function italics(text: string): `*${string}*` {
	return `*${text}*`;
}

/**
 * Wraps a given text with double asterisks to make it bold in markdown.
 *
 * @param {string} text - The text to be bolded.
 * @returns {string} The bolded text.
 */
export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

/**
 * Wraps a given text with backticks to make it appear as code in markdown.
 *
 * @param {string} text - The text to be formatted as code.
 * @returns {string} The text formatted as code.
 */
export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

/**
 * Wraps a given text with triple backticks to make it appear as a code block in markdown.
 *
 * @param {string} language - The language of the code.
 * @param {string} text - The text to be formatted as a code block.
 * @returns {string} The text formatted as a code block.
 */
export function codeBlock(language: string, text: string): `\`\`\`${string}\n${string}\n\`\`\`` {
	return `\`\`\`${language}\n${text}\n\`\`\``;
}

/**
 * Prefixes a given text with a greater-than symbol to make it appear as a quote in markdown.
 *
 * @param {string} text - The text to be quoted.
 * @returns {string} The quoted text.
 */
export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

/**
 * Prefixes a given text with triple greater-than symbols to make it appear as a block quote in markdown.
 *
 * @param {string} text - The text to be block quoted.
 * @returns {string} The block quoted text.
 */
export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

/**
 * Wraps a given text with double tildes to make it appear as strikethrough in markdown.
 *
 * @param {string} text - The text to be strikethrough.
 * @returns {string} The strikethrough text.
 */
export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

/**
 * Wraps a given text with double underscores to make it appear as underline in markdown.
 *
 * @param {string} text - The text to be underlined.
 * @returns {string} The underlined text.
 */
export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

/**
 * Creates a hyperlink in markdown.
 *
 * @param {string} text - The text to be displayed as the hyperlink.
 * @param {string} url - The URL to be linked.
 * @returns {string} The hyperlink.
 */
export function hyperlink(text: string, url: string): `[${string}](${string})` {
	return `[${text}](${url})`;
}

/**
 * Wraps a given text with double vertical bars to make it appear as a spoiler in markdown.
 *
 * @param {string} text - The text to be hidden as a spoiler.
 * @returns {string} The spoiler text.
 */
export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

/**
 * Prefixes a given text with a hash symbol to make it appear as a big header in markdown.
 *
 * @param {string} text - The text to be displayed as a big header.
 * @returns {string} The big header.
 */
export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

/**
 * Prefixes a given text with two hash symbols to make it appear as a medium header in markdown.
 *
 * @param {string} text - The text to be displayed as a medium header.
 * @returns {string} The medium header.
 */
export function mediumHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

/**
 * Prefixes a given text with three hash symbols to make it appear as a small header in markdown.
 *
 * @param {string} text - The text to be displayed as a small header.
 * @returns {string} The small header.
 */
export function smallHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
