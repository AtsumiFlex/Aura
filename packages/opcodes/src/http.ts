/**
 * @fileoverview This file defines the HTTP response codes used in the application.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#http}
 */

/**
 * @enum {number}
 * @description Enum for HTTP response codes.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes}
 * @property {number} Ok - Response code for successful HTTP requests.
 * @property {number} Created - Response code for an HTTP request that has been fulfilled and resulted in a new resource being created.
 * @property {number} NoContent - Response code for a request that has been successfully processed, but is not returning any content.
 * @property {number} NotModified - Response code for a conditional GET or HEAD request that has been successfully processed, but the resource has not been modified.
 * @property {number} BadRequest - Response code for an HTTP request that could not be understood by the server due to malformed syntax.
 * @property {number} Unauthorized - Response code for a request that requires user authentication.
 * @property {number} Forbidden - Response code for a request where the server understood the request, but is refusing to fulfill it.
 * @property {number} NotFound - Response code for a request of a resource that is not found.
 * @property {number} MethodNotAllowed - Response code for a request made with a method not supported on the target resource.
 * @property {number} TooManyRequests - Response code for a user has sent too many requests in a given amount of time.
 * @property {number} GatewayUnavailable - Response code for a server acting as a gateway or proxy and received an invalid response from the upstream server.
 */
export enum HTTPResponseCodes {
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
}
