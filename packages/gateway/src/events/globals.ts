import { GatewayOpcodesEnum, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import { ActivityStructure } from "./presences";

/**
 * Status Types
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types}
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
 * Is a zod enum that represents the available {@link StatusTypes}.
 */
export const StatusTypesEnum = z.nativeEnum(StatusTypes);

/**
 * Gateway Presence Update Structure
 *
 * Sent by the client to indicate a presence or status update.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure}
 */
export const GatewayPresenceUpdateStructure = z.object({
	/**
	 * Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
	 */
	since: Integer.nullable(),
	/**
	 * User's activities
	 */
	activities: z.array(ActivityStructure),
	/**
	 * User's new status
	 */
	status: StatusTypesEnum,
	/**
	 * Whether or not the client is afk
	 */
	afk: z.boolean(),
});

/**
 * Gateway Presence Update Structure Infer
 *
 * Is used to infer the type of the {@link GatewayPresenceUpdateStructure} object.
 */
export type GatewayPresenceUpdateStructureInfer = z.infer<typeof GatewayPresenceUpdateStructure>;

/**
 * Gateway Voice State Update Structure
 *
 * Sent when a client wants to join, move, or disconnect from a voice channel.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-voice-state-gateway-voice-state-update-structure}
 */
export const GatewayVoiceStateUpdateStructure = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the voice channel client wants to join (null if disconnecting)
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * Whether the client is muted
	 */
	self_mute: z.boolean(),
	/**
	 * Whether the client deafened
	 */
	self_deaf: z.boolean(),
});

/**
 * Gateway Voice State Update Structure Infer
 *
 * Is used to infer the type of the {@link GatewayVoiceStateUpdateStructure} object.
 */
export type GatewayVoiceStateUpdateStructureInfer = z.infer<typeof GatewayVoiceStateUpdateStructure>;

/**
 * Request Guild Members Structure
 *
 * Used to request all members for a guild or a list of guilds. When initially connecting, if you don't have the GUILD_PRESENCES Gateway Intent, or if the guild is over 75k members, it will only send members who are in voice, plus the member for you (the connecting user). Otherwise, if a guild has over large_threshold members (value in the Gateway Identify), it will only send members who are online, have a role, have a nickname, or are in a voice channel, and if it has under large_threshold members, it will send all members. If a client wishes to receive additional members, they need to explicitly request them via this operation. The server will send Guild Members Chunk events in response with up to 1000 members per chunk until all members that match the request have been sent.
 *
 * Due to our privacy and infrastructural concerns with this feature, there are some limitations that apply:
 *
 * GUILD_PRESENCES intent is required to set presences = true. Otherwise, it will always be false
 * GUILD_MEMBERS intent is required to request the entire member list—(query=‘’, limit=0<=n)
 * You will be limited to requesting 1 guild_id per request
 * Requesting a prefix (query parameter) will return a maximum of 100 members
 * Requesting user_ids will continue to be limited to returning 100 members
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#request-guild-members-request-guild-members-structure}
 */
export const RequestGuildMembersStructure = z.object({
	/**
	 * ID of the guild to get members for
	 */
	guild_id: Snowflake,
	/**
	 * string that username starts with, or an empty string to return all members
	 */
	query: z.string().optional(),
	/**
	 * maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members
	 */
	limit: Integer,
	/**
	 * used to specify if we want the presences of the matched members
	 */
	presences: z.boolean().optional(),
	/**
	 * used to specify which users you wish to fetch
	 */
	user_ids: z.union([Snowflake, z.array(Snowflake)]).optional(),
	/**
	 * nonce to identify the Guild Members Chunk response
	 */
	nonce: z.string().optional(),
});

/**
 * Request Guild Members Structure Infer
 *
 * Is used to infer the type of the {@link RequestGuildMembersStructure} object.
 */
export type RequestGuildMembersStructureInfer = z.infer<typeof RequestGuildMembersStructure>;

/**
 * Resume Structure
 *
 * Used to replay missed events when a disconnected client resumes.
 *
 * Details about resuming are in the Gateway documentation.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#resume-resume-structure}
 */
export const ResumeStructure = z.object({
	/**
	 * Session token
	 */
	token: z.string(),
	/**
	 * Session ID
	 */
	session_id: z.string(),
	/**
	 * Last sequence number received
	 */
	seq: Integer,
});

/**
 * Resume Structure Infer
 *
 * Is used to infer the type of the {@link ResumeStructure} object.
 */
export type ResumeStructureInfer = z.infer<typeof ResumeStructure>;

/**
 * Identify Connection Properties
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties}
 */
export const IdentifyConnectionProperties = z.object({
	/**
	 * Your operating system
	 */
	os: z.string(),
	/**
	 * Your library name
	 */
	browser: z.string(),
	/**
	 * Your library name
	 */
	device: z.string(),
});

/**
 * Identify Connection Properties Infer
 *
 * Is used to infer the type of the {@link IdentifyConnectionProperties} object.
 */
export type IdentifyConnectionPropertiesInfer = z.infer<typeof IdentifyConnectionProperties>;

/**
 * Identify Structure
 *
 * Used to trigger the initial handshake with the gateway.
 *
 * Details about identifying is in the Gateway documentation.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure}
 */
export const IdentifyStructure = z.object({
	/**
	 * Authentication token
	 */
	token: z.string(),
	/**
	 * Connection properties
	 */
	properties: IdentifyConnectionProperties,
	/**
	 * Whether this connection supports compression of packets
	 */
	compress: z.boolean().optional(),
	/**
	 * Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
	 */
	large_threshold: Integer.min(50).max(250).optional(),
	/**
	 * Used for Guild Sharding
	 */
	shard: z.array(Integer).optional(),
	/**
	 * Presence structure for initial presence information
	 */
	presence: GatewayPresenceUpdateStructure.optional(),
	/**
	 * Gateway Intents you wish to receive
	 */
	intents: Integer,
});

/**
 * Identify Structure Infer
 *
 * Is used to infer the type of the {@link IdentifyStructure} object.
 */
export type IdentifyStructureInfer = z.infer<typeof IdentifyStructure>;

/**
 * Gateway Payload Structure
 *
 * Gateway event payloads have a common structure, but the contents of the associated data (d) varies between the different events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#payload-structure}
 */
export const GatewayPayloadStructure = z.object({
	/**
	 * Opcode for the payload
	 */
	op: GatewayOpcodesEnum,
	/**
	 * Event data
	 */
	d: z.any(),
	/**
	 * Sequence number, used for resuming sessions and heartbeats
	 */
	s: Integer.nullable(),
	/**
	 * Event name
	 */
	t: z.string().nullable(),
});

/**
 * Gateway Payload Structure Infer
 *
 * Is used to infer the type of the {@link GatewayPayloadStructure} object.
 */
export type GatewayPayloadStructureInfer = z.infer<typeof GatewayPayloadStructure>;
