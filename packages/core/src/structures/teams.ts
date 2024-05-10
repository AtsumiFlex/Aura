/**
 * Teams
 *
 * Teams are groups of developers (or other Discord users) who want to collaborate and share access to an app's configuration, management, and payout settings. Go team(s)!
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#teams}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { UserStructure } from "./users";

/**
 * Membership State Enum
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	/**
	 * The user has not yet accepted the invitation to join the team.
	 */
	Invited = 1,
	/**
	 * The user has accepted the invitation to join the team.
	 */
	Accepted = 2,
}

/**
 * Membership State Enum
 *
 * Is a zod enum that represents the available {@link MembershipState}.
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
 * Team Member Role Enum
 *
 * Is a zod enum that represents the available {@link TeamMemberRole}.
 */
export const TeamMemberRoleEnum = z.nativeEnum(TeamMemberRole);

/**
 * Team Member Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export const TeamMemberStructure = z.object({
	/**
	 * User's membership state on the team
	 *
	 * @see {@link MembershipState}
	 */
	membership_state: MembershipStateEnum,
	/**
	 * ID of the parent team of which they are a member
	 */
	team_id: Integer,
	/**
	 * Avatar, discriminator, ID, and username of the user
	 */
	user: UserStructure.partial(),
	/**
	 * Role of the team member
	 *
	 * @see {@link TeamMemberRole}
	 */
	role: TeamMemberRoleEnum,
});

/**
 * Team Member Structure Infer
 *
 * The inferred zod object from {@link TeamMemberStructure}
 */
export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * Team Member Object
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export const TeamMemberObject = z.object({
	/**
	 * Hash of the image of the team's icon
	 */
	icon: z.string().nullable(),
	/**
	 * Unique ID of the team
	 */
	id: Snowflake,
	/**
	 * Members of the team
	 *
	 * @see {@link TeamMemberStructure}
	 */
	members: z.array(TeamMemberStructure),
	/**
	 * Name of the team
	 */
	name: z.string(),
	/**
	 * User ID of the current team owner
	 */
	owner_user_id: Snowflake,
});

/**
 * Team Member Object Infer
 *
 * The inferred zod object from {@link TeamMemberObject}
 */
export type TeamMemberObjectInfer = z.infer<typeof TeamMemberObject>;
