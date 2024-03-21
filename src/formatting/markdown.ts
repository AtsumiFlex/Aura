import type { CodeBlockLanguages } from "../enums";

/**
 * Creates a formatted title with a given message.
 *
 * @param {string} message - The message to include in the title.
 * @returns {string} The formatted title with the given message.
 */
export const titleOne = (message: string): string => `# ${message}`;

/**
 * Creates a formatted title for the given message.
 *
 * @param {string} message - The message to include in the title.
 * @returns {string} The formatted title with the provided message.
 */
export const titleTwo = (message: string): string => `## ${message}`;

/**
 * Creates a title with three hash symbols for a given message.
 *
 * @param {string} message - The message to be included in the title.
 * @returns {string} The title with three hash symbols and the given message.
 */
export const titleThree = (message: string): string => `### ${message}`;

/**
 * Applies italic formatting to the provided message.
 *
 * @param {string} message - The message to be formatted.
 * @return {string} The formatted message with italic styling.
 */
export const italic = (message: string): string => `*${message}*`;

/**
 * Formats the given message to be bold.
 *
 * @param {string} message - The message to be formatted.
 * @returns {string} - The formatted message in bold.
 */
export const bold = (message: string): string => `**${message}**`;

/**
 * Formats a given message by applying strike-through formatting.
 *
 * @param {string} message - The message to be formatted.
 * @returns {string} The formatted message with strike-through formatting applied.
 */
export const strikeThrough = (message: string): string => `~~${message}~~`;
/**
 * @function underlines
 * @description Adds underlines to the given message.
 * @param {string} message - The message to be underlined.
 * @returns {string} - The message with underlines.
 */
export const underlines = (message: string): string => `__${message}__`;

/**
 * Converts a list of messages into a formatted string.
 *
 * @param {...string} message - The messages to be converted.
 * @return {string} - The formatted string.
 */
export const list = (...message: string[]) => message.map((item): string => `- ${item}`).join("\n");

/**
 * Generates a markdown link with the provided `message` and `url`.
 *
 * @param {string} message - The message to be displayed as the link text.
 * @param {string} url - The URL to be linked.
 * @returns {string} The formatted markdown link.
 */
export const link = (message: string, url: string): string => `[${message}](${url})`;

/**
 * Represents a function that returns a formatted quote message.
 *
 * @param {string} message - The message to be formatted as a quote.
 * @returns {string} - The formatted quote message.
 */
export const quote = (message: string): string => `> ${message}`;

/**
 * Returns a formatted block quote with the provided message.
 *
 * @param {string} message - The message to be included in the block quote.
 * @returns {string} - The formatted block quote.
 */
export const blockQuote = (message: string): string => `>>> ${message}`;

/**
 * Convert a string message into inline code format by wrapping it with backticks.
 *
 * @param {string} message - The message string to be converted to inline code.
 * @returns {string} The formatted message enclosed in backticks.
 */
export const inlineCode = (message: string): string => `\`${message}\``;

/**
 * Generates a code block with the provided language and message.
 *
 * @param {CodeBlockLanguages} language - The language of the code block.
 * @param {string} message - The content of the code block.
 * @returns {string} - The generated code block.
 */
export const codeBlock = (language: CodeBlockLanguages, message: string): string => `\`\`\`${language}\n${message}\n\`\`\``;
