/**
 * Invite Resource
 *
 * Invites in Discord represent a code that when used, adds a user to a guild or group DM channel. This is used for things like invites to guilds, invites to group DM channels, and more.
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
 * Represents a stage instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 */
export const InviteStageInstanceStructure = z.object({
	members: z.array(GuildMemberStructure.partial()),
	participant_count: Integer,
	speaker_count: Integer,
	topic: z.string().min(1).max(120),
});

/**
 * Invite Stage Instance Structure Infer
 *
 * The inferred type of {@link InviteStageInstanceStructure}
 */
export type InviteStageInstanceStructureInfer = z.infer<typeof InviteStageInstanceStructure>;

/**
 * Invite Metadata Structure
 *
 * Represents the metadata of an invite.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export const InviteMetadataStructure = z.object({
	uses: Integer,
	max_uses: Integer,
	max_age: Integer,
	temporary: z.boolean(),
	created_at: ISO8601Timestamp,
});

/**
 * Invite Metadata Structure Infer
 *
 * The inferred type of {@link InviteMetadataStructure}
 */
export type InviteMetadataStructureInfer = z.infer<typeof InviteMetadataStructure>;

/**
 * Invite Target Types
 *
 * The types of targets that can be used for an invite.
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
 * Represents an invite.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export const InviteStructure = z.object({
	code: z.string(),
	guild: GuildStructure.partial().optional(),
	channel: ChannelStructure.partial().optional(),
	inviter: UserStructure.optional(),
	target_type: InviteTargetTypesEnum.optional(),
	target_user: UserStructure.optional(),
	target_application: ApplicationStructure.partial().optional(),
	approximate_presence_count: Integer.optional(),
	approximate_member_count: Integer.optional(),
	expires_at: ISO8601Timestamp.optional(),
	stage_instance: InviteStageInstanceStructure.optional(),
	guild_scheduled_event: GuildScheduledEventStructure.optional(),
});

/**
 * Invite Structure Infer
 *
 * The inferred type of {@link InviteStructure}
 */
export type InviteStructureInfer = z.infer<typeof InviteStructure>;
