import { z } from "zod";
import { Integer, Snowflake } from "../../globals";
import { UserStructure } from "../../structure/user";
import { GatewayStatusTypesEnum } from "../gateway";

export enum GatewayActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}

export const GatewayActivityTypesEnum = z.nativeEnum(GatewayActivityTypes);

export const GatewayActivityTimestampsStructure = z.object({
	start: Integer.optional(),
	end: Integer.optional(),
});

export const GatewayActivityEmojiStructure = z.object({
	name: z.string(),
	id: Snowflake.optional(),
	animated: z.boolean().optional(),
});
export type GatewayActivityEmojiInfer = z.infer<typeof GatewayActivityEmojiStructure>;

export const GatewayActivityPartyStructure = z.object({
	id: z.string().optional(),
	size: z.array(Integer).length(2).optional(),
});
export type GatewayActivityPartyInfer = z.infer<typeof GatewayActivityPartyStructure>;

export const GatewayActivityAssetsStructure = z.object({
	large_image: z.string().optional(),
	large_text: z.string().optional(),
	small_image: z.string().optional(),
	small_text: z.string().optional(),
});
export type GatewayActivityAssetsInfer = z.infer<typeof GatewayActivityAssetsStructure>;

export const GatewayActivitySecretsStructure = z.object({
	join: z.string().optional(),
	spectate: z.string().optional(),
	match: z.string().optional(),
});
export type GatewayActivitySecretsInfer = z.infer<typeof GatewayActivitySecretsStructure>;

export enum GatewayActivityFlags {
	Instance = 1,
	Join = 2,
	Spectate = 4,
	JoinRequest = 8,
	Sync = 16,
	Play = 32,
	PartyPrivacyFriends = 64,
	PartyPrivacyVoiceChannel = 128,
	Embedded = 256,
}

export const GatewayActivityFlagsEnum = z.nativeEnum(GatewayActivityFlags);

export const GatewayActivityButtonStructure = z.object({
	label: z.string().min(1).max(32),
	url: z.string().min(1).max(512),
});
export type GatewayActivityButtonInfer = z.infer<typeof GatewayActivityButtonStructure>;

export const GatewayActivityStructure = z.object({
	name: z.string(),
	type: GatewayActivityTypesEnum,
	url: z.string().optional().nullable(),
	created_at: Integer,
	timestamps: GatewayActivityTimestampsStructure.optional(),
	application_id: Snowflake.optional(),
	details: z.string().optional().nullable(),
	state: z.string().optional().nullable(),
	emoji: GatewayActivityEmojiStructure.optional().nullable(),
	party: GatewayActivityPartyStructure.optional(),
	assets: GatewayActivityAssetsStructure.optional(),
	secrets: GatewayActivitySecretsStructure.optional(),
	instance: z.boolean().optional(),
	flags: GatewayActivityFlagsEnum.optional(),
	buttons: z.array(GatewayActivityButtonStructure).optional(),
});
export type GatewayActivityInfer = z.infer<typeof GatewayActivityStructure>;

export const GatewayClientStatusStructure = z.object({
	desktop: z.string().optional(),
	mobile: z.string().optional(),
	web: z.string().optional(),
});
export type GatewayClientStatusInfer = z.infer<typeof GatewayClientStatusStructure>;

export const GatewayPresenceUpdateFields = z.object({
	user: UserStructure,
	guild_id: Snowflake.optional(),
	status: GatewayStatusTypesEnum,
	activities: z.array(GatewayActivityStructure),
	client_status: GatewayClientStatusStructure,
});
export type GatewayPresenceUpdateInfer = z.infer<typeof GatewayPresenceUpdateFields>;
