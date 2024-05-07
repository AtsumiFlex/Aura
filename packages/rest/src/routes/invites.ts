import type { InviteStructureInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Get Invite
 *
 * Query parameters for the GetInvite endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export const QueryGetInvite = z.object({
	with_counts: z.boolean().optional(),
	with_expiration: z.boolean().optional(),
	guild_scheduled_event_id: Snowflake.optional(),
});

/**
 * Query Get Invite Infer
 *
 * The inferred type of {@link QueryGetInvite}
 */
export type QueryGetInviteInfer = z.infer<typeof QueryGetInvite>;

/**
 * Get Invite
 *
 * Returns an invite object for the given code.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
 */
export function GetInvite<T extends InviteStructureInfer>(inviteCode: string, query?: QueryGetInviteInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/invites/${inviteCode}`,
		query: QueryGetInvite.parse(query),
	};
}

/**
 * Delete Invite
 *
 * Delete an invite. Requires the `MANAGE_CHANNELS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
 */
export function DeleteInvite<T extends InviteStructureInfer>(inviteCode: string, reason: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/invites/${inviteCode}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
