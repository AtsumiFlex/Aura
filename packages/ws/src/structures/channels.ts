import { ChannelStructure, Integer, ISO8601Timestamp, Snowflake, ThreadMemberStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Channel Pins Update Event Fields
 *
 * Sent when a channel's pinned messages are updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channel-pins-update}
 */
export const ChannelPinsUpdateEventFields = z.object({
	guild_id: Snowflake.optional(),
	channel_id: Snowflake,
	last_pin_timestamp: ISO8601Timestamp.nullable(),
});

/**
 * Channel Pins Update Event Fields Infer
 *
 * Represents the inferred type of the {@link ChannelPinsUpdateEventFields}
 */
export type ChannelPinsUpdateEventFieldsInfer = z.infer<typeof ChannelPinsUpdateEventFields>;

/**
 * Thread Members Update Event Fields
 *
 * Sent when a thread's member list is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update}
 */
export const ThreadMembersUpdateEventFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	member_count: Integer.min(50),
	added_members: z.array(ThreadMemberStructure),
	removed_member_ids: z.array(Snowflake),
});

/**
 * Thread Members Update Event Fields Infer
 *
 * Represents the inferred type of the {@link ThreadMembersUpdateEventFields}
 */
export type ThreadMembersUpdateEventFieldsInfer = z.infer<typeof ThreadMembersUpdateEventFields>;

/**
 * Thread Member Update Event Extra Fields
 *
 * Sent when the thread member object for the current user is updated. The inner payload is a thread member object with an extra guild_id field. This event is documented for completeness, but unlikely to be used by most bots. For bots, this event largely is just a signal that you are a member of the thread. See the threads docs for more details.
 */
export const ThreadMemberUpdateEventExtraFields = z.object({ guild_id: Snowflake });

/**
 * Thread Member Update Event Extra Fields Infer
 *
 * Represents the inferred type of the {@link ThreadMemberUpdateEventExtraFields}
 */
export type ThreadMemberUpdateEventExtraFieldsInfer = z.infer<typeof ThreadMemberUpdateEventExtraFields>;

/**
 * Thread List Sync Event Fields
 *
 * Sent when a bot is added to a thread
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync}
 */
export const ThreadListSyncEventFields = z.object({
	guild_id: Snowflake,
	channel_ids: z.array(Snowflake).optional(),
	threads: z.array(ChannelStructure),
	members: z.array(ThreadMemberStructure),
});

/**
 * Thread List Sync Event Fields Infer
 *
 * Represents the inferred type of the {@link ThreadListSyncEventFields}
 */
export type ThreadListSyncEventFieldsInfer = z.infer<typeof ThreadListSyncEventFields>;
