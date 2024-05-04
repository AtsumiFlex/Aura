/**
 * Presence Gateway
 *
 * This class is responsible for handling presence events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#presence}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../../../core/src/globals/globals";
import { UserStructure } from "../../../core/src/structures/user";

/**
 * Activity Button Structure
 *
 * When received over the gateway, the buttons field is an array of strings, which are the button labels. Bots cannot access a user's activity button URLs. When sending, the buttons field must be an array of the below objects.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-buttons}
 */
export const ActivityButtonStructure = z.object({
	label: z.string(),
	url: z.string(),
});

/**
 * Activity Button Structure Infer
 *
 * Infer the type of an {@link ActivityButtonStructure} object.
 */
export type ActivityButtonStructureInfer = z.infer<typeof ActivityButtonStructure>;

/**
 * Activity Flags
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
 * Infer the type of an {@link ActivityFlags} object.
 */
export const ActivityFlagsEnum = z.nativeEnum(ActivityFlags);

/**
 * Activity Secrets Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets}
 */
export const ActivitySecretsStructure = z.object({
	join: z.string().optional(),
	spectate: z.string().optional(),
	match: z.string().optional(),
});

/**
 * Activity Secrets Structure Infer
 *
 * Infer the type of an {@link ActivitySecretsStructure} object.
 */
export type ActivitySecretsStructureInfer = z.infer<typeof ActivitySecretsStructure>;

/**
 * Activity Assets Structure
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
 * Infer the type of an {@link ActivityAssetsStructure} object.
 */
export type ActivityAssetsStructureInfer = z.infer<typeof ActivityAssetsStructure>;

/**
 * Activity Party Structure
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
 * Infer the type of an {@link ActivityPartyStructure} object.
 */
export type ActivityPartyStructureInfer = z.infer<typeof ActivityPartyStructure>;

/**
 * Activity Emoji Structure
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
 * Infer the type of an {@link ActivityEmojiStructure} object.
 */
export type ActivityEmojiStructureInfer = z.infer<typeof ActivityEmojiStructure>;

/**
 * Activity Timestamps Structure
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
 * Infer the type of an {@link ActivityTimestampsStructure} object.
 */

/**
 * Activity Types
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-types}
 */
export enum ActivityTypes {
	/**
	 * Playing {name}
	 */
	Game = 0,
	/**
	 * Streaming {details}
	 */
	Streaming = 1,
	/**
	 * Listening to {name}
	 */
	Listening = 2,
	/**
	 * Watching {name}
	 */
	Watching = 3,
	/**
	 * {emoji} {state}
	 */
	Custom = 4,
	/**
	 * Competing in {name}
	 */
	Competing = 5,
}

/**
 * Activity Types Enum
 *
 * Infer the type of an {@link ActivityTypes} object.
 */
export const ActivityTypesEnum = z.nativeEnum(ActivityTypes);

/**
 * Activity Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object}
 */
export const ActivityStructure = z.object({
	name: z.string(),
	type: ActivityTypesEnum,
	url: z.string().optional().nullable(),
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
	flags: z.number().optional(),
	buttons: z.array(ActivityButtonStructure).optional(),
});

/**
 * Activity Structure Infer
 *
 * Infer the type of an {@link ActivityStructure} object.
 */
export type ActivityStructureInfer = z.infer<typeof ActivityStructure>;

/**
 * Client Status Structure
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
 * Infer the type of a {@link ClientStatusStructure} object.
 */
export type ClientStatusStructureInfer = z.infer<typeof ClientStatusStructure>;

/**
 * Presence Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#presence-update}
 */
export const PresenceUpdateEventFields = z.object({
	user: UserStructure,
	guild_id: Snowflake,
	status: z.string(),
	activities: z.array(ActivityStructure),
	client_status: ClientStatusStructure,
});

/**
 * Presence Update Event Fields Infer
 *
 * Infer the type of a {@link PresenceUpdateEventFields} object.
 */
export type PresenceUpdateEventFieldsInfer = z.infer<typeof PresenceUpdateEventFields>;
