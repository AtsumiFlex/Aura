/**
 * Teams
 *
 * Teams are groups of developers (or other Discord users) who want to collaborate and share access to an app's configuration, management, and payout settings. Go team(s)!
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#teams}
 */

import { z } from "zod";
import { Snowflake } from "../globals/globals";
import { UserStructure } from "./user";

/**
 * Membership State Enum
 *
 * Membership state of a user in a team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	/**
	 * User has been invited to the team.
	 */
	Invited = 1,
	/**
	 * User has accepted the invitation to the team.
	 */
	Accepted = 2,
}

/**
 * Membership State Enum is a zod enum that represents the membership state.
 */
export const MembershipStateEnum = z.nativeEnum(MembershipState);

/**
 * Team Member Role Enum
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types}
 */
export enum TeamMemberRole {
	/**
	 * Admins have similar access as owners, except they cannot take destructive actions on the team or team-owned apps.
	 */
	Admin = "admin",
	/**
	 * Developers can access information about team-owned apps, like the client secret or public key. They can also take limited actions on team-owned apps, like configuring interaction endpoints or resetting the bot token. Members with the Developer role cannot manage the team or its members, or take destructive actions on team-owned apps.
	 */
	Developer = "developer",
	/**
	 * Owners are the most permissiable role, and can take destructive, irreversible actions like deleting team-owned apps or the team itself. Teams are limited to 1 owner.
	 */
	Owner = "owner",
	/**
	 * Read-only members can access information about a team and any team-owned apps. Some examples include getting the IDs of applications and exporting payout records.
	 */
	ReadOnly = "read_only",
}

/**
 * Team Member Role Enum is a zod enum that represents the team member role.
 */
export const TeamMemberRoleEnum = z.nativeEnum(TeamMemberRole);

/**
 * Team Member Structure
 *
 * Team members are users who are part of a team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-structure}
 */
export const TeamMemberStructure = z.object({
	membership_state: MembershipStateEnum,
	team_id: Snowflake,
	user: UserStructure.partial(),
	role: TeamMemberRoleEnum,
});

/**
 * Team Member Structure Infer is the inferred type of the TeamMemberStructure zod object.
 */
export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * Team Structure
 *
 * Teams are groups of developers (or other Discord users) who want to collaborate and share access to an app's configuration, management, and payout settings. Go team(s)!
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-object}
 */
export const TeamStructure = z.object({
	icon: z.string().optional(),
	id: Snowflake,
	members: z.array(TeamMemberStructure),
	name: z.string(),
	owner_user_id: Snowflake,
});

/**
 * Team Structure Infer is the inferred type of the TeamStructure zod object.
 */
export type TeamStructureInfer = z.infer<typeof TeamStructure>;
