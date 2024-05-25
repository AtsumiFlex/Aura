import { z } from "zod";

export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value));
export type SnowflakeInfer = z.infer<typeof Snowflake>;
export const Integer = z.number().positive().int();
export type IntegerInfer = z.infer<typeof Integer>;
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?<temp1>\.\d{3})?Z$/.test(value));
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	return `<@${userId}>`;
}

export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	return `<#${channelId}>`;
}

export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${roleId}>`;
}

export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string): `</${string} ${string} ${string}:${SnowflakeInfer}>` | `</${string} ${string}:${SnowflakeInfer}>` | `</${string}:${SnowflakeInfer}>` {
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	} else {
		return `</${commandName}:${commandId}>`;
	}
}

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean): `<:${string}:${SnowflakeInfer}>` | `<a:${string}:${SnowflakeInfer}>` {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	} else {
		return `<:${emojiName}:${emojiId}>`;
	}
}

/**
 * @see {https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
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

export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

export function formatUnixTimestamp(timestamp: IntegerInfer): `<t:${string}:${TimestampStyles.ShortDateTime}>`;
export function formatUnixTimestamp(timestamp: IntegerInfer, style: TimestampStyles): `<t:${string}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: IntegerInfer, style?: TimestampStyles): `<t:${string}:${TimestampStyles.ShortDateTime}>` | `<t:${string}:${TimestampStyles}>` {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	} else {
		return `<t:${timestamp}:${TimestampStyles.ShortDateTime}>`;
	}
}

/**
 * @see {https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	Browse = "browse",
	Customize = "customize",
	Guide = "guide",
}

export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

export function formatGuildNavigation(guildId: SnowflakeInfer, type: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
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

export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

export function codeBlock(text: string): `\`\`\`\n${string}\n\`\`\`` {
	return `\`\`\`\n${text}\n\`\`\``;
}

export function codeBlockWithLanguage(text: string, language: string): `\`\`\`${string}\n${string}\n\`\`\`` {
	return `\`\`\`${language}\n${text}\n\`\`\``;
}

export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

export function hyperlink(text: string, url: string): `[${string}](${string})` {
	return `[${text}](${url})`;
}

export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

export function evenSmallHeader(text: string): `### ${string}` {
	return `### ${text}`;
}

/**
 * @see {https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	Lottie = "json",
	PNG = "png",
	WebP = "webp",
}

export const ImageFormatsEnum = z.nativeEnum(ImageFormats);
