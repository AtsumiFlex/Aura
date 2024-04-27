/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#voice}
 */

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#voice-gateway-versioning-gateway-versions}
 */
export enum VoiceGatewayVersion {
	V1 = "?v=1",
	V2 = "?v=2",
	V3 = "?v=3",
	V4 = "?v=4",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-encryption-modes}
 */
export enum VoiceEncryptionModes {
	Lite = "xsalsa20_poly1305_lite",
	None = "xsalsa20_poly1305",
	Suffix = "xsalsa20_poly1305_suffix",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#encrypting-and-sending-voice-voice-packet-structure}
 */
export type VoicePacketStructure = {
	encryptedAudio: Buffer;
	flags: 0x78;
	sequence: number;
	ssrc: number;
	timestamp: number;
	version: 0x80;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export enum VoiceSpeakingFlags {
	Microphone = 1,
	Soundshare = 2,
	Priority = 4,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#ip-discovery}
 */
export type VoiceIPDiscovery = {
	address: string;
	length: 70;
	port: number;
	ssrc: number;
	type: 0x1 | 0x2;
};
