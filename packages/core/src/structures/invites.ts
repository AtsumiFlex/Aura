/**
 * Invite Resource
 *
 * Represents a code that when used, adds a user to a guild or group DM channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-resource}
 */

import { z } from "zod";
import { Integer, ISO8601 } from "../globals/globals";
import { ApplicationStructure } from "./applications";
import { ChannelStructure } from "./channels";
import { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guilds";
import { UserStructure } from "./user";

/**
 * Invite Stage Instance Structure
 *
 * Represents a stage instance within a Stage channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object}
 */
export const InviteStageInstanceStructure = z.object({
	members: z.array(GuildMemberStructure.partial()),
	participant_count: Integer,
	speaker_count: Integer,
	topic: z.string(),
});

/**
 * Invite Stage Instance Structure Infer
 *
 * The inferred type of the InviteStageInstanceStructure zod object.
 */
export type InviteStageInstanceStructureInfer = z.infer<typeof InviteStageInstanceStructure>;

/**
 * Invite Metadata Structure
 *
 * Represents the metadata for an invite.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object}
 */
export const InviteMetadataStructure = z.object({
	uses: Integer,
	max_uses: Integer,
	max_age: Integer,
	temporary: z.boolean(),
	created_at: ISO8601,
});

/**
 * Invite Metadata Structure Infer
 *
 * The inferred type of the InviteMetadataStructure zod object.
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
 * InviteTargetTypesEnum is a zod enum that represents the invite target types.
 */
export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);

/**
 * Invite Structure
 *
 * Represents an invite.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object}
 */
export const InviteStructure = z.object({
	code: z.string(),
	guild: GuildStructure.partial().optional(),
	channel: ChannelStructure.partial().nullable(),
	inviter: UserStructure.optional(),
	target_type: InviteTargetTypesEnum.optional(),
	target_user: UserStructure.optional(),
	target_application: ApplicationStructure.partial().optional(),
	approximate_presence_count: Integer.optional(),
	approximate_member_count: Integer.optional(),
	expires_at: ISO8601.optional().nullable(),
	stage_instance: InviteStageInstanceStructure.optional(),
	guild_scheduled_event: GuildScheduledEventStructure.optional(),
});

/**
 * Invite Structure Infer
 *
 * The inferred type of the InviteStructure zod object.
 */
export type InviteStructureInfer = z.infer<typeof InviteStructure>;
