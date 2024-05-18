import { z } from "zod";

/**
 * Zod schema for validating Discord Snowflake IDs.
 *
 * A Snowflake is a unique identifier for objects within the Discord platform, represented as a string of 17 to 19 digits.
 */
export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value));

/**
 * Type representing a valid Discord Snowflake.
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Zod schema for validating positive integers.
 *
 * This schema ensures that the number is an integer, positive, and a safe integer.
 */
export const Integer = z.number().int().positive().refine((value) => Number.isSafeInteger(value));

/**
 * Type representing a valid positive integer.
 */
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * Zod schema for validating ISO 8601 timestamps.
 *
 * An ISO 8601 timestamp follows the format `YYYY-MM-DDTHH:mm:ss.sssZ`.
 */
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value));

/**
 * Type representing a valid ISO 8601 timestamp.
 */
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

/**
 * Formats a user ID as a Discord mention.
 *
 * @param userId - The user ID to format.
 * @returns The formatted user mention.
 * @example
 * ```typescript
 * const mention = formatUser("123456789012345678");
 * console.log(mention); // Outputs: <@123456789012345678>
 * ```
 */
export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	const userIdParsed = Snowflake.parse(userId);
	return `<@${userIdParsed}>`;
}

/**
 * Formats a channel ID as a Discord mention.
 *
 * @param channelId - The channel ID to format.
 * @returns The formatted channel mention.
 * @example
 * ```typescript
 * const mention = formatChannel("123456789012345678");
 * console.log(mention); // Outputs: <#123456789012345678>
 * ```
 */
export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	const channelIdParsed = Snowflake.parse(channelId);
	return `<#${channelIdParsed}>`;
}

/**
 * Formats a role ID as a Discord mention.
 *
 * @param roleId - The role ID to format.
 * @returns The formatted role mention.
 * @example
 * ```typescript
 * const mention = formatRole("123456789012345678");
 * console.log(mention); // Outputs: <@&123456789012345678>
 * ```
 */
export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${roleId}>`;
}

/**
 * Formats a slash command.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @returns The formatted slash command.
 * @example
 * ```typescript
 * const command = formatSlashCommand("mycommand", "123456789012345678");
 * console.log(command); // Outputs: </mycommand:123456789012345678>
 * ```
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;

/**
 * Formats a slash command with a subcommand.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @param subCommandName - The name of the subcommand.
 * @returns The formatted slash command with subcommand.
 * @example
 * ```typescript
 * const command = formatSlashCommand("mycommand", "123456789012345678", "subcommand");
 * console.log(command); // Outputs: </mycommand subcommand:123456789012345678>
 * ```
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;

/**
 * Formats a slash command with a subcommand and a subcommand group.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @param subCommandGroupName - The name of the subcommand group.
 * @param subCommandName - The name of the subcommand.
 * @returns The formatted slash command with subcommand group and subcommand.
 * @example
 * ```typescript
 * const command = formatSlashCommand("mycommand", "123456789012345678", "group", "subcommand");
 * console.log(command); // Outputs: </mycommand group subcommand:123456789012345678>
 * ```
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;

/**
 * Formats a slash command with optional subcommand group and subcommand.
 *
 * @param commandName - The name of the command.
 * @param commandId - The ID of the command.
 * @param [subCommandGroupName] - The optional name of the subcommand group.
 * @param [subCommandName] - The optional name of the subcommand.
 * @returns The formatted slash command with optional subcommand group and subcommand.
 * @example
 * ```typescript
 * const command1 = formatSlashCommand("mycommand", "123456789012345678");
 * console.log(command1); // Outputs: </mycommand:123456789012345678>
 *
 * const command2 = formatSlashCommand("mycommand", "123456789012345678", "subcommand");
 * console.log(command2); // Outputs: </mycommand subcommand:123456789012345678>
 *
 * const command3 = formatSlashCommand("mycommand", "123456789012345678", "group", "subcommand");
 * console.log(command3); // Outputs: </mycommand group subcommand:123456789012345678>
 * ```
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string): string {
	const commandIdParsed = Snowflake.parse(commandId);
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandIdParsed}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandIdParsed}>`;
	} else {
		return `</${commandName}:${commandIdParsed}>`;
	}
}

/**
 * Formats a custom emoji.
 *
 * @param emojiName - The name of the emoji.
 * @param emojiNameId - The ID of the emoji.
 * @returns The formatted custom emoji.
 * @example
 * ```typescript
 * const emoji = formatCustomEmoji("smile", "123456789012345678");
 * console.log(emoji); // Outputs: <:smile:123456789012345678>
 * ```
 */
export function formatCustomEmoji(emojiName: string, emojiNameId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;

/**
 * Formats an animated custom emoji.
 *
 * @param emojiName - The name of the emoji.
 * @param emojiNameId - The ID of the emoji.
 * @param animated - Whether the emoji is animated.
 * @returns The formatted animated custom emoji.
 * @example
 * ```typescript
 * const animatedEmoji = formatCustomEmoji("dance", "123456789012345678", true);
 * console.log(animatedEmoji); // Outputs: <a:dance:123456789012345678>
 * ```
 */
export function formatCustomEmoji(emojiName: string, emojiNameId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;

/**
 * Formats a custom emoji, with an option for animation.
 *
 * @param emojiName - The name of the emoji.
 * @param emojiNameId - The ID of the emoji.
 * @param [animated] - Whether the emoji is animated.
 * @returns The formatted custom emoji.
 * @example
 * ```typescript
 * const emoji = formatCustomEmoji("smile", "123456789012345678");
 * console.log(emoji); // Outputs: <:smile:123456789012345678>
 *
 * const animatedEmoji = formatCustomEmoji("dance", "123456789012345678", true);
 * console.log(animatedEmoji); // Outputs: <a:dance:123456789012345678>
 * ```
 */
export function formatCustomEmoji(emojiName: string, emojiNameId: SnowflakeInfer, animated?: boolean): string {
	const emojiNameIdParsed = Snowflake.parse(emojiNameId);
	if (animated) {
		return `<a:${emojiName}:${emojiNameIdParsed}>`;
	} else {
		return `<:${emojiName}:${emojiNameIdParsed}>`;
	}
}

/**
 * Enum representing various timestamp styles for Discord messages.
 *
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
 * Zod schema for validating timestamp styles.
 */
export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

/**
 * Formats a Unix timestamp with a default short date style.
 *
 * @param timestamp - The Unix timestamp to format.
 * @returns The formatted Unix timestamp.
 * @example
 * ```typescript
 * const formattedTimestamp = formatUnixTimestamp(1625567890);
 * console.log(formattedTimestamp); // Outputs: <t:1625567890:d>
 * ```
 */
export function formatUnixTimestamp(timestamp: IntegerInfer): `<t:${IntegerInfer}:${TimestampStyles.ShortDate}>`;

/**
 * Formats a Unix timestamp with a specified style.
 *
 * @param timestamp - The Unix timestamp to format.
 * @param style - The style of the timestamp.
 * @returns The formatted Unix timestamp.
 * @example
 * ```typescript
 * const formattedTimestamp = formatUnixTimestamp(1625567890, TimestampStyles.LongDate);
 * console.log(formattedTimestamp); // Outputs: <t:1625567890:D>
 * ```
 */
export function formatUnixTimestamp(timestamp: IntegerInfer, style: TimestampStyles): `<t:${IntegerInfer}:${TimestampStyles}>`;

/**
 * Formats a Unix timestamp, optionally specifying the style.
 *
 * @param timestamp - The Unix timestamp to format.
 * @param [style] - The optional style of the timestamp.
 * @returns The formatted Unix timestamp.
 * @example
 * ```typescript
 * const formattedTimestamp = formatUnixTimestamp(1625567890);
 * console.log(formattedTimestamp); // Outputs: <t:1625567890:d>
 *
 * const formattedTimestampWithStyle = formatUnixTimestamp(1625567890, TimestampStyles.LongDate);
 * console.log(formattedTimestampWithStyle); // Outputs: <t:1625567890:D>
 * ```
 */
export function formatUnixTimestamp(timestamp: IntegerInfer, style?: TimestampStyles): string {
	const timestampParsed = Integer.parse(timestamp);
	const styleParsed = TimestampStylesEnum.parse(style);

	if (styleParsed) {
		return `<t:${timestampParsed}:${styleParsed}>`;
	} else {
		return `<t:${timestampParsed}:${TimestampStyles.ShortDate}>`;
	}
}

/**
 * Enum representing various guild navigation types for Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	/**
	 * Browse Channels tab
	 */
	Browse = "browse",
	/**
	 * Customize tab with the server's onboarding prompts
	 */
	Customize = "customize",
	/**
	 * Server Guide
	 */
	Guide = "guide",
}

/**
 * Zod schema for validating guild navigation types.
 */
export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

/**
 * Formats a guild navigation type.
 *
 * @param guildId - The guild ID to format.
 * @param type - The type of guild navigation.
 * @returns The formatted guild navigation.
 * @example
 * ```typescript
 * const navigation = formatGuildNavigation("123456789012345678", GuildNavigationTypes.Browse);
 * console.log(navigation); // Outputs: <123456789012345678:browse>
 * ```
 */
export function formatGuildNavigation(guildId: SnowflakeInfer, type: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
	const guildIdParsed = Snowflake.parse(guildId);
	const typeParsed = GuildNavigationTypesEnum.parse(type);
	return `<${guildIdParsed}:${typeParsed}>`;
}

/**
 * Formats text in italics.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const italicText = italics("Hello");
 * console.log(italicText); // Outputs: _Hello_
 * ```
 */
export function italics(text: string): `_${string}_` {
	return `_${text}_`;
}

/**
 * Formats text in bold.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const boldText = bold("Hello");
 * console.log(boldText); // Outputs: **Hello**
 * ```
 */
export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

/**
 * Formats text with underline.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const underlinedText = underline("Hello");
 * console.log(underlinedText); // Outputs: __Hello__
 * ```
 */
export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

/**
 * Formats text with strikethrough.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const strikethroughText = strikethrough("Hello");
 * console.log(strikethroughText); // Outputs: ~~Hello~~
 * ```
 */
export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

/**
 * Formats text as inline code.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const codeText = code("Hello");
 * console.log(codeText); // Outputs: `Hello`
 * ```
 */
export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

/**
 * Formats text as a code block.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const codeBlockText = codeBlock("Hello");
 * console.log(codeBlockText); // Outputs: ```Hello```
 * ```
 */
export function codeBlock(text: string): `\`\`\`${string}\`\`\`` {
	return `\`\`\`${text}\`\`\``;
}

/**
 * Formats text as a spoiler.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const spoilerText = spoiler("Hello");
 * console.log(spoilerText); // Outputs: ||Hello||
 * ```
 */
export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

/**
 * Formats text as a block quote.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const quoteText = quote("Hello");
 * console.log(quoteText); // Outputs: > Hello
 * ```
 */
export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

/**
 * Formats text as a multi-line block quote.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const quoteBlockText = quoteBlock("Hello");
 * console.log(quoteBlockText); // Outputs: >>> Hello
 * ```
 */
export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

/**
 * Formats text as a big header.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const bigHeaderText = bigHeader("Hello");
 * console.log(bigHeaderText); // Outputs: # Hello
 * ```
 */
export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

/**
 * Formats text as a small header.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const smallHeaderText = smallHeader("Hello");
 * console.log(smallHeaderText); // Outputs: ## Hello
 * ```
 */
export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

/**
 * Formats text as an underlined header.
 *
 * @param text - The text to format.
 * @returns The formatted text.
 * @example
 * ```typescript
 * const underlineHeaderText = underlineHeader("Hello");
 * console.log(underlineHeaderText); // Outputs: ### Hello
 * ```
 */
export function underlineHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
