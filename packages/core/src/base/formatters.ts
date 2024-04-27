/**
 * @fileoverview Formatters for Discord's API.
 * @see {@link https://discord.com/developers/docs/reference#message-formatting}
 */
import type { Snowflake } from "@aurajs/types";

export function formatUser(userId: Snowflake): `<@${Snowflake}>` {
	return `<@${userId}>`;
}

export function formatChannel(channelId: Snowflake): `<#${Snowflake}>` {
	return `<#${channelId}>`;
}

export function formatRole(roleId: Snowflake): `<@&${Snowflake}>` {
	return `<@&${roleId}>`;
}

export function formatSlashCommand(commandName: string, commandId: Snowflake): `</${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandName: string): `</${string} ${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandGroup: string, subCommandName: string): `</${string} ${string} ${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandGroup?: string, subCommandName?: string) {
	if (subCommandGroup) {
		return `</${commandName} ${subCommandGroup} ${subCommandName}:${commandId}>`;
	}

	if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	}

	return `</${commandName}:${commandId}>`;
}

export function formatEmoji(emojiName: string, emojiId: Snowflake): `<:${string}:${Snowflake}>`;
export function formatEmoji(emojiName: string, emojiId: Snowflake, isAnimated: boolean): `<a:${string}:${Snowflake}>`;
export function formatEmoji(emojiName: string, emojiId: Snowflake, isAnimated?: boolean) {
	if (isAnimated) {
		return `<a:${emojiName}:${emojiId}>`;
	}

	return `<:${emojiName}:${emojiId}>`;
}

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
 */
export enum TimestampStyles {
	LongDate = "D",
	LongDateTime = "F",
	LongTime = "T",
	RelativeTime = "R",
	ShortDate = "d",
	ShortDateTime = "f",
	ShortTime = "t",
}

export function formatUnixTimestamp(timestamp: number): `<t:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: number, style: TimestampStyles): `<t:${number}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: number, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	}

	return `<t:${timestamp}>`;
}

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export type GuildNavigationType = "browse" | "customize" | "guide";

export function formatGuildNavigationType(guildId: string, type: GuildNavigationType): `<${string}:${GuildNavigationType}>` {
	return `<${guildId}:${type}>`;
}

/**
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	PNG = "png",
	WEBP = "webp",
}

export function italic(message: string): `_${string}_` {
	return `_${message}_`;
}

export function bold(message: string): `**${string}**` {
	return `**${message}**`;
}

export function underline(message: string): `__${string}__` {
	return `__${message}__`;
}

export function strikeThrough(message: string): `~~${string}~~` {
	return `~~${message}~~`;
}

export function code(message: string): `\`${string}\`` {
	return `\`${message}\``;
}

export function codeBlock(message: string): `\`\`\`${string}\`\`\``;
export function codeBlock(message: string, language: string): `\`\`\`${string}\n${string}\`\`\``;
export function codeBlock(message: string, language?: string) {
	if (language) {
		return `\`\`\`${language}\n${message}\`\`\``;
	}

	return `\`\`\`${message}\`\`\``;
}

export function spoiler(message: string): `||${string}||` {
	return `||${message}||`;
}

export function quote(message: string): `>${string}` {
	return `>${message}`;
}

export function blockQuote(message: string): `>>>${string}` {
	return `>>>${message}`;
}

export function link(message: string, url: string): `[${string}](${string})` {
	return `[${message}](${url})`;
}

export function bigHeader(message: string): `# ${string}` {
	return `# ${message}`;
}

export function smallHeader(message: string): `## ${string}` {
	return `## ${message}`;
}

export function underlineHeader(message: string): `### ${string}` {
	return `### ${message}`;
}
