import { Integer, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Activity Button Structure
 *
 * Represents the structure of the Activity Button payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-button-structure}
 */
export const ActivityButtonStructure = z.object({
	label: z.string().min(1).max(32),
	url: z.string().min(1).max(512),
});

/**
 * Activity Button Structure Infer
 *
 * Represents the inferred type of the {@link ActivityButtonStructure}
 */
export type ActivityButtonStructureInfer = z.infer<typeof ActivityButtonStructure>;

/**
 * Activity Flags
 *
 * Represents the flags of an activity
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags}
 */
export enum ActivityFlags {
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

/**
 * Activity Flags Enum
 *
 * Represents the enum of the {@link ActivityFlags}
 */
export const ActivityFlagsEnum = z.nativeEnum(ActivityFlags);

/**
 * Activity Secrets Structure
 *
 * Represents the structure of the Activity Secrets payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets}
 */
export const ActivitySecretsStructure = z.object({
	join: z.string().nullable(),
	spectate: z.string().nullable(),
	match: z.string().nullable(),
});

/**
 * Activity Secrets Structure Infer
 *
 * Represents the inferred type of the {@link ActivitySecretsStructure}
 */
export type ActivitySecretsStructureInfer = z.infer<typeof ActivitySecretsStructure>;

/**
 * Activity Assets Structure
 *
 * Represents the structure of the Activity Assets payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets}
 */
export const ActivityAssetsStructure = z.object({
	large_image: z.string().optional(),
	large_text: z.string().optional(),
	small_image: z.string().optional(),
	small_text: z.string().optional(),
});

/**
 * Activity Assets Structure Infer
 *
 * Represents the inferred type of the {@link ActivityAssetsStructure}
 */
export type ActivityAssetsStructureInfer = z.infer<typeof ActivityAssetsStructure>;

/**
 * Activity Party Structure
 *
 * Represents the structure of the Activity Party payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-party}
 */
export const ActivityPartyStructure = z.object({
	id: z.string().optional(),
	size: z.array(Integer).max(2).optional(),
});

/**
 * Activity Party Structure Infer
 *
 * Represents the inferred type of the {@link ActivityPartyStructure}
 */
export type ActivityPartyStructureInfer = z.infer<typeof ActivityPartyStructure>;

/**
 * Activity Emoji Structure
 *
 * Represents the structure of the Activity Emoji payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji}
 */
export const ActivityEmojiStructure = z.object({
	name: z.string(),
	id: Snowflake.optional(),
	animated: z.boolean().optional(),
});

/**
 * Activity Emoji Structure Infer
 *
 * Represents the inferred type of the {@link ActivityEmojiStructure}
 */
export type ActivityEmojiStructureInfer = z.infer<typeof ActivityEmojiStructure>;

/**
 * Activity Timestamps Structure
 *
 * Represents the structure of the Activity Timestamps payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps}
 */
export const ActivityTimestampsStructure = z.object({
	start: Integer.optional(),
	end: Integer.optional(),
});

/**
 * Activity Timestamps Structure Infer
 *
 * Represents the inferred type of the {@link ActivityTimestampsStructure}
 */
export type ActivityTimestampsStructureInfer = z.infer<typeof ActivityTimestampsStructure>;

/**
 * Activity Types
 *
 * Represents the types of an activity
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-types}
 */
export enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}

/**
 * Activity Types Enum
 *
 * Represents the enum of the {@link ActivityTypes}
 */
export const ActivityTypesEnum = z.nativeEnum(ActivityTypes);

/**
 * Activity Structure
 *
 * Represents the structure of the Activity payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure}
 */
export const ActivityStructure = z.object({
	name: z.string(),
	type: ActivityTypesEnum,
	url: z.string().optional(),
	created_at: Integer,
	timestamps: ActivityTimestampsStructure.optional(),
	application_id: Snowflake.optional(),
	details: z.string().optional().nullable(),
	state: z.string().optional().nullable(),
	emoji: ActivityEmojiStructure.optional().nullable(),
	party: ActivityPartyStructure.optional(),
	assets: ActivityAssetsStructure.optional(),
	secrets: ActivitySecretsStructure.optional(),
	instance: z.boolean().optional(),
	flags: ActivityFlagsEnum.optional(),
	buttons: z.array(ActivityButtonStructure).max(2).optional(),
});

/**
 * Activity Structure Infer
 *
 * Represents the inferred type of the {@link ActivityStructure}
 */
export type ActivityStructureInfer = z.infer<typeof ActivityStructure>;

/**
 * Client Status Structure
 *
 * Represents the structure of the Client Status payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#client-status-object}
 */
export const ClientStatusStructure = z.object({
	desktop: z.string().optional(),
	mobile: z.string().optional(),
	web: z.string().optional(),
});

/**
 * Client Status Structure Infer
 *
 * Represents the inferred type of the {@link ClientStatusStructure}
 */
export type ClientStatusStructureInfer = z.infer<typeof ClientStatusStructure>;

/**
 * Status Types
 *
 * Represents the types of status
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields}
 */
export enum StatusTypes {
	DoNotDisturb = "dnd",
	Idle = "idle",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

/**
 * Status Types Enum
 *
 * Represents the enum of the {@link StatusTypes}
 */
export const StatusTypesEnum = z.nativeEnum(StatusTypes);

/**
 * Presence Update Event Fields
 *
 * Represents the structure of the Presence Update Event Fields payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields}
 */
export const PresenceUpdateEventFields = z.object({
	user: UserStructure,
	guild_id: Snowflake.optional(),
	status: StatusTypesEnum,
	activities: z.array(ActivityStructure).optional(),
	client_status: ClientStatusStructure.optional(),
});

/**
 * Presence Update Event Fields Infer
 *
 * Represents the inferred type of the {@link PresenceUpdateEventFields}
 */
export type PresenceUpdateEventFieldsInfer = z.infer<typeof PresenceUpdateEventFields>;

/**
 * Gateway Presence Update Structure
 *
 * Represents the structure of the Gateway Presence Update payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#presence-update}
 */
export const GatewayPresenceUpdateStructure = z.object({
	since: Integer.nullable(),
	activities: z.array(ActivityStructure).optional(),
	status: StatusTypesEnum,
	afk: z.boolean(),
});

/**
 * Gateway Presence Update Structure Infer
 *
 * Represents the inferred type of the {@link GatewayPresenceUpdateStructure}
 */
export type GatewayPresenceUpdateStructureInfer = z.infer<typeof GatewayPresenceUpdateStructure>;
