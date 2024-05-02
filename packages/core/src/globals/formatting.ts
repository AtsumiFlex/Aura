/**
 * Message Formatting
 *
 * Discord utilizes a subset of markdown for rendering message content on its clients, while also adding some custom functionality to enable things like mentioning users and channels. This functionality uses the following formats:
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting | https://discord.com/developers/docs/reference#message-formatting-formats}
 */

import { z } from "zod";
import type { SnowflakeInfer } from "./globals";

export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	return `<@${userId}>`;
}

export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	return `<#${channelId}>`;
}

export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${roleId}>`;
}

export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `<${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `<${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `<${string} ${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string) {
	if (subCommandGroupName === undefined) {
		return `<${commandName}:${commandId}>`;
	}

	if (subCommandName === undefined) {
		return `<${commandName} ${subCommandGroupName}:${commandId}>`;
	}

	return `<${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
}

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated = false) {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	}

	return `<:${emojiName}:${emojiId}>`;
}

/**
 * Timestamp Styles
 *
 * Discord supports a variety of timestamp styles that can be used to format timestamps in messages.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
 */
export enum TimestampStyles {
	/**
	 * Long Date
	 */
	LongDate = "D",
	/**
	 * Long Date/Time
	 */
	LongDateTime = "F",
	/**
	 * Long Time
	 */
	LongTime = "T",
	/**
	 * Relative Time
	 */
	RelativeTime = "R",
	/**
	 * Short Date
	 */
	ShortDate = "d",
	/**
	 * Short Date/Time
	 */
	ShortDateTime = "f",
	/**
	 * Short Time
	 */
	ShortTime = "t",
}

export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

export function formatUnixTimestamp(timestamp: SnowflakeInfer): `<t:${SnowflakeInfer}>`;
export function formatUnixTimestamp(timestamp: SnowflakeInfer, style: TimestampStyles): `<t:${SnowflakeInfer}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: SnowflakeInfer, style?: TimestampStyles) {
	if (style === undefined) {
		return `<t:${timestamp}>`;
	}

	return `<t:${timestamp}:${style}>`;
}

/**
 * Guild Navigation Types
 *
 * Discord supports a variety of navigation types that can be used to navigate to different parts of a guild.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export const GuildNavigationTypes = z.enum(["customize", "browse", "guide"]);
export type GuildNavigationTypesInfer = z.infer<typeof GuildNavigationTypes>;

export function formatGuildNavigation(guildId: SnowflakeInfer, navigationType: GuildNavigationTypesInfer): `<${SnowflakeInfer}:${GuildNavigationTypesInfer}>` {
	return `<${guildId}:${navigationType}>`;
}

/**
 * Image Formats
 *
 * Discord supports a variety of image formats that can be used to display images in messages.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	/**
	 * GIF Image
	 */
	GIF = "gif",
	/**
	 * JPEG Image
	 */
	JPEG = "jpeg",
	/**
	 * Lottie Image (JSON)
	 */
	Lottie = "lottie",
	/**
	 * PNG Image
	 */
	PNG = "png",
	/**
	 * WebP Image
	 */
	WebP = "webp",
}

export const ImageFormatsEnum = z.nativeEnum(ImageFormats);

export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

export function italic(text: string): `*${string}*` {
	return `*${text}*`;
}

export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

export function codeBlock(text: string): `\`\`\`${string}\`\`\`` {
	return `\`\`\`${text}\`\`\``;
}

export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

export function link(text: string, url: string): `[${string}](${string})` {
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
