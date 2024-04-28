/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-resource}
 */

import type { Integer, Snowflake } from "../globals";
import type { PollCreateRequestStructure } from "./poll";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure}
 */
export type WebhookStructure = {
	application_id: Snowflake | null;
	avatar: string | null;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	id: Snowflake;
	name: string | null;
	source_channel?: object; // TODO: partial channel
	source_guild?: object; // TODO: partial guild
	token?: string;
	type: WebhookTypes;
	url?: string;
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookTypes {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook-json-params}
 */
export type JSONCreateWebhook = {
	avatar?: string;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params}
 */
export type JSONModifyWebhook = {
	avatar: string;
	channel_id: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-query-string-params}
 */
export type QueryExecuteWebhook = {
	thread_id?: Snowflake;
	wait?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params}
 */
export type JSONExecuteWebhook = {
	allowed_mentions?: object; // TODO: allowed mention object
	applied_tags?: Snowflake[];
	attachments?: object[];
	avatar_url?: string;
	components?: object[]; // TODO: component objects
	content?: string;
	embeds?: object[]; // TODO: embed objects
	files?: object[];
	flags?: Integer; // TODO: Message flags
	payload_json?: string;
	poll?: PollCreateRequestStructure;
	thread_name?: string;
	tts?: boolean;
	username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-query-string-params}
 */
export type QueryExecuteSlackCompatibleWebhook = {
	thread_id?: Snowflake;
	wait?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-query-string-params}
 */
export type QueryExecuteGitHubCompatibleWebhook = {
	thread_id?: Snowflake;
	wait?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params}
 */
export type QueryGetWebhookMessage = {
	thread_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-string-params}
 */
export type QueryEditWebhookMessage = {
	thread_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params}
 */
export type JSONEditWebhookMessage = {
	allowed_mentions?: object; // TODO: allowed mention object
	attachments?: object[];
	components?: object[]; // TODO: component objects
	content?: string;
	embeds?: object[]; // TODO: embed objects
	files?: object[];
	payload_json?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params}
 */
export type QueryDeleteWebhookMessage = {
	thread_id?: Snowflake;
};
