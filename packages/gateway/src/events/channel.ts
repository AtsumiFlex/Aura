// https://discord.com/developers/docs/topics/gateway-events#channels

import type { Snowflake } from "@aurajs/core";

// https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields
export type ThreadListSyncEventFields = {
	channel_ids?: Snowflake[];
	guild_id: Snowflake;
	members: object[];
	// TODO: Thread Member Object
	threads: object[];
	// TODO: Channel Object
};

// https://discord.com/developers/docs/topics/gateway-events#thread-member-update-thread-member-update-event-extra-fields
export type ThreadMemberUpdateEventExtraFields = {
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields
export type ThreadMembersUpdateEventFields = {
	added_members?: object[];
	// TODO: Thread Member Object
	guild_id: Snowflake;
	id: Snowflake;
	member_count: number;
	removed_member_ids?: Snowflake[];
};

// https://discord.com/developers/docs/topics/gateway-events#channel-pins-update-channel-pins-update-event-fields
export type ChannelPinsUpdateEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	last_pin_timestamp?: string;
};
