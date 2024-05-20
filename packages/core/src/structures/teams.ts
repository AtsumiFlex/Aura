import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Enum representing membership states for a team member.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	/**
	 * The user has been invited to the team.
	 */
	Invited = 1,
	/**
	 * The user has accepted the invitation to the team.
	 */
	Accepted,
}

/**
 * Zod schema for validating {@link MembershipState}.
 *
 * @example
 * ```typescript
 * MembershipStateEnum.parse(MembershipState.Invited); // Valid
 * MembershipStateEnum.parse(3); // Throws an error
 * ```
 */
export const MembershipStateEnum = z.nativeEnum(MembershipState);

/**
 * Schema for validating the structure of a team member.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export const TeamMemberStructure = z.object({
	/**
	 * User's membership state on the team.
	 *
	 * @example
	 * ```typescript
	 * const membershipState = MembershipState.Accepted;
	 * ```
	 */
	membership_state: MembershipStateEnum,
	/**
	 * ID of the parent team of which they are a member.
	 *
	 * @example
	 * ```typescript
	 * const teamId = "123456789012345678";
	 * ```
	 */
	team_id: Snowflake,
	/**
	 * Avatar, discriminator, ID, and username of the user.
	 *
	 * @example
	 * ```typescript
	 * const user = {
	 *   id: "987654321098765432",
	 *   username: "username",
	 *   discriminator: "1234",
	 *   avatar: "avatarHash"
	 * };
	 * ```
	 */
	user: UserStructure.partial(),
	/**
	 * Role of the team member.
	 *
	 * @example
	 * ```typescript
	 * const role = "Member";
	 * ```
	 */
	role: z.string(),
});

/**
 * The type of the {@link TeamMemberStructure} schema.
 */
export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * Schema for validating the structure of a team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-object}
 */
export const TeamStructure = z.object({
	/**
	 * Hash of the image of the team's icon.
	 *
	 * @example
	 * ```typescript
	 * const iconHash = "iconHash";
	 * ```
	 */
	icon: z.string().nullable(),
	/**
	 * Unique ID of the team.
	 *
	 * @example
	 * ```typescript
	 * const teamId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * Members of the team.
	 *
	 * @example
	 * ```typescript
	 * const members = [
	 *   {
	 *     membership_state: MembershipState.Accepted,
	 *     team_id: "123456789012345678",
	 *     user: { id: "987654321098765432", username: "username" },
	 *     role: "Member"
	 *   }
	 * ];
	 * ```
	 */
	members: z.array(TeamMemberStructure),
	/**
	 * Name of the team.
	 *
	 * @example
	 * ```typescript
	 * const name = "Team Name";
	 * ```
	 */
	name: z.string(),
	/**
	 * User ID of the current team owner.
	 *
	 * @example
	 * ```typescript
	 * const ownerUserId = "987654321098765432";
	 * ```
	 */
	owner_user_id: Snowflake,
});

/**
 * The type of the {@link TeamStructure} schema.
 */
export type TeamStructureInfer = z.infer<typeof TeamStructure>;
