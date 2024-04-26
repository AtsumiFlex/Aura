import type { Integer, ISO8601Timestamp } from "../../base/base";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export type InviteStructure = {
	approximate_member_count?: Integer;
	approximate_presence_count?: Integer;
	channel: object | null; // TODO: Partial Channel object
	code: string;
	expires_at?: ISO8601Timestamp | null;
	guild?: object; // TODO: Partial Guild object
	guild_scheduled_event?: object; // TODO: Guild scheduled event object
	inviter?: UserStructure;
	stage_instance?: InviteStageInstanceStructure;
	target_application?: object; // TODO: Partial Application object
	target_type?: InviteTargetType;
	target_user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types}
 */
export enum InviteTargetType {
	Stream = 1,
	EmbeddedApplication = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export type InviteMetadataStructure = {
	created_at: ISO8601Timestamp;
	max_age: Integer;
	max_uses: Integer;
	temporary: boolean;
	uses: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 */
export type InviteStageInstanceStructure = {
	members: object; // TODO: array of partial guild member objects
	participant_count: Integer;
	speaker_count: Integer;
	topic: string;
};
