import { z } from "zod";

export enum VoiceGatewayVersions {
	V1 = 1,
	V2 = 2,
	V3 = 3,
	V4 = 4,
}

export const VoiceGatewayVersionsEnum = z.nativeEnum(VoiceGatewayVersions);

export enum VoiceGatewayEncryptionModes {
	Lite = "xsalsa20_poly1305_lite",
	Normal = "xsalsa20_poly1305",
	Suffix = "xsalsa20_poly1305_suffix",
}

export const VoiceGatewayEncryptionModesEnum = z.nativeEnum(VoiceGatewayEncryptionModes);

export const VoicePacketStructure = z.object({
	versionFlags: z.literal(0x80),
	payloadType: z.literal(0x78),
	sequence: z.number().int().positive(),
	timestamp: z.number().int().positive(),
	ssrc: z.number().int().positive(),
	encryptedAudio: z.string(),
});
export type VoicePacketInfer = z.infer<typeof VoicePacketStructure>;

export enum SpeakingFlags {
	Microphone = 1,
	Soundshare = 2,
	Priority = 4,
}

export const SpeakingFlagsEnum = z.nativeEnum(SpeakingFlags);

export const VoiceIPDiscoveryStructure = z.object({
	type: z.literal(0x1),
	length: z.literal(70),
	ssrc: z.number().int().positive(),
	address: z.string(),
	port: z.number().int().positive(),
});
export type VoiceIPDiscoveryInfer = z.infer<typeof VoiceIPDiscoveryStructure>;
