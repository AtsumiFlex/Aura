import { Integer } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Gateway
 *
 * Returns an object with a valid WSS URL which the app can use when Connecting to the Gateway. Apps should cache this value and only call this endpoint to retrieve a new URL when they are unable to properly establish a connection using the cached one.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-example-response}
 */
export function GetGateway(): RestMakeRequestOptions<{ url: string; }> {
	return {
		method: "GET",
		path: "/gateway",
	};
}

/**
 * Session Start Limit Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure}
 */
export const SessionStartLimitStructure = z.object({
	/**
	 * Total number of session starts the current user is allowed
	 */
	total: Integer,
	/**
	 * Remaining number of session starts the current user is allowed
	 */
	remaining: Integer,
	/**
	 * Number of milliseconds after which the limit resets
	 */
	reset_after: Integer,
	/**
	 * Number of identify requests allowed per 5 seconds
	 */
	max_concurrency: Integer,
});

/**
 * Session Start Limit Structure Infer
 *
 * Is used to infer the type of the {@link SessionStartLimitStructure} object.
 */
export type SessionStartLimitStructureInfer = z.infer<typeof SessionStartLimitStructure>;

/**
 * Response Get Gateway Bot
 *
 * Returns an object based on the information in Get Gateway, plus additional metadata that can help during the operation of large or sharded bots. Unlike the Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response}
 */
export const ResponseGetGatewayBot = z.object({
	/**
	 * WSS URL that can be used for connecting to the Gateway
	 */
	url: z.string(),
	/**
	 * Recommended number of shards to use when connecting
	 */
	shards: Integer,
	/**
	 * Information on the current session start limit
	 */
	session_start_limit: SessionStartLimitStructure,
});

/**
 * Response Get Gateway Bot Infer
 *
 * Is used to infer the type of the {@link ResponseGetGatewayBot} object.
 */
export type ResponseGetGatewayBotInfer = z.infer<typeof ResponseGetGatewayBot>;

/**
 * Get Gateway Bot
 *
 * Returns an object based on the information in Get Gateway, plus additional metadata that can help during the operation of large or sharded bots. Unlike the Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot(): RestMakeRequestOptions<ResponseGetGatewayBotInfer> {
	return {
		method: "GET",
		path: "/gateway/bot",
	};
}
