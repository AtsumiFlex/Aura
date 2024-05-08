import { EmojiStructure, GuildMemberStructure, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Message Reaction Remove Emoji Event Fields
 *
 * Sent when a bot removes all reactions for a given emoji from a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji}
 */
export const MessageReactionRemoveEmojiEventFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	message_id: Snowflake,
	emoji: EmojiStructure.partial(),
});

/**
 * Message Reaction Remove Emoji Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageReactionRemoveEmojiEventFields}
 */
export type MessageReactionRemoveEmojiEventFieldsInfer = z.infer<typeof MessageReactionRemoveEmojiEventFields>;

/**
 * Message Reaction Remove All Event Fields
 *
 * Sent when a bot removes all reactions from a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all}
 */
export const MessageReactionRemoveAllEventFields = z.object({
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
});

/**
 * Message Reaction Remove All Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageReactionRemoveAllEventFields}
 */
export type MessageReactionRemoveAllEventFieldsInfer = z.infer<typeof MessageReactionRemoveAllEventFields>;

/**
 * Message Reaction Remove Event Fields
 *
 * Sent when a bot removes a reaction from a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove}
 */
export const MessageReactionRemoveEventFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	emoji: EmojiStructure.partial(),
});

/**
 * Message Reaction Remove Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageReactionRemoveEventFields}
 */
export type MessageReactionRemoveEventFieldsInfer = z.infer<typeof MessageReactionRemoveEventFields>;

/**
 * Message Reaction Add Event Fields
 *
 * Sent when a bot adds a reaction to a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-add}
 */
export const MessageReactionAddEventFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	member: GuildMemberStructure.optional(),
	emoji: EmojiStructure.partial(),
	message_author_id: Snowflake.optional(),
});

/**
 * Message Reaction Add Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageReactionAddEventFields}
 */
export type MessageReactionAddEventFieldsInfer = z.infer<typeof MessageReactionAddEventFields>;

/**
 * Message Delete Bulk Event Fields
 *
 * Sent when multiple messages are deleted at once.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk}
 */
export const MessageDeleteBulkEventFields = z.object({
	ids: z.array(Snowflake),
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
});

/**
 * Message Delete Bulk Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageDeleteBulkEventFields}
 */
export type MessageDeleteBulkEventFieldsInfer = z.infer<typeof MessageDeleteBulkEventFields>;

/**
 * Message Delete Event Fields
 *
 * Sent when a message is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete}
 */
export const MessageDeleteEventFields = z.object({
	id: Snowflake,
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
});

/**
 * Message Delete Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageDeleteEventFields}
 */
export type MessageDeleteEventFieldsInfer = z.infer<typeof MessageDeleteEventFields>;

/**
 * Message Create Event Fields
 *
 * Sent when a message is created
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-create}
 */
export const MessageCreateEventFields = z.object({
	guild_id: Snowflake.optional(),
	member: GuildMemberStructure.partial().optional(),
	mentions: z.array(z.union([UserStructure, GuildMemberStructure.partial()])),
});

/**
 * Message Create Event Fields Infer
 *
 * Represents the inferred type of the {@link MessageCreateEventFields}
 */
export type MessageCreateEventFieldsInfer = z.infer<typeof MessageCreateEventFields>;
