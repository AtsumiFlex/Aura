// https://discord.com/developers/docs/resources/invite#invite-resource
import type { Integer } from "../global";
import type { ApplicationStructure } from "./application";
import type { ChannelStructure } from "./channel";
import type { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guild";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
export type InviteStructure = {
	approximate_member_count?: Integer;
	approximate_presence_count?: Integer;
	channel: ChannelStructure | null;
	code: string;
	expires_at?: string | null;
	guild?: GuildStructure;
	guild_scheduled_event?: GuildScheduledEventStructure;
	inviter?: UserStructure;
	stage_instance?: InviteStageInstanceStructure;
	target_application?: ApplicationStructure;
	target_type?: InviteTargetType;
	target_user?: UserStructure;
};

// https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
export enum InviteTargetType {
	Stream = 1,
	EmbeddedApplication = 2,
}

// https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure
export type InviteMetadataStructure = {
	created_at: string;
	max_age: Integer;
	max_uses: Integer;
	temporary: boolean;
	uses: Integer;
};

// https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure
export type InviteStageInstanceStructure = {
	members: GuildMemberStructure[];
	participant_count: Integer;
	speaker_count: Integer;
	topic: string;
};
