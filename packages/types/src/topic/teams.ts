/**
 * @see {@link https://discord.com/developers/docs/topics/teams#teams}
 */

import type { Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types}
 */
export enum TeamMemberRoles {
	Owner = 0,
	Admin = "admin",
	Developer = "developer",
	ReadOnly = "read-only",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-object}
 */
export type TeamObject = {
	icon: string | null;
	id: Snowflake;
	members: TeamMemberObject[];
	name: string;
	owner_user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export type TeamMemberObject = {
	membership_state: MembershipState;
	role: TeamMemberRoles;
	team_id: Snowflake;
	user: object; // TODO: partial user object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	Invited = 1,
	Accepted = 2,
}
