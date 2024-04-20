/**
 * @fileoverview This file defines the gateway opcodes and close event codes used in the application.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway}
 */

/**
 * @enum {number}
 * @description Enum for gateway opcodes.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes}
 */
export enum GatewayOpcodes {
	Dispatch = 0,
	Heartbeat = 1,
	Identify = 2,
	PresenceUpdate = 3,
	VoiceStateUpdate = 4,
	Resume = 6,
	Reconnect = 7,
	RequestGuildMembers = 8,
	InvalidSession = 9,
	Hello = 10,
	HeartbeatAck = 11,
}

/**
 * @enum {number}
 * @description Enum for gateway close event codes.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes}
 */
export enum GatewayCloseEventCodes {
	UnknownError = 4_000,
	UnknownOpcode = 4_001,
	DecodeError = 4_002,
	NotAuthenticated = 4_003,
	AuthenticationFailed = 4_004,
	AlreadyAuthenticated = 4_005,
	InvalidSeq = 4_007,
	RateLimited = 4_008,
	SessionTimeout = 4_009,
	InvalidShard = 4_010,
	ShardingRequired = 4_011,
	InvalidApiVersion = 4_012,
	InvalidIntents = 4_013,
	DisallowedIntents = 4_014,
}
