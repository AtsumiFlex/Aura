import type { InviteStructureInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Query Get Invite
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export const QueryGetInvite = z.object({
	with_counts: z.boolean().optional(),
	with_expiration: z.boolean().optional(),
	guild_scheduled_event_id: Snowflake.nullable().optional(),
});

/**
 * Query Get Invite Infer
 *
 * Is the inferred type of the {@link QueryGetInvite} zod object.
 */
export type QueryGetInviteInfer = z.infer<typeof QueryGetInvite>;

/**
 * Get Invite
 *
 * Get information about an invite by its code.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
 */
export function GetInvite<T extends InviteStructureInfer>(inviteCode: string, query?: QueryGetInviteInfer): RestRequestOptions<T> {
	return {
		url: `/invites/${inviteCode}`,
		method: "GET",
		query: QueryGetInvite.parse(query),
	};
}

/**
 * Delete Invite
 *
 * Delete an invite by its code.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
 */
export function DeleteInvite(inviteCode: string): RestRequestOptions<void> {
	return {
		url: `/invites/${inviteCode}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": `delete invite code: ${inviteCode}` },
	};
}
