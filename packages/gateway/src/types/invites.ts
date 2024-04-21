// https://discord.com/developers/docs/topics/gateway-events#invites

import type { InviteStructure, InviteTargetType, Snowflake, UserStructure } from "@aurajs/types";

// https://discord.com/developers/docs/topics/gateway-events#invite-create-invite-create-event-fields
export type InviteCreateEventFields = {
	channel_id: Snowflake;
	code: InviteStructure["code"];
	created_at: string;
	guild_id?: Snowflake;
	inviter?: UserStructure;
	max_age: number;
	max_uses: number;
	target_application?: object;
	target_type?: InviteTargetType;
	target_user?: UserStructure;
	temporary: boolean;
	uses: number;
};

// https://discord.com/developers/docs/topics/gateway-events#invite-delete-invite-delete-event-fields
export type InviteDeleteEventFields = {
	channel_id: Snowflake;
	code: string;
	guild_id?: Snowflake;
};
