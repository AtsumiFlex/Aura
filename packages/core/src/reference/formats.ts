import type { GuildNavigationTypes, Snowflake } from "../types";

export function formatUser<User extends Snowflake>(user: Snowflake): `<@${User}>`;
export function formatUser(user: Snowflake) {
	return `<@${user}>`;
}

export function formatChannel<Channel extends Snowflake>(channel: Snowflake): `<#${Channel}>`;
export function formatChannel(channel: Snowflake) {
	return `<#${channel}>`;
}

export function formatRole<Role extends Snowflake>(role: Snowflake): `<@&${Role}>`;
export function formatRole(role: Snowflake) {
	return `<@&${role}>`;
}

export function formatSlashCommand<CommandName extends string, CommandId extends Snowflake>(commandName: string, commandId: Snowflake): `</${CommandName}:${CommandId}>`;
export function formatSlashCommand<CommandName extends string, SubCommandName extends string, CommandId extends Snowflake>(commandName: string, subCommandName: string, commandId: Snowflake): `</${CommandName} ${SubCommandName}:${CommandId}>`;
export function formatSlashCommand<CommandName extends string, SubCommandGroupName extends string, SubCommandName extends string, CommandId extends Snowflake>(commandName: string, subCommandGroupName: string, subCommandName: string, commandId: Snowflake): `</${CommandName} ${SubCommandGroupName} ${SubCommandName}:${CommandId}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandGroupName?: string, subCommandName?: string) {
	if (subCommandName && subCommandGroupName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
	}

	if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	}

	return `</${commandName}:${commandId}>`;
}

export function formatCustomEmoji<EmojiName extends string, EmojiId extends Snowflake>(emojiName: string, emojiId: Snowflake): `<:${EmojiName}:${EmojiId}>`;
export function formatCustomEmoji<EmojiName extends string, EmojiId extends Snowflake, IsAnimated extends boolean>(emojiName: string, emojiId: Snowflake, isAnimated: boolean): `<a:${EmojiName}:${EmojiId}>`;
export function formatCustomEmoji(emojiName: string, emojiId: Snowflake, isAnimated?: boolean) {
	if (isAnimated) {
		return `<a:${emojiName}:${emojiId}>`;
	}

	return `<:${emojiName}:${emojiId}>`;
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

export function formatUnixTimestamp<Timestamp extends number>(timestamp: number): `<t:${Timestamp}>`;
export function formatUnixTimestamp<Timestamp extends number, StyleTimestamp extends TimestampStyles>(timestamp: number, style: TimestampStyles): `<t:${Timestamp}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: number, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	}

	return `<t:${timestamp}>`;
}

export function formatGuildNavigation<GuildId extends Snowflake, NavigationType extends GuildNavigationTypes>(guildId: Snowflake, navigationType: GuildNavigationTypes): `<${NavigationType}:${GuildId}>`;
export function formatGuildNavigation(guildId: Snowflake, navigationType: GuildNavigationTypes) {
	return `<${navigationType}:${guildId}>`;
}

export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	JPG = "jpg",
	Lottie = "json",
	PNG = "png",
	WebP = "webp",
}

export function italics<Content extends string>(content: string): `_${Content}_`;
export function italics(content: string) {
	return `_${content}_`;
}

export function bold<Content extends string>(content: string): `**${Content}**`;
export function bold(content: string) {
	return `**${content}**`;
}

export function underline<Content extends string>(content: string): `__${Content}__`;
export function underline(content: string) {
	return `__${content}__`;
}

export function strikethrough<Content extends string>(content: string): `~~${Content}~~`;
export function strikethrough(content: string) {
	return `~~${content}~~`;
}

export function bigHeader<Content extends string>(content: string): `# ${Content}`;
export function bigHeader(content: string) {
	return `# ${content}`;
}

export function smallerHeader<Content extends string>(content: string): `## ${Content}`;
export function smallerHeader(content: string) {
	return `## ${content}`;
}

export function eventSmallerHeader<Content extends string>(content: string): `### ${Content}`;
export function eventSmallerHeader(content: string) {
	return `### ${content}`;
}

export function maskedLink<Content extends string, Url extends string>(content: string, url: string): `[${Content}](${Url})`;
export function maskedLink(content: string, url: string) {
	return `[${content}](${url})`;
}

export function code<Content extends string>(content: string): `\`${Content}\``;
export function code(content: string) {
	return `\`${content}\``;
}

export function codeBlock<Content extends string>(content: string): `\`\`\`${Content}\`\`\``;
export function codeBlock(content: string) {
	return `\`\`\`${content}\`\`\``;
}

export function quote<Content extends string>(content: string): `> ${Content}`;
export function quote(content: string) {
	return `> ${content}`;
}

export function blockQuotes<Content extends string>(content: string): `>>> ${Content}`;
export function blockQuotes(content: string) {
	return `>>> ${content}`;
}

export function spoiler<Content extends string>(content: string): `||${Content}||`;
export function spoiler(content: string) {
	return `||${content}||`;
}

