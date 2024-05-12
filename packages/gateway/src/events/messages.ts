import { EmojiStructure, GuildMemberStructure, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Message Reaction Remove Emoji Event Fields
 *
 * Sent when a bot removes all instances of a given emoji from the reactions of a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji-message-reaction-remove-emoji-event-fields}
 */
export const MessageReactionRemoveEmojiEventFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * Emoji that was removed
	 */
	emoji: EmojiStructure.partial(),
});

/**
 * Message Reaction Remove Emoji Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageReactionRemoveEmojiEventFields} object.
 */
export type MessageReactionRemoveEmojiEventFieldsInfer = z.infer<typeof MessageReactionRemoveEmojiEventFields>;

/**
 * Message Reaction Remove All Event Fields
 *
 * Sent when a user explicitly removes all reactions from a message.
 *
 * @see {@link hhttps://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all-message-reaction-remove-all-event-fields}
 */
export const MessageReactionRemoveAllEventFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

/**
 * Message Reaction Remove All Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageReactionRemoveAllEventFields} object.
 */
export type MessageReactionRemoveAllEventFieldsInfer = z.infer<typeof MessageReactionRemoveAllEventFields>;

/**
 * Message Reaction Remove Event Fields
 *
 * Sent when a user removes a reaction from a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-message-reaction-remove-event-fields}
 */
export const MessageReactionRemoveEventFields = z.object({
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Emoji used to react
	 */
	emoji: EmojiStructure.partial(),
});

/**
 * Message Reaction Remove Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageReactionRemoveEventFields} object.
 */
export type MessageReactionRemoveEventFieldsInfer = z.infer<typeof MessageReactionRemoveEventFields>;

/**
 * Message Reaction Add Event Fields
 *
 * Sent when a user adds a reaction to a message.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-add-message-reaction-add-event-fields}
 */
export const MessageReactionAddEventFields = z.object({
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Member who reacted if this happened in a guild
	 */
	member: GuildMemberStructure.optional(),
	/**
	 * Emoji used to react
	 */
	emoji: EmojiStructure.partial(),
	/**
	 * ID of the user who authored the message which was reacted to
	 */
	message_author_id: Snowflake.optional(),
});

/**
 * Message Reaction Add Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageReactionAddEventFields} object.
 */
export type MessageReactionAddEventFieldsInfer = z.infer<typeof MessageReactionAddEventFields>;

/**
 * Message Delete Bulk Event Fields
 *
 * Sent when multiple messages are deleted at once.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk-message-delete-bulk-event-fields}
 */
export const MessageDeleteBulkEventFields = z.object({
	/**
	 * IDs of the messages
	 */
	ids: z.array(Snowflake),
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

/**
 * Message Delete Bulk Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageDeleteBulkEventFields} object.
 */
export type MessageDeleteBulkEventFieldsInfer = z.infer<typeof MessageDeleteBulkEventFields>;

/**
 * Message Delete Event Fields
 *
 * Sent when a message is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-message-delete-event-fields}
 */
export const MessageDeleteEventFields = z.object({
	/**
	 * ID of the message
	 */
	id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

/**
 * Message Delete Event Fields Infer
 *
 * Is used to infer the type of the {@link MessageDeleteEventFields} object.
 */
export type MessageDeleteEventFieldsInfer = z.infer<typeof MessageDeleteEventFields>;

/**
 * Message Create Extra Fields
 *
 * Sent when a message is created. The inner payload is a message object with the following extra fields.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-create-message-create-extra-fields}
 */
export const MessageCreateExtraFields = z.object({
	/**
	 * ID of the guild the message was sent in - unless it is an ephemeral message
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Member properties for this message's author. Missing for ephemeral messages and messages from webhooks
	 */
	member: GuildMemberStructure.optional(),
	/**
	 * Users specifically mentioned in the message
	 */
	mentions: z.array(z.union([UserStructure, GuildMemberStructure.partial()])),
});

/**
 * Message Create Extra Fields Infer
 *
 * Is used to infer the type of the {@link MessageCreateExtraFields} object.
 */
export type MessageCreateExtraFieldsInfer = z.infer<typeof MessageCreateExtraFields>;
