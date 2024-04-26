import type { Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export type JSONGetInvite = {
	guild_scheduled_event_id?: Snowflake;
	with_counts?: boolean;
	with_expiration?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
 */
export function GetInvite(inviteCode: string, query?: JSONGetInvite) {
	return {
		method: "GET",
		path: `/invites/${inviteCode}`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
 */
export function DeleteInvite(inviteCode: string) {
	return {
		method: "DELETE",
		path: `/invites/${inviteCode}`,
	};
}
