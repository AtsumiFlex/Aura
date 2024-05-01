import { z } from "zod";
import { Snowflake } from "../globals";
import { UserStructure } from "../structure/user";

export enum MembershipState {
	Invited = 1,
	Accepted = 2,
}

export const MembershipStateEnum = z.nativeEnum(MembershipState);

export const TeamMemberStructure = z.object({
	membership_state: MembershipStateEnum,
	team_id: Snowflake,
	user: UserStructure.partial(),
	role: z.string(),
});
export type TeamMemberInfer = z.infer<typeof TeamMemberStructure>;

export const TeamStructure = z.object({
	icon: z.string().optional(),
	id: Snowflake,
	members: z.array(TeamMemberStructure),
	name: z.string(),
	owner_user_id: Snowflake,
});
export type TeamInfer = z.infer<typeof TeamStructure>;

export enum TeamMemberRole {
	Admin = "admin",
	Developer = "developer",
	Owner = "owner",
	ReadOnly = "read_only",
}

export const TeamMemberRoleEnum = z.nativeEnum(TeamMemberRole);
