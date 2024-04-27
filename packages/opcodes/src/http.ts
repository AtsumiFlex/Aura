/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#http}
 */

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes}
 */
export enum HttpCodes {
	Ok = 200,
	Created = 201,
	NoContent = 204,
	NotModified = 304,
	BadRequest = 400,
	Unauthorized = 401,
	Forbidden = 403,
	NotFound = 404,
	MethodNotAllowed = 405,
	TooManyRequests = 429,
	GatewayUnavailable = 502,
	ServerError = 500,
}
