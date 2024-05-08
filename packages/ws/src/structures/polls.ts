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
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});

/**
 * Message Poll Vote Remove Fields Infer
 *
 * Represents the inferred type of the {@link MessagePollVoteRemoveFields}
 */
export type MessagePollVoteRemoveFieldsInfer = z.infer<typeof MessagePollVoteRemoveFields>;

/**
 * Message Poll Vote Add Fields
 *
 * Sent when a user votes on a poll.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 */
export const MessagePollVoteAddFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});

/**
 * Message Poll Vote Add Fields Infer
 *
 * Represents the inferred type of the {@link MessagePollVoteAddFields}
 */
export type MessagePollVoteAddFieldsInfer = z.infer<typeof MessagePollVoteAddFields>;
