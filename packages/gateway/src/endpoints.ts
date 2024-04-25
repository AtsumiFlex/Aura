import type { Integer } from "@aurajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function GetGateway() {
	return {
		method: "GET",
		path: "/gateway",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot() {
	return {
		method: "GET",
		path: "/gateway/bot",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response}
 */
export type GetGatewayBotJSONResponse = {
	session_start_limit: SessionStartLimitStructure;
	shards: Integer;
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure}
 */
export type SessionStartLimitStructure = {
	max_concurrency: Integer;
	remaining: Integer;
	reset_after: Integer;
	total: Integer;
};
