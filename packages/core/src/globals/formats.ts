import { z } from "zod";

/**
 * Zod schema for validating Discord snowflake IDs.
 * A snowflake ID is a string of 17 to 19 digits.
 *
 * @example
 * const snowflake = Snowflake.parse("123456789012345678");
 */
export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value));

/**
 * Inferred type from the {@link Snowflake} validation schema.
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Zod schema for validating integers.
 *
 * @example
 * const integer = Integer.parse(123);
 */
export const Integer = z.number().int().positive();

/**
 * Inferred type from the {@link Integer} validation schema.
 */
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * Zod schema for validating ISO8601 timestamps.
 *
 * @example
 * const timestamp = ISO8601Timestamp.parse("2021-09-17T08:50:00Z");
 */
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?<temp1>\.\d{3})?Z$/.test(value));

/**
 * Inferred type from the {@link ISO8601Timestamp} validation schema.
 */
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

/**
 * Formats a Discord user ID into a mention string.
 *
 * @param userId - The user ID to format.
 * @returns The formatted user mention string.
 * @example
 * const mention = formatUser("123456789012345678");
 * console.log(mention); // Outputs: <@123456789012345678>
 */
export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	return `<@${userId}>`;
}

/**
 * Formats a Discord channel ID into a mention string.
 *
 * @param channelId - The channel ID to format.
 * @returns The formatted channel mention string.
 * @example
 * const mention = formatChannel("123456789012345678");
 * console.log(mention); // Outputs: <#123456789012345678>
 */
export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	return `<#${channelId}>`;
}

/**
 * Formats a Discord role ID into a mention string.
 *
 * @param roleId - The role ID to format.
 * @returns The formatted role mention string.
 * @example
 * const mention = formatRole("123456789012345678");
 * console.log(mention); // Outputs: <@&123456789012345678>
 */
export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${roleId}>`;
}

/**
 * Formats a slash command into a mention string.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @returns The formatted slash command mention string.
 * @example
 * const mention = formatSlashCommand("command", "123456789012345678");
 * console.log(mention); // Outputs: </command:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;

/**
 * Formats a slash command with a subcommand into a mention string.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @param subCommandName - The name of the subcommand.
 * @returns The formatted slash command mention string.
 * @example
 * const mention = formatSlashCommand("command", "123456789012345678", "subcommand");
 * console.log(mention); // Outputs: </command subcommand:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;

/**
 * Formats a slash command with a subcommand group and subcommand into a mention string.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @param subCommandGroupName - The name of the subcommand group.
 * @param subCommandName - The name of the subcommand.
 * @returns The formatted slash command mention string.
 * @example
 * const mention = formatSlashCommand("command", "123456789012345678", "group", "subcommand");
 * console.log(mention); // Outputs: </command group subcommand:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;

export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string): string {
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	} else {
		return `</${commandName}:${commandId}>`;
	}
}

/**
 * Formats a custom emoji into a mention string.
 *
 * @param emojiName - The name of the emoji.
 * @param emojiId - The ID of the emoji.
 * @returns The formatted custom emoji mention string.
 * @example
 * const mention = formatCustomEmoji("emoji", "123456789012345678");
 * console.log(mention); // Outputs: <:emoji:123456789012345678>
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;

/**
 * Formats an animated custom emoji into a mention string.
 *
 * @param emojiName - The name of the emoji.
 * @param emojiId - The ID of the emoji.
 * @param animated - Whether the emoji is animated.
 * @returns The formatted animated custom emoji mention string.
 * @example
 * const mention = formatCustomEmoji("emoji", "123456789012345678", true);
 * console.log(mention); // Outputs: <a:emoji:123456789012345678>
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean): string {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	} else {
		return `<:${emojiName}:${emojiId}>`;
	}
}

/**
 * Enum representing the various timestamp styles for Discord messages.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
 */
export enum TimestampStyles {
	/**
	 * Long date style.
	 *
	 * @example
	 * // Example output: 20 April 2021
	 * const style = TimestampStyles.LongDate;
	 * console.log(style); // Outputs: D
	 */
	LongDate = "D",

	/**
	 * Long date-time style.
	 *
	 * @example
	 * // Example output: Tuesday, 20 April 2021 16:20
	 * const style = TimestampStyles.LongDateTime;
	 * console.log(style); // Outputs: F
	 */
	LongDateTime = "F",

	/**
	 * Long time style.
	 *
	 * @example
	 * // Example output: 16:20:30
	 * const style = TimestampStyles.LongTime;
	 * console.log(style); // Outputs: T
	 */
	LongTime = "T",

	/**
	 * Relative time style.
	 *
	 * @example
	 * // Example output: 2 months ago
	 * const style = TimestampStyles.RelativeTime;
	 * console.log(style); // Outputs: R
	 */
	RelativeTime = "R",

	/**
	 * Short date style.
	 *
	 * @example
	 * // Example output: 20/04/2021
	 * const style = TimestampStyles.ShortDate;
	 * console.log(style); // Outputs: d
	 */
	ShortDate = "d",

	/**
	 * Short date-time style.
	 *
	 * @example
	 * // Example output: 20 April 2021 16:20
	 * const style = TimestampStyles.ShortDateTime;
	 * console.log(style); // Outputs: f
	 */
	ShortDateTime = "f",

	/**
	 * Short time style.
	 *
	 * @example
	 * // Example output: 16:20
	 * const style = TimestampStyles.ShortTime;
	 * console.log(style); // Outputs: t
	 */
	ShortTime = "t",
}

/**
 * Zod schema for validating the TimestampStyles enum.
 *
 * @see {@link TimestampStyles}
 */
export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

/**
 * Formats a UNIX timestamp into a Discord timestamp mention string.
 *
 * @param timestamp - The ISO8601 timestamp to format.
 * @returns The formatted UNIX timestamp mention string.
 * @example
 * const mention = formatUnixTimestamp("2021-09-17T08:50:00Z");
 * console.log(mention); // Outputs: <t:2021-09-17T08:50:00Z:d>
 */
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer): `<t:${ISO8601TimestampInfer}:${TimestampStyles.ShortDate}>`;

/**
 * Formats a UNIX timestamp with a specified style into a Discord timestamp mention string.
 *
 * @param timestamp - The ISO8601 timestamp to format.
 * @param style - The timestamp style to use.
 * @returns The formatted UNIX timestamp mention string.
 * @example
 * const mention = formatUnixTimestamp("2021-09-17T08:50:00Z", TimestampStyles.LongDateTime);
 * console.log(mention); // Outputs: <t:2021-09-17T08:50:00Z:F>
 */
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style: TimestampStyles): `<t:${ISO8601TimestampInfer}:${TimestampStyles}>`;

export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style?: TimestampStyles): string {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	} else {
		return `<t:${timestamp}:${TimestampStyles.ShortDate}>`;
	}
}

/**
 * Enum representing the various guild navigation types for Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	/**
	 * Browse navigation type.
	 */
	Browse = "browse",

	/**
	 * Customize navigation type.
	 */
	Customize = "customize",

	/**
	 * Guide navigation type.
	 */
	Guide = "guide",
}

/**
 * Zod schema for validating the GuildNavigationTypes enum.
 *
 * @see {@link GuildNavigationTypes}
 */
export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

/**
 * Formats a guild navigation action into a mention string.
 *
 * @param guildId - The guild ID to format.
 * @param type - The navigation type to use.
 * @returns The formatted guild navigation mention string.
 * @example
 * const mention = formatGuildNavigation("123456789012345678", GuildNavigationTypes.Browse);
 * console.log(mention); // Outputs: <browse:123456789012345678>
 */
export function formatGuildNavigation(guildId: SnowflakeInfer, type: GuildNavigationTypes): `<${GuildNavigationTypes}:${SnowflakeInfer}>` {
	return `<${type}:${guildId}>`;
}

/**
 * Enum representing the various image formats supported by Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	/**
	 * GIF format.
	 */
	GIF = "gif",

	/**
	 * JPEG format.
	 */
	JPEG = "jpeg",

	/**
	 * JPG format.
	 */
	JPG = "jpg",

	/**
	 * Lottie format.
	 */
	Lottie = "json",

	/**
	 * PNG format.
	 */
	PNG = "png",

	/**
	 * WebP format.
	 */
	WebP = "webp",
}

/**
 * Zod schema for validating the ImageFormats enum.
 *
 * @see {@link ImageFormats}
 */
export const ImageFormatsEnum = z.nativeEnum(ImageFormats);

/**
 * Formats text in italics.
 *
 * @param text - The text to format.
 * @returns The formatted italic text.
 * @example
 * const italicText = italics("Hello");
 * console.log(italicText); // Outputs: _Hello_
 */
export function italics(text: string): `_${string}_` {
	return `_${text}_`;
}

/**
 * Formats text in bold.
 *
 * @param text - The text to format.
 * @returns The formatted bold text.
 * @example
 * const boldText = bold("Hello");
 * console.log(boldText); // Outputs: **Hello**
 */
export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

/**
 * Formats text with an underline.
 *
 * @param text - The text to format.
 * @returns The formatted underlined text.
 * @example
 * const underlinedText = underline("Hello");
 * console.log(underlinedText); // Outputs: __Hello__
 */
export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

/**
 * Formats text with a strikethrough.
 *
 * @param text - The text to format.
 * @returns The formatted strikethrough text.
 * @example
 * const strikethroughText = strikethrough("Hello");
 * console.log(strikethroughText); // Outputs: ~~Hello~~
 */
export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

/**
 * Formats text as inline code.
 *
 * @param text - The text to format.
 * @returns The formatted inline code text.
 * @example
 * const codeText = code("Hello");
 * console.log(codeText); // Outputs: `Hello`
 */
export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

/**
 * Formats text as a code block.
 *
 * @param text - The text to format.
 * @returns The formatted code block text.
 * @example
 * const codeBlockText = codeBlock("Hello");
 * console.log(codeBlockText); // Outputs: ```Hello```
 */
export function codeBlock(text: string): `\`\`\`${string}\`\`\`` {
	return `\`\`\`${text}\`\`\``;
}

/**
 * Formats text as a spoiler.
 *
 * @param text - The text to format.
 * @returns The formatted spoiler text.
 * @example
 * const spoilerText = spoiler("Hello");
 * console.log(spoilerText); // Outputs: ||Hello||
 */
export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

/**
 * Formats text as a block quote.
 *
 * @param text - The text to format.
 * @returns The formatted block quote text.
 * @example
 * const blockQuoteText = blockQuote("Hello");
 * console.log(blockQuoteText); // Outputs: >>> Hello
 */
export function blockQuote(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

/**
 * Formats text as a big header.
 *
 * @param text - The text to format.
 * @returns The formatted big header text.
 * @example
 * const bigHeaderText = bigHeader("Hello");
 * console.log(bigHeaderText); // Outputs: # Hello
 */
export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

/**
 * Formats text as a small header.
 *
 * @param text - The text to format.
 * @returns The formatted small header text.
 * @example
 * const smallHeaderText = smallHeader("Hello");
 * console.log(smallHeaderText); // Outputs: ## Hello
 */
export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

/**
 * Formats text as an underline header.
 *
 * @param text - The text to format.
 * @returns The formatted underline header text.
 * @example
 * const underlineHeaderText = underlineHeader("Hello");
 * console.log(underlineHeaderText); // Outputs: ### Hello
 */
export function underlineHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
