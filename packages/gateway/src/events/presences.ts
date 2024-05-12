import { Integer, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Activity Buttons
 *
 * When received over the gateway, the buttons field is an array of strings, which are the button labels. Bots cannot access a user's activity button URLs. When sending, the buttons field must be an array of the below object.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons}
 */
export const ActivityButtonFields = z.object({
	/**
	 * Text shown on the button (1-32 characters)
	 */
	label: z.string().min(1).max(32),
	/**
	 * URL opened when clicking the button (1-512 characters)
	 */
	url: z.string().url().min(1).max(512),
});

/**
 * Activity Button Fields Infer
 *
 * Is used to infer the type of the {@link ActivityButtonFields} object.
 */
export type ActivityButtonFieldsInfer = z.infer<typeof ActivityButtonFields>;

/**
 * Activity Flags
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
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
 * Is a zod enum that represents the available {@link ActivityFlags}.
 */
export const ActivityFlagsEnum = z.nativeEnum(ActivityFlags);

/**
 * Activity Secrets
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets}
 */
export const ActivitySecretsFields = z.object({
	/**
	 * Secret for joining a party
	 */
	join: z.string().optional(),
	/**
	 * Secret for spectating a game
	 */
	spectate: z.string().optional(),
	/**
	 * Secret for a specific instanced match
	 */
	match: z.string().optional(),
});

/**
 * Activity Secrets Fields Infer
 *
 * Is used to infer the type of the {@link ActivitySecretsFields} object.
 */
export type ActivitySecretsFieldsInfer = z.infer<typeof ActivitySecretsFields>;

/**
 * Activity Assets
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets}
 */
export const ActivityAssetsFields = z.object({
	/**
	 * See Activity Asset Image
	 */
	large_image: z.string().optional(),
	/**
	 * Text displayed when hovering over the large image of the activity
	 */
	large_text: z.string().optional(),
	/**
	 * See Activity Asset Image
	 */
	small_image: z.string().optional(),
	/**
	 * Text displayed when hovering over the small image of the activity
	 */
	small_text: z.string().optional(),
});

/**
 * Activity Assets Fields Infer
 *
 * Is used to infer the type of the {@link ActivityAssetsFields} object.
 */
export type ActivityAssetsFieldsInfer = z.infer<typeof ActivityAssetsFields>;

/**
 * Activity Party
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party}
 */
export const ActivityPartyFields = z.object({
	/**
	 * ID of the party
	 */
	id: z.string().optional(),
	/**
	 * Used to show the party's current and maximum size
	 */
	size: z.array(Integer).length(2).optional(),
});

/**
 * Activity Party Fields Infer
 *
 * Is used to infer the type of the {@link ActivityPartyFields} object.
 */
export type ActivityPartyFieldsInfer = z.infer<typeof ActivityPartyFields>;

/**
 * Activity Emoji
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji}
 */
export const ActivityEmojiFields = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * ID of the emoji
	 */
	id: Snowflake.optional(),
	/**
	 * Whether the emoji is animated
	 */
	animated: z.boolean().optional(),
});

/**
 * Activity Emoji Fields Infer
 *
 * Is used to infer the type of the {@link ActivityEmojiFields} object.
 */
export type ActivityEmojiFieldsInfer = z.infer<typeof ActivityEmojiFields>;

/**
 * Activity Timestamps
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps}
 */
export const ActivityTimestampsFields = z.object({
	/**
	 * Unix time (in milliseconds) of when the activity started
	 */
	start: Integer.optional(),
	/**
	 * Unix time (in milliseconds) of when the activity ends
	 */
	end: Integer.optional(),
});

/**
 * Activity Timestamps Fields Infer
 *
 * Is used to infer the type of the {@link ActivityTimestampsFields} object.
 */
export type ActivityTimestampsFieldsInfer = z.infer<typeof ActivityTimestampsFields>;

/**
 * Activity Types
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types}
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
 * Is a zod enum that represents the available {@link ActivityTypes}.
 */
export const ActivityTypesEnum = z.nativeEnum(ActivityTypes);

/**
 * Activity Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure}
 */
export const ActivityStructure = z.object({
	/**
	 * Activity's name
	 */
	name: z.string(),
	/**
	 * Activity type
	 */
	type: ActivityTypesEnum,
	/**
	 * Stream URL, is validated when type is 1
	 */
	url: z.string().optional(),
	/**
	 * Unix timestamp (in milliseconds) of when the activity was added to the user's session
	 */
	created_at: Integer,
	/**
	 * Unix timestamps for start and/or end of the game
	 */
	timestamps: ActivityTimestampsFields.optional(),
	/**
	 * Application ID for the game
	 */
	application_id: Snowflake.optional(),
	/**
	 * What the player is currently doing
	 */
	details: z.string().optional(),
	/**
	 * User's current party status, or text used for a custom status
	 */
	state: z.string().optional(),
	/**
	 * Emoji used for a custom status
	 */
	emoji: ActivityEmojiFields.optional(),
	/**
	 * Information for the current party of the player
	 */
	party: ActivityPartyFields.optional(),
	/**
	 * Images for the presence and their hover texts
	 */
	assets: ActivityAssetsFields.optional(),
	/**
	 * Secrets for Rich Presence joining and spectating
	 */
	secrets: ActivitySecretsFields.optional(),
	/**
	 * Whether or not the activity is an instanced game session
	 */
	instance: z.boolean().optional(),
	/**
	 * Activity flags ORd together, describes what the payload includes
	 */
	flags: ActivityFlagsEnum.optional(),
	/**
	 * Custom buttons shown in the Rich Presence (max 2)
	 */
	buttons: z.array(ActivityButtonFields).max(2).optional(),
});

/**
 * Activity Structure Infer
 *
 * Is used to infer the type of the {@link ActivityStructure} object.
 */
export type ActivityStructureInfer = z.infer<typeof ActivityStructure>;

/**
 * Client Status Object
 *
 * Active sessions are indicated with an "online", "idle", or "dnd" string per platform. If a user is offline or invisible, the corresponding field is not present.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
 */
export const ClientStatusObject = z.object({
	/**
	 * User's status set for an active desktop (Windows, Linux, Mac) application session
	 */
	desktop: z.string().optional(),
	/**
	 * User's status set for an active mobile (iOS, Android) application session
	 */
	mobile: z.string().optional(),
	/**
	 * User's status set for an active web (browser, bot user) application session
	 */
	web: z.string().optional(),
});

/**
 * Client Status Object Infer
 *
 * Is used to infer the type of the {@link ClientStatusObject} object.
 */
export type ClientStatusObjectInfer = z.infer<typeof ClientStatusObject>;

/**
 * Presence Update Event Fields
 *
 * A user's presence is their current state on a guild. This event is sent when a user's presence or info, such as name or avatar, is updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields}
 */
export const PresenceUpdateEventFields = z.object({
	/**
	 * User whose presence is being updated
	 */
	user: UserStructure,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Either "idle", "dnd", "online", or "offline"
	 */
	status: z.union([z.literal("idle"), z.literal("dnd"), z.literal("online"), z.literal("offline")]),
	/**
	 * User's current activities
	 */
	activities: z.array(ActivityStructure).optional(),
	/**
	 * User's platform-dependent status
	 */
	client_status: ClientStatusObject.optional(),
});

/**
 * Presence Update Event Fields Infer
 *
 * Is used to infer the type of the {@link PresenceUpdateEventFields} object.
 */
export type PresenceUpdateEventFieldsInfer = z.infer<typeof PresenceUpdateEventFields>;
