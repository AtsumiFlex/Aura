import type { APIVersions } from "../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params}
 */
export type GatewayURLQueryStringParams = {
	compress?: "zlib-stream";
	encoding: "etf" | "json";
	v: APIVersions;
};
