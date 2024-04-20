/**
 * @fileoverview This file defines the RPC error codes and close event codes used in the application.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc}
 */

/**
 * @enum {number}
 * @description Enum for RPC error codes.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes}
 * @property {number} UnknownError - Error code for unknown error.
 * @property {number} InvalidPayload - Error code for invalid payload.
 * @property {number} InvalidCommand - Error code for invalid command.
 * @property {number} InvalidGuild - Error code for invalid guild.
 * @property {number} InvalidEvent - Error code for invalid event.
 * @property {number} InvalidChannel - Error code for invalid channel.
 * @property {number} InvalidPermissions - Error code for invalid permissions.
 * @property {number} InvalidClientId - Error code for invalid client ID.
 * @property {number} InvalidOrigin - Error code for invalid origin.
 * @property {number} InvalidToken - Error code for invalid token.
 * @property {number} InvalidUser - Error code for invalid user.
 * @property {number} OAuth2Error - Error code for OAuth2 error.
 * @property {number} SelectChannelTimedOut - Error code for select channel timed out.
 * @property {number} GetGuildTimedOut - Error code for get guild timed out.
 * @property {number} SelectVoiceForceRequired - Error code for select voice force required.
 * @property {number} CaptureShortcutAlreadyListening - Error code for capture shortcut already listening.
 */
export enum RPCErrorCodes {
	UnknownError = 1_000,
	InvalidPayload = 4_000,
	InvalidCommand = 4_002,
	InvalidGuild = 4_003,
	InvalidEvent = 4_004,
	InvalidChannel = 4_005,
	InvalidPermissions = 4_006,
	InvalidClientId = 4_007,
	InvalidOrigin = 4_008,
	InvalidToken = 4_009,
	InvalidUser = 4_010,
	OAuth2Error = 5_000,
	SelectChannelTimedOut = 5_001,
	GetGuildTimedOut = 5_002,
	SelectVoiceForceRequired = 5_003,
	CaptureShortcutAlreadyListening = 5_004,
}

/**
 * @enum {number}
 * @description Enum for RPC close event codes.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes}
 * @property {number} InvalidClientId - Close event code for invalid client ID.
 * @property {number} InvalidOrigin - Close event code for invalid origin.
 * @property {number} RateLimited - Close event code for rate limited.
 * @property {number} TokenRevoked - Close event code for token revoked.
 * @property {number} InvalidVersion - Close event code for invalid version.
 * @property {number} InvalidEncoding - Close event code for invalid encoding.
 */
export enum RPCCloseEventCodes {
	InvalidClientId = 4_000,
	InvalidOrigin = 4_001,
	RateLimited = 4_002,
	TokenRevoked = 4_003,
	InvalidVersion = 4_004,
	InvalidEncoding = 4_005,
}
