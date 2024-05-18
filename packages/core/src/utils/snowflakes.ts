import { DISCORD_EPOCH } from "../globals/api";
import type { SnowflakeInfer } from "../globals/formats";
import { Snowflake } from "../globals/formats";

/**
 * Converts a Discord snowflake to a JavaScript Date object.
 *
 * A Discord snowflake is a unique identifier for objects such as messages, users, and channels.
 * This function extracts the timestamp from the snowflake and returns it as a Date object.
 *
 * @param snowflake - The Discord snowflake to convert, which can be in string or numeric format.
 * @returns The Date object representing the time the snowflake was created.
 * @example
 * const date = SnowflakeToDate("123456789012345678");
 * console.log(date); // Outputs the corresponding Date object.
 */
export function SnowflakeToDate(snowflake: SnowflakeInfer): Date {
	const snowflakeParsed = Snowflake.parse(snowflake);
	const snowflakeBigInt = BigInt(snowflakeParsed);
	const timestamp = Number((snowflakeBigInt >> 22n) + DISCORD_EPOCH);
	return new Date(timestamp);
}

/**
 * Converts a JavaScript timestamp to a Discord snowflake.
 *
 * A timestamp is a numeric value representing the number of milliseconds since the Unix epoch (January 1, 1970).
 * This function generates a Discord snowflake that corresponds to the given timestamp.
 *
 * @param timestamp - The timestamp to convert, given as the number of milliseconds since the Unix epoch.
 * @returns The snowflake string representing the given timestamp.
 * @example
 * const snowflake = TimestampToSnowflake(Date.now());
 * console.log(snowflake); // Outputs the generated snowflake.
 */
export function TimestampToSnowflake(timestamp: number): SnowflakeInfer {
	const timestampBigInt = BigInt(timestamp) - DISCORD_EPOCH;
	return (timestampBigInt << 22n).toString();
}
