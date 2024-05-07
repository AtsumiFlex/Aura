import { z } from "zod";
import { zodErrorMessage } from "../libs/errors";

/**
 * Snowflake
 *
 * Snowflake is a unique identifier for a Discord object.
 *
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export const Snowflake = z.string().refine((value) => /^\d{16,19}$/.test(value), { message: "Value must be a valid Snowflake." });

/**
 * Snowflake Infer
 *
 * Is used to infer the type of the {@link Snowflake} object.
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Integer
 *
 * Integer is a number that is not a fraction.
 *
 * @see {@link https://discord.com/developers/docs/reference#integer}
 */
export const Integer = z.number().int();

/**
 * Integer Infer
 *
 * Is used to infer the type of the {@link Integer} object.
 */
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * ISO8601 Timestamp
 *
 * ISO8601 Timestamp is a string that represents a date and time in the ISO 8601 format.
 *
 * @see {@link https://discord.com/developers/docs/reference#timestamp}
 */
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value), { message: "Value must be a valid ISO8601 Timestamp." });

/**
 * ISO8601 Timestamp Infer
 *
 * Is used to infer the type of the {@link ISO8601Timestamp} object.
 */
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

/**
 * Message Formatting
 *
 * Discord utilizes a subset of markdown for rendering message content on its clients, while also adding some custom functionality to enable things like mentioning users and channels. This functionality uses the following formats.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting | https://discord.com/developers/docs/reference#message-formatting-formats}
 */
export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	try {
		Snowflake.parse(userId);
		return `<@${userId}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
}

export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	try {
		Snowflake.parse(channelId);
		return `<#${channelId}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
}

export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	try {
		Snowflake.parse(roleId);
		return `<@&${roleId}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
}

export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName?: string, subCommandGroupName?: string): string {
	try {
		Snowflake.parse(commandId);
		if (subCommandName && subCommandGroupName) {
			return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
		} else if (subCommandName) {
			return `</${commandName} ${subCommandName}:${commandId}>`;
		}

		return `</${commandName}:${commandId}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
}

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated = false): string {
	try {
		Snowflake.parse(emojiId);
		if (animated) {
			return `<a:${emojiName}:${emojiId}>`;
		} else {
			return `<:${emojiName}:${emojiId}>`;
		}
	} catch (error) {
		throw new Error(zodErrorMessage(error));
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

export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer): `<:${ISO8601TimestampInfer}>`;
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style: TimestampStyles): `<t:${ISO8601TimestampInfer}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: ISO8601TimestampInfer, style?: TimestampStyles): string {
	try {
		ISO8601Timestamp.parse(timestamp);
		TimestampStylesEnum.parse(style);
		if (style) {
			return `<t:${timestamp}:${style}>`;
		}

		return `<t:${timestamp}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
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

export function formatGuildNavigation(guildId: SnowflakeInfer, navigationType: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
	try {
		Snowflake.parse(guildId);
		GuildNavigationTypesEnum.parse(navigationType);
		return `<${guildId}:${navigationType}>`;
	} catch (error) {
		throw new Error(zodErrorMessage(error));
	}
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
