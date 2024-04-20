// https://discord.com/developers/docs/topics/gateway-events#invites

import type { Snowflake } from "@aurajs/core";

// https://discord.com/developers/docs/topics/gateway-events#invite-create-invite-create-event-fields
export type InviteCreateEventFields = {
	channel_id: Snowflake;
	code: string;
	// TODO: Invite Code
	created_at: string;
	guild_id?: Snowflake;
	inviter?: object;
	// TODO: User object
	max_age: number;
	max_uses: number;
	target_application?: object;
	target_type?: number;
	// TODO: Invite Type Of Target
	target_user?: object;
	// TODO: User object
	temporary: boolean;
	uses: number;
};

// https://discord.com/developers/docs/topics/gateway-events#invite-delete-invite-delete-event-fields
export type InviteDeleteEventFields = {
	channel_id: Snowflake;
	code: string;
	guild_id?: Snowflake;
};
