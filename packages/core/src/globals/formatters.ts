import { z } from "zod";

/**
 * Snowflake
 *
 * A snowflake is a unique identifier used to identify resources in Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value), { message: "Value must be a 17-19 digit number" });

/**
 * Snowflake Infer
 *
 * Is used to infer the type of the {@link Snowflake} object.
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Integer
 *
 * An integer is a whole number that can be positive, negative, or zero.
 *
 * @see {@link https://en.wikipedia.org/wiki/Integer}
 */
export const Integer = z.number().int().positive();

/**
 * Integer Infer
 *
 * Is used to infer the type of the {@link Integer} object.
 */
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * ISO8601 Timestamp
 *
 * A string representing a timestamp in ISO8601 format.
 *
 * @see {@link https://en.wikipedia.org/wiki/ISO_8601}
 */
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?<temp1>\.\d{3})?Z$/.test(value), { message: "Value must be a string representing a timestamp in ISO8601 format" });

/**
 * ISO8601 Timestamp Infer
 *
 * Is used to infer the type of the {@link ISO8601Timestamp} object.
 */
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

/**
 * Formats a user ID into a mentionable string.
 *
 * @param {SnowflakeInfer} userId - The ID of the user to be formatted.
 * @returns {string} The formatted user ID.
 */
export function formatUser(userId: SnowflakeInfer): `<@${string}>` {
	return `<@${userId}>`;
}

/**
 * Formats a channel ID into a mentionable string.
 *
 * @param {SnowflakeInfer} channelId - The ID of the channel to be formatted.
 * @returns {string} The formatted channel ID.
 */
export function formatChannel(channelId: SnowflakeInfer): `<#${string}>` {
	return `<#${channelId}>`;
}

/**
 * Formats a role ID into a mentionable string.
 *
 * @param {SnowflakeInfer} roleId - The ID of the role to be formatted.
 * @returns {string} The formatted role ID.
 */
export function formatRole(roleId: SnowflakeInfer): `<@&${string}>` {
	return `<@&${roleId}>`;
}

/**
 * Formats a slash command into a mentionable string.
 *
 * @param {string} commandName - The name of the command.
 * @param {SnowflakeInfer} commandId - The ID of the command.
 * @returns {string} The formatted slash command.
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${string}>`;

/**
 * Formats a slash command with a sub-command into a mentionable string.
 *
 * @param {string} commandName - The name of the command.
 * @param {SnowflakeInfer} commandId - The ID of the command.
 * @param {string} subCommandName - The name of the sub-command.
 * @returns {string} The formatted slash command with a sub-command.
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${string}>`;

/**
 * Formats a slash command with a sub-command group and a sub-command into a mentionable string.
 *
 * @param {string} commandName - The name of the command.
 * @param {SnowflakeInfer} commandId - The ID of the command.
 * @param {string} subCommandGroupName - The name of the sub-command group.
 * @param {string} subCommandName - The name of the sub-command.
 * @returns {string} The formatted slash command with a sub-command group and a sub-command.
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${string}>`;

/**
 * Formats a slash command with an optional sub-command group and sub-command into a mentionable string.
 *
 * @param {string} commandName - The name of the command.
 * @param {SnowflakeInfer} commandId - The ID of the command.
 * @param {string} [subCommandGroupName] - The name of the sub-command group.
 * @param {string} [subCommandName] - The name of the sub-command.
 * @returns {string} The formatted slash command with an optional sub-command group and sub-command.
 */
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
 * Formats a custom emoji into a mentionable string.
 *
 * @param {string} emojiName - The name of the emoji.
 * @param {SnowflakeInfer} emojiId - The ID of the emoji.
 * @returns {string} The formatted custom emoji.
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${string}>`;

/**
 * Formats an animated custom emoji into a mentionable string.
 *
 * @param {string} emojiName - The name of the emoji.
 * @param {SnowflakeInfer} emojiId - The ID of the emoji.
 * @param {boolean} animated - Whether the emoji is animated.
 * @returns {string} The formatted animated custom emoji.
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${string}>`;

/**
 * Formats a custom emoji into a mentionable string, with an optional animation flag.
 *
 * @param {string} emojiName - The name of the emoji.
 * @param {SnowflakeInfer} emojiId - The ID of the emoji.
 * @param {boolean} [animated] - Whether the emoji is animated.
 * @returns {string} The formatted custom emoji, animated if specified.
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean): string {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	} else {
		return `<:${emojiName}:${emojiId}>`;
	}
}

/**
 * Timestamp Styles
 *
 * Timestamp styles are used to format a Unix timestamp into a human-readable string.
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

/**
 * Timestamp Styles Enum
 *
 * Is a zod enum that represents the available {@link TimestampStyles}.
 */
export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

/**
 * Formats a Unix timestamp into a mentionable string.
 *
 * @param {ISO8601TimestampInfer} timestamp - The Unix timestamp to be formatted.
 * @returns {string} The formatted Unix timestamp.
 */
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer): `<t:${ISO8601TimestampInfer}>`;

/**
 * Formats a Unix timestamp into a mentionable string with a specific style.
 *
 * @param {ISO8601TimestampInfer} timestamp - The Unix timestamp to be formatted.
 * @param {TimestampStyles} style - The style to format the timestamp.
 * @returns {string} The formatted Unix timestamp with a specific style.
 */
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style: TimestampStyles): `<t:${ISO8601TimestampInfer}:${TimestampStyles}>`;

/**
 * Formats a Unix timestamp into a mentionable string with an optional style.
 *
 * @param {ISO8601TimestampInfer} timestamp - The Unix timestamp to be formatted.
 * @param {TimestampStyles} [style] - The optional style to format the timestamp.
 * @returns {string} The formatted Unix timestamp with an optional style.
 */
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style?: TimestampStyles): string {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	}

	return `<t:${timestamp}>`;
}

/**
 * Guild Navigation Types
 *
 * Guild navigation types are used to navigate to different parts of a guild.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	/**
	 * Browse Channels Tab
	 */
	Browse = "browse",
	/**
	 * Customize Tab
	 */
	Customize = "customize",
	/**
	 * Server Guide
	 */
	Guide = "guide",
}

/**
 * Guild Navigation Types Enum
 *
 * Is a zod enum that represents the available {@link GuildNavigationTypes}.
 */
export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

/**
 * Formats a guild ID and a navigation type into a mentionable string.
 *
 * @param {SnowflakeInfer} guildId - The ID of the guild to be formatted.
 * @param {GuildNavigationTypes} navigationType - The type of navigation to be formatted.
 * @returns {string} The formatted guild navigation.
 */
export function formatGuildNavigation(guildId: SnowflakeInfer, navigationType: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
	return `<${guildId}:${navigationType}>`;
}

/**
 * Image Formats
 *
 * Image formats are used to display images in a message.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-image-formats}
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
	 * JPG Image
	 */
	JPG = "jpg",
	/**
	 * Lottie = JSON
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

/**
 * Image Formats Enum
 *
 * Is a zod enum that represents the available {@link ImageFormats}.
 */
export const ImageFormatsEnum = z.nativeEnum(ImageFormats);

