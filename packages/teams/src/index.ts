// https://discord.com/developers/docs/topics/teams#teams

// https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types
import type { Snowflake, UserStructure } from "@aurajs/core";

export enum TeamMemberRoleTypes {
	Developer = "developer",
	Member = "admin",
	Owner = "owner",
	ReadOnly = "read-only",
}

// https://discord.com/developers/docs/topics/teams#data-models-team-object
export type TeamObject = {
	icon: string | null;
	id: Snowflake;
	members: TeamMemberObject[];
	name: string;
	owner_user_id: Snowflake;
};

// https://discord.com/developers/docs/topics/teams#data-models-team-object
export type TeamMemberObject = {
	membership_state: MembershipStateEnum;
	role: TeamMemberRoleTypes;
	team_id: Snowflake;
	user: Pick<UserStructure, "avatar" | "discriminator" | "id" | "username">;
};

// https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
export enum MembershipStateEnum {
	Invited = 1,
	Accepted = 2,
}
