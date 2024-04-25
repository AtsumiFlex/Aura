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
