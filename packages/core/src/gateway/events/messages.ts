/**
 * @fileoverview messages events
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#messages}
 */

import type { Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-create-message-create-extra-fields}
 */
export type MessageCreateExtraFields = {
	guild_id?: Snowflake;
	member?: object; // TODO: Partial Member object
	mentions?: object[]; // TODO: array of user objects, with an additional partial member field
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-message-delete-event-fields}
 */
export type MessageDeleteEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk-message-delete-bulk-event-fields}
 */
export type MessageDeleteBulkEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	ids: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-add-message-reaction-add-event-fields}
 */
export type MessageReactionAddEventFields = {
	channel_id: Snowflake;
	emoji: object; // TODO: Partial Emoji object
	guild_id?: Snowflake;
	member?: object;// TODO: Member object
	message_author_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-message-reaction-remove-event-fields}
 */
export type MessageReactionRemoveEventFields = {
	channel_id: Snowflake;
	emoji: object; // TODO: Partial Emoji object
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all-message-reaction-remove-all-event-fields}
 */
export type MessageReactionRemoveAllEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji-message-reaction-remove-emoji-event-fields}
 */
export type MessageReactionRemoveEmojiEventFields = {
	channel_id: Snowflake;
	emoji: object; // TODO: Partial Emoji object
	guild_id?: Snowflake;
	message_id: Snowflake;
};
