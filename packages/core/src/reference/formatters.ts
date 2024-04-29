/**
 * @description Discord utilizes a subset of markdown for rendering message content on its clients, while also adding some custom functionality to enable things like mentioning users and channels. This functionality uses the following formats:
 * @see {@link https://discord.com/developers/docs/reference#message-formatting}
 */

import type { Snowflake } from "./api";
import type { ISO8601Timestamp } from "./extra";

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting}
 */
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
	if (subCommandGroup && subCommandName) {
		return `</${commandName} ${subCommandGroup} ${subCommandName}:${commandId}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	} else {
		return `</${commandName}:${commandId}>`;
	}
}

export function formatCustomEmoji(emojiName: string, emojiId: Snowflake): `<:${string}:${Snowflake}>`;
export function formatCustomEmoji(emojiName: string, emojiId: Snowflake, animated: true): `<a:${string}:${Snowflake}>`;
export function formatCustomEmoji(emojiName: string, emojiId: Snowflake, animated?: boolean) {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	} else {
		return `<:${emojiName}:${emojiId}>`;
	}
}

export function formatUnixTimestamp(timestamp: ISO8601Timestamp): `<t:${number}>`;
export function formatUnixTimestamp(timestamp: ISO8601Timestamp, style: TimestampStyles): `<t:${number}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: ISO8601Timestamp, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	} else {
		return `<t:${timestamp}>`;
	}
}

export function formatGuildNavigation(guildId: Snowflake, type: GuildNavigationTypes): `<${Snowflake}:${GuildNavigationTypes}>` {
	return `<${guildId}:${type}>`;
}

export function italics(text: string): `_${string}_` {
	return `_${text}_`;
}

export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

export function strikeThrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

export function codeBlock(text: string): `\`\`\`${string}\`\`\`` {
	return `\`\`\`${text}\`\`\``;
}

export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

export function quote(text: string): `>${string}` {
	return `> ${text}`;
}

export function quoteBlock(text: string): `>>> ${string}`;
export function quoteBlock(text: string, language: string): `>>> ${string}\n${string}`;
export function quoteBlock(text: string, language?: string) {
	if (language) {
		return `>>> ${language}\n${text}`;
	} else {
		return `>>> ${text}`;
	}
}

export function link(url: string, text: string): `[${string}](${string})` {
	return `[${text}](${url})`;
}

export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

export function evenSmallerHeader(text: string): `### ${string}` {
	return `### ${text}`;
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

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	Browse = "browse",
	Customize = "customize",
	Guide = "guide",
}

/**
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	Lottie = "json",
	PNG = "png",
	WebP = "webp",
}
