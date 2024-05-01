import { z } from "zod";
import { Integer, ISO8601 } from "../globals";
import { ApplicationStructure } from "./application";
import { ChannelStructure } from "./channel";
import { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guild";
import { UserStructure } from "./user";

export const InviteStageInstanceStructure = z.object({
	members: z.array(GuildMemberStructure.partial()),
	participant_count: z.number(),
	speaker_count: z.number(),
	topic: z.string(),
});
export type InviteStageInstanceInfer = z.infer<typeof InviteStageInstanceStructure>;

export const InviteMetadataStructure = z.object({
	uses: Integer,
	max_uses: Integer,
	max_age: Integer,
	temporary: z.boolean(),
	created_at: ISO8601,
});
export type InviteMetadataInfer = z.infer<typeof InviteMetadataStructure>;

export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
}

export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);

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
export type InviteInfer = z.infer<typeof InviteStructure>;
