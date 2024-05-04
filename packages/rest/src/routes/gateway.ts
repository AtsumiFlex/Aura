import { Integer } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Gateway
 *
 * Returns an object with a single valid WSS URL, which the client can use for Connecting.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function GetGateway<T extends { url: string; }>(): RestRequestOptions<T> {
	return {
		url: "/gateway",
		method: "GET",
	};
}

/**
 * Session Start Limit Object
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export const SessionStartLimitObject = z.object({
	total: Integer,
	remaining: Integer,
	reset_after: Integer,
	max_concurrency: Integer,
});

/**
 * Session Start Limit Object Infer
 *
 * Is the inferred type of the {@link SessionStartLimitObject} zod object.
 */
export type SessionStartLimitObjectInfer = z.infer<typeof SessionStartLimitObject>;

/**
 * JSON Response Get Gateway Bot
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export const JSONResponseGetGatewayBot = z.object({
	url: z.string(),
	shards: Integer,
	session_start_limit: SessionStartLimitObject,
});

/**
 * JSON Response Get Gateway Bot Infer
 *
 * Is the inferred type of the {@link JSONResponseGetGatewayBot} zod object.
 */
export type JSONResponseGetGatewayBotInfer = z.infer<typeof JSONResponseGetGatewayBot>;

/**
 * Get Gateway Bot
 *
 * Returns the gateway URL for the shard.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot<T extends JSONResponseGetGatewayBotInfer>(): RestRequestOptions<T> {
	return {
		url: "/gateway/bot",
		method: "GET",
	};
}

