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
