/**
 * Channels Gateway
 *
 * This class is responsible for handling channel events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#channel}
 */

import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../../../core/src/globals/globals";
import { ThreadMemberStructure } from "../../../core/src/structures/channels";

/**
 * Channel Pins Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#channel-pins-update}
 */
export const ChannelPinsUpdateEventFields = z.object({
	guild_id: Snowflake.optional(),
	channel_id: Snowflake,
	last_pin_timestamp: ISO8601.optional().nullable(),
});

/**
 * Channel Pins Update Event Fields Infer
 *
 * Infer the type of a {@link ChannelPinsUpdateEventFields} object.
 */
export type ChannelPinsUpdateEventFieldsInfer = z.infer<typeof ChannelPinsUpdateEventFields>;

/**
 * Thread Members Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#thread-members-update}
 */
export const ThreadMembersUpdateEventFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	member_count: Integer,
	added_members: z.array(ThreadMemberStructure),
	removed_member_ids: z.array(Snowflake),
});

/**
 * Thread Members Update Event Fields Infer
 *
 * Infer the type of a {@link ThreadMembersUpdateEventFields} object.
 */
export type ThreadMembersUpdateEventFieldsInfer = z.infer<typeof ThreadMembersUpdateEventFields>;

/**
 * Thread Member Update Event Extra Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#thread-member-update}
 */
export const ThreadMemberUpdateEventExtraFields = z.object({ guild_id: Snowflake });

/**
 * Thread Member Update Event Extra Fields Infer
 *
 * Infer the type of a {@link ThreadMemberUpdateEventExtraFields} object.
 */
export type ThreadMemberUpdateEventExtraFieldsInfer = z.infer<typeof ThreadMemberUpdateEventExtraFields>;

/**
 * Thread List Sync Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#thread-list-sync}
 */
export const ThreadListSyncEventFields = z.object({
	guild_id: Snowflake,
	channel_ids: z.array(Snowflake).optional(),
	threads: z.array(ThreadMemberStructure),
	members: z.array(ThreadMemberStructure),
});

/**
 * Thread List Sync Event Fields Infer
 *
 * Infer the type of a {@link ThreadListSyncEventFields} object.
 */
export type ThreadListSyncEventFieldsInfer = z.infer<typeof ThreadListSyncEventFields>;
