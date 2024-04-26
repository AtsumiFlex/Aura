/**
 * @fileoverview Polls event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#polls}
 */

import type { Integer, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 */
export type MessagePollVoteAddFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields}
 */
export type MessagePollVoteRemoveFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};
