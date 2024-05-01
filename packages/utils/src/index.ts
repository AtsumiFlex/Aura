import { DiscordEpoch } from "@aurajs/core";
import type { IntegerInfer, SnowflakeInfer } from "@aurajs/types";
import { z } from "zod";

export const SnowflakeIdFormatStructure = z.object({
	timestamp: z.number()
		.transform((snowflake) => (snowflake >> 22) + 1_420_070_400_000)
		.describe("Milliseconds since Discord Epoch, the first second of 2015 or 1420070400000."),
	internalWorkerId: z.number()
		.transform((snowflake) => (snowflake & 0x3E0000) >> 17)
		.describe("Internal worker ID."),
	internalProcessId: z.number()
		.transform((snowflake) => (snowflake & 0x1F000) >> 12)
		.describe("Internal process ID."),
	increment: z.number()
		.transform((snowflake) => snowflake & 0xFFF)
		.describe("Incremental number for every ID generated on that process."),
});
export type SnowflakeIdFormatType = z.infer<typeof SnowflakeIdFormatStructure>;

export const SnowflakeToDate = (snowflake: SnowflakeInfer): Date => {
	const snowflakeBigInt = BigInt(snowflake);
	const timestamp = Number((snowflakeBigInt >> 22n) + BigInt(DiscordEpoch));
	return new Date(timestamp);
};

export const FormatImageData = (imageData: string, contentType: "image/gif" | "image/jpeg" | "image/png"): string => `data:${contentType};base64,${imageData}`;

export const GetShardId = (guildId: SnowflakeInfer, numShards: number): IntegerInfer => {
	const guildIdBigInt = BigInt(guildId);
	return Number((guildIdBigInt >> 22n) % BigInt(numShards));
};

export const GetRateLimitKey = (shardId: IntegerInfer, maxConcurrency: number): IntegerInfer => shardId % maxConcurrency;
