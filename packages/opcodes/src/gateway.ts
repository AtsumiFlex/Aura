/**
 * @fileoverview This file defines the gateway opcodes and close event codes used in the application.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway}
 */

/**
 * @enum {number}
 * @description Enum for gateway opcodes.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes}
 * @property {number} Dispatch - Opcode for dispatch.
 * @property {number} Heartbeat - Opcode for heartbeat.
 * @property {number} Identify - Opcode for identify.
 * @property {number} PresenceUpdate - Opcode for presence update.
 * @property {number} VoiceStateUpdate - Opcode for voice state update.
 * @property {number} Resume - Opcode for resume.
 * @property {number} Reconnect - Opcode for reconnect.
 * @property {number} RequestGuildMembers - Opcode for request guild members.
 * @property {number} InvalidSession - Opcode for invalid session.
 * @property {number} Hello - Opcode for hello.
 * @property {number} HeartbeatAck - Opcode for heartbeat acknowledgement.
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
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes}
 * @property {number} UnknownError - Close event code for unknown error.
 * @property {number} UnknownOpcode - Close event code for unknown opcode.
 * @property {number} DecodeError - Close event code for decode error.
 * @property {number} NotAuthenticated - Close event code for not authenticated.
 * @property {number} AuthenticationFailed - Close event code for authentication failed.
 * @property {number} AlreadyAuthenticated - Close event code for already authenticated.
 * @property {number} InvalidSeq - Close event code for invalid sequence.
 * @property {number} RateLimited - Close event code for rate limited.
 * @property {number} SessionTimeout - Close event code for session timeout.
 * @property {number} InvalidShard - Close event code for invalid shard.
 * @property {number} ShardingRequired - Close event code for sharding required.
 * @property {number} InvalidApiVersion - Close event code for invalid API version.
 * @property {number} InvalidIntents - Close event code for invalid intents.
 * @property {number} DisallowedIntents - Close event code for disallowed intents.
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
