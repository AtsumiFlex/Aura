import { DISCORD_EPOCH } from "../globals/api";
import type { IntegerInfer, SnowflakeInfer } from "../globals/formats";

/**
 * Converts a Discord snowflake ID to a Date object.
 *
 * Discord snowflakes are unique identifiers that can be converted to timestamps.
 * This function extracts the timestamp part of the snowflake and converts it to a Date object.
 *
 * @param {SnowflakeInfer} snowflake - The Discord snowflake ID to convert.
 * @returns {Date} The Date object representing the time the snowflake was created.
 * @example
 * const date = SnowflakeToDate("123456789012345678");
 * console.log(date); // Outputs: Date object corresponding to the creation time of the snowflake
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export function SnowflakeToDate(snowflake: SnowflakeInfer): Date {
	const binary = BigInt(snowflake).toString(2).padStart(64, "0");
	const timestamp = Number.parseInt(binary.slice(0, 42), 2) + Number(DISCORD_EPOCH);
	return new Date(timestamp);
}

/**
 * Generates a Discord snowflake ID from a given timestamp.
 *
 * This function creates a snowflake ID by combining the given timestamp with the Discord epoch.
 *
 * @param {IntegerInfer} timestamp - The timestamp to convert to a snowflake ID.
 * @returns {SnowflakeInfer} The generated Discord snowflake ID.
 * @example
 * const snowflake = GetSnowflakeId(1627885442000);
 * console.log(snowflake); // Outputs: A string representing the generated snowflake ID
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export function GetSnowflakeId(timestamp: IntegerInfer): SnowflakeInfer {
	return (BigInt(timestamp) - DISCORD_EPOCH << 22n).toString();
}
