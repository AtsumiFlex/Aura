/**
 * @fileoverview Invites event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invites}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-create-invite-create-event-fields}
 */
export type InviteCreateEventFields = {
	channel_id: Snowflake;
	code: string;
	created_at: ISO8601Timestamp;
	guild_id?: Snowflake;
	inviter?: object; // TODO: User object
	max_age: Integer;
	max_uses: Integer;
	target_application?: object; // TODO: Application object
	target_type?: number; // TODO: InviteTargetType
	target_user?: object; // TODO: User object
	temporary: boolean;
	uses: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-delete-invite-delete-event-fields}
 */
export type InviteDeleteEventFields = {
	channel_id: Snowflake;
	code: string;
	guild_id?: Snowflake;
};
