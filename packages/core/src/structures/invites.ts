/**
 * Invite Resource
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-resource}
 */
import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formatters";
import { ApplicationStructure } from "./applications";
import { ChannelStructure } from "./channels";
import { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * Invite Stage Instance Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 * @deprecated
 */
export const InviteStageInstanceStructure = z.object({
	/**
	 * The members speaking in the Stage
	 */
	members: z.array(GuildMemberStructure.partial()),
	/**
	 * The number of users in the Stage
	 */
	participant_count: Integer,
	/**
	 * The number of users speaking in the Stage
	 */
	speaker_count: Integer,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
});

/**
 * Invite Stage Instance Structure Infer
 *
 * Is used to infer the type of the {@link InviteStageInstanceStructure} object.
 */
export type InviteStageInstanceStructureInfer = z.infer<typeof InviteStageInstanceStructure>;

/**
 * Invite Metadata Structure
 *
 * Extra information about an invite, will extend the invite object.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export const InviteMetadataStructure = z.object({
	/**
	 * Number of times this invite has been used
	 */
	uses: Integer,
	/**
	 * Max number of times this invite can be used
	 */
	max_uses: Integer,
	/**
	 * Duration (in seconds) after which the invite expires
	 */
	max_age: Integer,
	/**
	 * Whether this invite only grants temporary membership
	 */
	temporary: z.boolean(),
	/**
	 * When this invite was created
	 */
	created_at: ISO8601Timestamp,
});

/**
 * Invite Metadata Structure Infer
 *
 * Is used to infer the type of the {@link InviteMetadataStructure} object.
 */
export type InviteMetadataStructureInfer = z.infer<typeof InviteMetadataStructure>;

/**
 * Invite Target Types
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types}
 */
export enum InviteTargetTypes {
	/**
	 * Stream
	 */
	Stream = 1,
	/**
	 * Embedded Application
	 */
	EmbeddedApplication = 2,
}

/**
 * Invite Target Types Enum
 *
 * Is a zod enum that represents the available {@link InviteTargetTypes}.
 */
export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);

/**
 * Invite Structure
 *
 * Represents a code that when used, adds a user to a guild or group DM channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export const InviteStructure = z.object({
	/**
	 * The invite code (unique ID)
	 */
	code: z.string(),
	/**
	 * The guild this invite is for
	 */
	guild: GuildStructure.partial().optional(),
	/**
	 * The channel this invite is for
	 */
	channel: ChannelStructure.partial().nullable(),
	/**
	 * The user who created the invite
	 */
	inviter: UserStructure.optional(),
	/**
	 * The type of target for this voice channel invite
	 */
	target_type: InviteTargetTypesEnum.optional(),
	/**
	 * The user whose stream to display for this voice channel stream invite
	 */
	target_user: UserStructure.optional(),
	/**
	 * The embedded application to open for this voice channel embedded application invite
	 */
	target_application: ApplicationStructure.partial().optional(),
	/**
	 * Approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true
	 */
	approximate_presence_count: Integer.optional(),
	/**
	 * Approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true
	 */
	approximate_member_count: Integer.optional(),
	/**
	 * The expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true
	 */
	expires_at: ISO8601Timestamp.optional().nullable(),
	/**
	 * Stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated)
	 */
	stage_instance: InviteStageInstanceStructure.optional(),
	/**
	 * Guild scheduled event data, only included if guild_scheduled_event_id contains a valid guild scheduled event id
	 */
	guild_scheduled_event: GuildScheduledEventStructure.optional(),
});

/**
 * Invite Structure Infer
 *
 * Is used to infer the type of the {@link InviteStructure} object.
 */
export type InviteStructureInfer = z.infer<typeof InviteStructure>;
