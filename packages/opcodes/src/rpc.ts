/**
 * @fileoverview This file defines the RPC error codes and close event codes used in the application.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc}
 */

/**
 * @enum {number}
 * @description Enum for RPC error codes.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes}
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
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes}
 */
export enum RPCCloseEventCodes {
	InvalidClientId = 4_000,
	InvalidOrigin = 4_001,
	RateLimited = 4_002,
	TokenRevoked = 4_003,
	InvalidVersion = 4_004,
	InvalidEncoding = 4_005,
}
