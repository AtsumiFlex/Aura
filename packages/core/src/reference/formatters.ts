import type { ISO8601Infer, SnowflakeInfer } from "@aurajs/types";

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
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroup: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroup?: string, subCommandName?: string) {
	if (subCommandGroup && subCommandName) {
		return `</${commandName} ${subCommandGroup} ${subCommandName}:${commandId}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	} else {
		return `</${commandName}:${commandId}>`;
	}
}

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: true): `<a:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean) {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	} else {
		return `<:${emojiName}:${emojiId}>`;
	}
}

export function formatUnixTimestamp(timestamp: ISO8601Infer): `<t:${number}>`;
export function formatUnixTimestamp(timestamp: ISO8601Infer, style: TimestampStyles): `<t:${number}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: ISO8601Infer, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	} else {
		return `<t:${timestamp}>`;
	}
}

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

export enum TimestampStyles {
	LongDate = "D",
	LongDateTime = "F",
	LongTime = "T",
	RelativeTime = "R",
	ShortDate = "d",
	ShortDateTime = "f",
	ShortTime = "t",
}

export enum GuildNavigationTypes {
	Browse = "browse",
	Customize = "customize",
	Guide = "guide",
}

export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	Lottie = "json",
	PNG = "png",
	WebP = "webp",
}
