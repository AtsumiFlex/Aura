import { Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Message Poll Vote Remove Fields
 *
 * Sent when a user removes their vote on a poll. If the poll allows for multiple selections, one event will be sent per answer.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields}
 */
export const MessagePollVoteRemoveFields = z.object({
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
	 * ID of the answer
	 */
	answer_id: Integer,
});

/**
 * Message Poll Vote Remove Fields Infer
 *
 * Is used to infer the type of the {@link MessagePollVoteRemoveFields} object.
 */
export type MessagePollVoteRemoveFieldsInfer = z.infer<typeof MessagePollVoteRemoveFields>;

/**
 * Message Poll Vote Add Fields
 *
 * Sent when a user votes on a poll. If the poll allows multiple selection, one event will be sent per answer.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 */
export const MessagePollVoteAddFields = z.object({
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
	 * ID of the answer
	 */
	answer_id: Integer,
});

/**
 * Message Poll Vote Add Fields Infer
 *
 * Is used to infer the type of the {@link MessagePollVoteAddFields} object.
 */
export type MessagePollVoteAddFieldsInfer = z.infer<typeof MessagePollVoteAddFields>;
