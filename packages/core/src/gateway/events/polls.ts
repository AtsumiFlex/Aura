/**
 * Polls Gateway
 *
 * This class is responsible for polling the Discord Gateway for events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#polls}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../../globals/globals";

/**
 * Message Poll Vote Remove Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#message-poll-vote-remove}
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
 */
export type MessagePollVoteRemoveFieldsInfer = z.infer<typeof MessagePollVoteRemoveFields>;

/**
 * Message Poll Vote Add Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#message-poll-vote-add}
 */
export const MessagePollVoteAddFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});

/**
 * Message Poll Vote Add Structure Infer
 */
export type MessagePollVoteAddFieldsInfer = z.infer<typeof MessagePollVoteAddFields>;
