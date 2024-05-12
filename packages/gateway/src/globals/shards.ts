import type { SnowflakeInfer } from "@aurajs/core";

/**
 * Get Shard Id
 *
 * This function calculates the shard ID for a given guild ID. The shard ID is determined by
 * taking the modulus of the guild ID and the total number of shards. This is based on the
 * sharding formula provided by Discord's developer documentation.
 *
 * @param {SnowflakeInfer} guildId - The ID of the guild for which the shard ID is to be calculated.
 * @param {SnowflakeInfer} numShards - The total number of shards.
 * @returns {bigint} The shard ID for the given guild ID.
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-sharding-formula}
 */
export function getShardId(guildId: SnowflakeInfer, numShards: SnowflakeInfer): bigint {
	return (BigInt(guildId) >> BigInt(22)) % BigInt(numShards);
}

/**
 * Get Rate Limit Key
 *
 * This function calculates the rate limit key for a given shard ID. The rate limit key is determined by
 * taking the modulus of the shard ID and the maximum concurrency. This is based on the max concurrency
 * formula provided by Discord's developer documentation.
 *
 * @param {SnowflakeInfer} shardId - The ID of the shard for which the rate limit key is to be calculated.
 * @param {SnowflakeInfer} maxConcurrency - The maximum concurrency.
 * @returns {bigint} The rate limit key for the given shard ID.
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-max-concurrency}
 */
export function getRateLimitKey(shardId: SnowflakeInfer, maxConcurrency: SnowflakeInfer): bigint {
	return BigInt(shardId) % BigInt(maxConcurrency);
}
