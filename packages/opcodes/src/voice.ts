/**
 * @fileoverview This file defines the voice opcodes and close event codes used in the application.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice}
 */

/**
 * @enum {number}
 * @description Enum for voice opcodes.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes}
 */
export enum VoiceOpcodes {
	Identify = 0,
	SelectProtocol = 1,
	Ready = 2,
	Heartbeat = 3,
	SessionDescription = 4,
	Speaking = 5,
	HeartbeatAck = 6,
	Resume = 7,
	Hello = 8,
	Resumed = 9,
	ClientDisconnect = 13,
}

/**
 * @enum {number}
 * @description Enum for voice close event codes.
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes}
 */
export enum VoiceCloseEventCodes {
	UnknownOpcode = 4_001,
	DecodeError = 4_002,
	NotAuthenticated = 4_003,
	AuthenticationFailed = 4_004,
	AlreadyAuthenticated = 4_005,
	SessionNoLongerValid = 4_006,
	SessionTimeout = 4_009,
	ServerNotFound = 4_011,
	UnknownProtocol = 4_012,
	Disconnected = 4_014,
	VoiceServerCrashed = 4_015,
	UnknownEncryptionMode = 4_016,
}