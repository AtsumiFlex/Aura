import type { Integer, Snowflake } from "@aurajs/core";
import { DiscordEpoch } from "@aurajs/core";

export const snowflakeToInteger = (snowflake: Snowflake): Integer => {
	const snowflakeBigInt = BigInt(snowflake);
	const integer = (snowflakeBigInt >> BigInt(22)) + BigInt(DiscordEpoch);
	return Number(integer);
};

console.log(snowflakeToInteger("175928847299117063"));
