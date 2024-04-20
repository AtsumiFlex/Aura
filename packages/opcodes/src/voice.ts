/**
 * @fileoverview This file defines the voice opcodes and close event codes used in the application.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice}
 */

/**
 * @enum {number}
 * @description Enum for voice opcodes.
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes}
 * @property {number} Identify - Opcode for identification.
 * @property {number} SelectProtocol - Opcode for selecting protocol.
 * @property {number} Ready - Opcode for readiness.
 * @property {number} Heartbeat - Opcode for heartbeat.
 * @property {number} SessionDescription - Opcode for session description.
 * @property {number} Speaking - Opcode for speaking.
 * @property {number} HeartbeatAck - Opcode for heartbeat acknowledgement.
 * @property {number} Resume - Opcode for resuming.
 * @property {number} Hello - Opcode for hello.
 * @property {number} Resumed - Opcode for resumed.
 * @property {number} ClientDisconnect - Opcode for client disconnect.
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
 * @see {https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes}
 * @property {number} UnknownOpcode - Close event code for unknown opcode.
 * @property {number} DecodeError - Close event code for decode error.
 * @property {number} NotAuthenticated - Close event code for not authenticated.
 * @property {number} AuthenticationFailed - Close event code for authentication failed.
 * @property {number} AlreadyAuthenticated - Close event code for already authenticated.
 * @property {number} SessionNoLongerValid - Close event code for session no longer valid.
 * @property {number} SessionTimeout - Close event code for session timeout.
 * @property {number} ServerNotFound - Close event code for server not found.
 * @property {number} UnknownProtocol - Close event code for unknown protocol.
 * @property {number} Disconnected - Close event code for disconnected.
 * @property {number} VoiceServerCrashed - Close event code for voice server crashed.
 * @property {number} UnknownEncryptionMode - Close event code for unknown encryption mode.
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
