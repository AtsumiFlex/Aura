import type { InviteStructureInfer } from "@aurajs/core";
import { BitwisePermissionFlags, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Get Invite
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export const QueryGetInvite = z.object({
	/**
	 * Whether the invite should contain approximate member counts
	 */
	with_counts: z.boolean().optional(),
	/**
	 * Whether the invite should contain the expiration date
	 */
	with_expiration: z.boolean().optional(),
	/**
	 * The guild scheduled event to include with the invite
	 */
	guild_scheduled_event_id: Snowflake.optional(),
});

/**
 * Query Get Invite Infer
 *
 * Is used to infer the type of the {@link QueryGetInvite} object.
 */
export type QueryGetInviteInfer = z.infer<typeof QueryGetInvite>;

/**
 * Get Invite
 *
 * Returns an invite object for the given code.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
 */
export function GetInvite(code: string, query?: QueryGetInviteInfer): RestMakeRequestOptions<InviteStructureInfer> {
	return {
		method: "GET",
		path: `/invites/${code}`,
		query: QueryGetInvite.parse(query),
	};
}

/**
 * Delete Invite
 *
 * Delete an invite. Requires the MANAGE_CHANNELS permission on the channel this invite belongs to, or MANAGE_GUILD to remove any invite across the guild. Returns an invite object on success. Fires an Invite Delete Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
 */
export function DeleteInvite(code: string, reason: string): RestMakeRequestOptions<InviteStructureInfer> {
	return {
		method: "DELETE",
		path: `/invites/${code}`,
		permissions: [BitwisePermissionFlags.ManageChannels, BitwisePermissionFlags.ManageGuild],
		headers: { "X-Audit-Log-Reason": reason },
	};
}
