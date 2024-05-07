/**
 * Teams
 *
 * Teams are groups of developers (or other Discord users) who want to collaborate and share access to an app's configuration, management, and payout settings. Go team(s)!
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#teams}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { UserStructure } from "./users";

/**
 * Membership State
 *
 * The state of the member in the team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	Invited = 1,
	Accepted = 2,
}

/**
 * Membership State Enum
 *
 * Is a zod enum that represents the available {@link MembershipState}.
 */
export const MembershipStateEnum = z.nativeEnum(MembershipState);

/**
 * Team Member Role
 *
 * The role of the team member.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-role}
 */
export enum TeamMemberRole {
	Admin = "admin",
	Developer = "developer",
	Owner = "owner",
	ReadOnly = "read_only",
}

/**
 * Team Member Role Enum
 *
 * Is a zod enum that represents the available {@link TeamMemberRole}.
 */
export const TeamMemberRoleEnum = z.nativeEnum(TeamMemberRole);

/**
 * Team Member Structure
 *
 * Represents a team member.
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
 * Team Member Structure Infer
 *
 * The inferred type of {@link TeamMemberStructure}
 */
export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * Team Structure
 *
 * Represents a team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-structure}
 */
export const TeamStructure = z.object({
	icon: z.string().nullable(),
	id: Snowflake,
	members: z.array(TeamMemberStructure),
	name: z.string(),
	owner_user_id: Snowflake,
});

/**
 * Team Structure Infer
 *
 * The inferred type of {@link TeamStructure}
 */
export type TeamStructureInfer = z.infer<typeof TeamStructure>;
