import type { Integer, Snowflake } from "../../base/base";
import type { PollCreateRequestStructure } from "../types/poll";

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook-json-params}
 */
export type JSONCreateWebhook = {
	avatar: string | null;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
 */
export function CreateWebhook(channelId: Snowflake, json: JSONCreateWebhook) {
	return {
		method: "POST",
		path: `/channels/${channelId}/webhooks`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-channel-webhooks}
 */
export function GetChannelWebhooks(channelId: Snowflake) {
	return {
		method: "GET",
		path: `/channels/${channelId}/webhooks`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
 */
export function GetGuildWebhooks(guildId: Snowflake) {
	return {
		method: "GET",
		path: `/guilds/${guildId}/webhooks`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
 */
export function GetWebhook(webhookId: Snowflake) {
	return {
		method: "GET",
		path: `/webhooks/${webhookId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
 */
export function GetWebhookWithToken(webhookId: Snowflake, webhookToken: string) {
	return {
		method: "GET",
		path: `/webhooks/${webhookId}/${webhookToken}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params}
 */
export type JSONModifyWebhook = {
	avatar: string | null;
	channel_id: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
 */
export function ModifyWebhook(webhookId: Snowflake, json: JSONModifyWebhook) {
	return {
		method: "PATCH",
		path: `/webhooks/${webhookId}`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
 */
export function ModifyWebhookWithToken(webhookId: Snowflake, webhookToken: string, json: JSONModifyWebhook) {
	return {
		method: "PATCH",
		path: `/webhooks/${webhookId}/${webhookToken}`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
 */
export function DeleteWebhook(webhookId: Snowflake) {
	return {
		method: "DELETE",
		path: `/webhooks/${webhookId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
 */
export function DeleteWebhookWithToken(webhookId: Snowflake, webhookToken: string) {
	return {
		method: "DELETE",
		path: `/webhooks/${webhookId}/${webhookToken}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params}
 */
export type FormExecuteWebhook = {
	allowed_mentions: object; // TODO: allowed mention object
	applied_name: string;
	applied_tags: Snowflake[];
	attachments: object[]; // TODO: array of partial attachment objects
	avatar_url: string;
	components: object[]; // TODO: array of component objects
	content: string;
	embeds: object[]; // TODO: array of up to 10 embed objects
	files: object[];
	flags: Integer; // TODO: message flags combined as a bitfield
	payload_json: string;
	poll: PollCreateRequestStructure;
	thead_name: string;
	tts: boolean;
	username: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-query-string-params}
 */
export type JSONExecuteWebhook = {
	thread_id: Snowflake;
	wait: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
 */
export function ExecuteWebhook(webhookId: Snowflake, webhookToken: string, json: FormExecuteWebhook, query?: JSONExecuteWebhook) {
	return {
		method: "POST",
		path: `/webhooks/${webhookId}/${webhookToken}`,
		body: json,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-query-string-params}
 */
export type JSONExecuteSlackCompatibleWebhook = {
	thread_id: Snowflake;
	wait: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook}
 */
export function ExecuteSlackCompatibleWebhook(webhookId: Snowflake, webhookToken: string, query?: JSONExecuteSlackCompatibleWebhook) {
	return {
		method: "POST",
		path: `/webhooks/${webhookId}/${webhookToken}/slack`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-query-string-params}
 */
export type JSONExecuteGitHubCompatibleWebhook = {
	thread_id: Snowflake;
	wait: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook}
 */
export function ExecuteGitHubCompatibleWebhook(webhookId: Snowflake, webhookToken: string, query?: JSONExecuteGitHubCompatibleWebhook) {
	return {
		method: "POST",
		path: `/webhooks/${webhookId}/${webhookToken}/github`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params}
 */
export type JSONGetWebhookMessage = {
	thread_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
 */
export function GetWebhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake, query?: JSONGetWebhookMessage) {
	return {
		method: "GET",
		path: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params}
 */
export type JSONEditWebhookMessage = {
	allowed_mentions: object; // TODO: allowed mention object
	attachments: object[]; // TODO: array of partial attachment objects
	components: object[]; // TODO: array of component objects
	content: string;
	embeds: object[]; // TODO: array of up to 10 embed objects
	files: object[];
	payload_json: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-string-params}
 */
export type JSONEditWebhookMessageQuery = {
	thread_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
 */
export function EditWebhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake, json: JSONEditWebhookMessage, query?: JSONEditWebhookMessageQuery) {
	return {
		method: "PATCH",
		path: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		body: json,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params}
 */
export type JSONDeleteWebhookMessage = {
	thread_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
 */
export function DeleteWebhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake, query: JSONDeleteWebhookMessage) {
	return {
		method: "DELETE",
		path: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		query,
	};
}
