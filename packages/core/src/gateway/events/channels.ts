/**
 * @fileoverview Channels event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channels}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields}
 */
export type ThreadListSyncEventFields = {
	channel_ids: Snowflake[];
	guild_id: Snowflake;
	members: object; // TODO: ThreadMember object
	threads: object; // TODO: Thread object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-member-update-thread-member-update-event-extra-fields}
 */
export type ThreadMemberUpdateEventExtraFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields}
 */
export type ThreadMembersUpdateEventFields = {
	added_members?: object; // TODO: ThreadMember object
	guild_id: Snowflake;
	id: Snowflake;
	member_count: Integer;
	removed_member_ids?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channel-pins-update-channel-pins-update-event-fields}
 */
export type ChannelPinsUpdateEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	last_pin_timestamp?: ISO8601Timestamp | null;
};
