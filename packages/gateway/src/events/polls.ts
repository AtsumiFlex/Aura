/**
 * @fileoverview This file defines the types for the poll events in the application.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#polls}
 */

import type { Integer, Snowflake } from "@aurajs/core";

/**
 * @typedef {object} MessagePollVoteAddFields
 * @description Type for the fields of the MessagePollVoteAdd event.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 * @property
 */
export type MessagePollVoteAddFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @typedef {object} MessagePollVoteRemoveFields
 * @description Type for the fields of the MessagePollVoteRemove event.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields}
 * @property
 */
export type MessagePollVoteRemoveFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};
