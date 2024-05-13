import { Integer, ISO8601Timestamp, Snowflake, ThreadMemberStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Channel Pins Update Event Fields
 *
 * Sent when a message is pinned or unpinned in a text channel. This is not sent when a pinned message is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channel-pins-update-channel-pins-update-event-fields}
 */
export const ChannelPinsUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * Time at which the most recent pinned message was pinned
	 */
	last_pin_timestamp: ISO8601Timestamp.optional(),
});

/**
 * Channel Pins Update Event Fields Infer
 *
 * Is used to infer the type of the {@link ChannelPinsUpdateEventFields} object.
 */
export type ChannelPinsUpdateEventFieldsInfer = z.infer<typeof ChannelPinsUpdateEventFields>;

/**
 * Thread Members Update Event Fields
 *
 * Sent when anyone is added to or removed from a thread. If the current user does not have the GUILD_MEMBERS Gateway Intent, then this event will only be sent if the current user was added to or removed from the thread.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields}
 */
export const ThreadMembersUpdateEventFields = z.object({
	/**
	 * ID of the thread
	 */
	id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Approximate number of members in the thread, capped at 50
	 */
	member_count: Integer,
	/**
	 * Users who were added to the thread
	 */
	added_members: z.array(ThreadMemberStructure).optional(),
	/**
	 * ID of the users who were removed from the thread
	 */
	removed_member_ids: z.array(Snowflake).optional(),
});

/**
 * Thread Members Update Event Fields Infer
 *
 * Is used to infer the type of the {@link ThreadMembersUpdateEventFields} object.
 */
export type ThreadMembersUpdateEventFieldsInfer = z.infer<typeof ThreadMembersUpdateEventFields>;

/**
 * Thread Member Update Event Extra Fields
 *
 * Sent when the thread member object for the current user is updated. The inner payload is a thread member object with an extra guild_id field. This event is documented for completeness, but unlikely to be used by most bots. For bots, this event largely is just a signal that you are a member of the thread. See the threads docs for more details.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-member-update-thread-member-update-event-extra-fields}
 */
export const ThreadMemberUpdateEventExtraFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Thread Member Update Event Extra Fields Infer
 *
 * Is used to infer the type of the {@link ThreadMemberUpdateEventExtraFields} object.
 */
export type ThreadMemberUpdateEventExtraFieldsInfer = z.infer<typeof ThreadMemberUpdateEventExtraFields>;

/**
 * Thread List Sync Event Fields
 *
 * Sent when the current user gains access to a channel.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields}
 */
export const ThreadListSyncEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Parent channel IDs whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
	 */
	channel_ids: z.array(Snowflake).optional(),
	/**
	 * All active threads in the given channels that the current user can access
	 */
	threads: z.array(ThreadMemberStructure),
	/**
	 * All thread member objects from the synced threads for the current user, indicating which threads the current user has been added to
	 */
	members: z.array(ThreadMemberStructure),
});

/**
 * Thread List Sync Event Fields Infer
 *
 * Is used to infer the type of the {@link ThreadListSyncEventFields} object.
 */
export type ThreadListSyncEventFieldsInfer = z.infer<typeof ThreadListSyncEventFields>;
