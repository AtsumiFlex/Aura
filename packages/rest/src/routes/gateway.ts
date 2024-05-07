import { Integer } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Gateway
 *
 * Get the Gateway URL.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function GetGateway<T extends { url: string; }>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/gateway",
	};
}

/**
 * Session Start Limit Structure
 *
 * The session start limit object for the current user.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object}
 */
export const SessionStartLimitStructure = z.object({
	total: Integer,
	remaining: Integer,
	reset_after: Integer,
	max_concurrency: Integer,
});

/**
 * Session Start Limit Structure Infer
 *
 * The inferred type of {@link SessionStartLimitStructure}
 */
export type SessionStartLimitStructureInfer = z.infer<typeof SessionStartLimitStructure>;

/**
 * JSON Response Get Gateway Bot
 *
 * The response structure for the GetGatewayBot endpoint.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-response-object}
 */
export const ResponseGetGatewayBot = z.object({
	url: z.string(),
	shards: Integer,
	session_start_limit: SessionStartLimitStructure,
});

/**
 * JSON Response Get Gateway Bot Infer
 *
 * The inferred type of {@link ResponseGetGatewayBot}
 */
export type ResponseGetGatewayBotInfer = z.infer<typeof ResponseGetGatewayBot>;

/**
 * Get Gateway Bot
 *
 * Get the Gateway URL and connection information.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot<T extends ResponseGetGatewayBotInfer>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/gateway/bot",
	};
}
