import type { MessageStructureInfer, SnowflakeInfer, WebhookStructureInfer } from "@aurajs/core";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	EmbedStructure,
	MessageComponentsStructure,
	MessageFlagsEnum,
	PollCreateRequestStructure,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * JSON Create Webhook
 *
 * JSON body for the Create Webhook endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook-json-params}
 */
export const JSONCreateWebhook = z.object({
	name: z.string().min(1).max(80),
	avatar: z.string().optional(),
});

/**
 * JSON Create Webhook Infer
 *
 * The inferred type of {@link JSONCreateWebhook}
 */
export type JSONCreateWebhookInfer = z.infer<typeof JSONCreateWebhook>;

/**
 * Create Webhook
 *
 * Create a new webhook.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
 */
export function CreateWebhook<T extends WebhookStructureInfer>(channelId: SnowflakeInfer, reason: string, json: JSONCreateWebhookInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/channels/${channelId}/webhooks`,
		body: JSONCreateWebhook.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Channel Webhooks
 *
 * Get all webhooks in a channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-webhooks}
 */
export function GetChannelWebhooks<T extends WebhookStructureInfer>(channelId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/channels/${channelId}/webhooks`,
	};
}

/**
 * Get Guild Webhooks
 *
 * Get all webhooks in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
 */
export function GetGuildWebhooks<T extends WebhookStructureInfer>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/webhooks`,
	};
}

/**
 * Get Webhook
 *
 * Get a webhook by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
 */
export function GetWebhook<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/webhooks/${webhookId}`,
	};
}

/**
 * Get Webhook with Token
 *
 * Get a webhook by its ID and token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
 */
export function GetWebhookWithToken<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/webhooks/${webhookId}/${webhookToken}`,
	};
}

/**
 * JSON Modify Webhook
 *
 * JSON body for the Modify Webhook endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params}
 */
export const JSONModifyWebhook = z.object({
	name: z.string().min(2).max(80).optional(),
	avatar: z.string().optional(),
	channel_id: z.string().optional(),
});

/**
 * JSON Modify Webhook Infer
 *
 * The inferred type of {@link JSONModifyWebhook}
 */
export type JSONModifyWebhookInfer = z.infer<typeof JSONModifyWebhook>;

/**
 * Modify Webhook
 *
 * Modify a webhook by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
 */
export function ModifyWebhook<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, reason: string, json: JSONModifyWebhookInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/webhooks/${webhookId}`,
		body: JSONModifyWebhook.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Modify Webhook with Token
 *
 * Modify a webhook by its ID and token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
 */
export function ModifyWebhookWithToken<T extends Omit<WebhookStructureInfer, "user">>(webhookId: SnowflakeInfer, webhookToken: string, json: Omit<JSONModifyWebhookInfer, "channel_id">): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/webhooks/${webhookId}/${webhookToken}`,
		body: JSONModifyWebhook.parse(json),
	};
}

/**
 * Delete Webhook
 *
 * Delete a webhook by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
 */
export function DeleteWebhook<T extends void>(webhookId: SnowflakeInfer, reason: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/webhooks/${webhookId}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Webhook with Token
 *
 * Delete a webhook by its ID and token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
 */
export function DeleteWebhookWithToken<T extends void>(webhookId: SnowflakeInfer, webhookToken: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/webhooks/${webhookId}/${webhookToken}`,
	};
}

/**
 * Query Execute Webhook
 *
 * Query parameters for the Execute Webhook endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-query-params}
 */
export const QueryExecuteWebhook = z.object({
	wait: z.boolean().default(false).optional(),
	thread_id: Snowflake.optional(),
});

/**
 * Query Execute Webhook Infer
 *
 * The inferred type of {@link QueryExecuteWebhook}
 */
export type QueryExecuteWebhookInfer = z.infer<typeof QueryExecuteWebhook>;

/**
 * JSON/Form Execute Webhook
 *
 * JSON body or form data for the Execute Webhook endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params}
 */
export const JSONFormExecuteWebhook = z.object({
	content: z.string().max(2_000).optional(),
	username: z.string().optional(),
	avatar_url: z.string().optional(),
	tts: z.boolean().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.string().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
	flags: z.union([MessageFlagsEnum, z.bigint()]).optional(),
	thread_name: z.string().optional(),
	applied_tags: z.array(Snowflake).optional(),
	poll: PollCreateRequestStructure.optional(),
});

/**
 * JSON/Form Execute Webhook Infer
 *
 * The inferred type of {@link JSONFormExecuteWebhook}
 */
export type JSONFormExecuteWebhookInfer = z.infer<typeof JSONFormExecuteWebhook>;

/**
 * Execute Webhook
 *
 * Execute a webhook by its ID and token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
 */
export function ExecuteWebhook<T extends MessageStructureInfer | void>(webhookId: SnowflakeInfer, webhookToken: string, json: JSONFormExecuteWebhookInfer, query?: QueryExecuteWebhookInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/webhooks/${webhookId}/${webhookToken}`,
		query: QueryExecuteWebhook.parse(query),
		body: JSONFormExecuteWebhook.parse(json),
		headers: { "Content-Type": "multipart/form-data" },
	};
}

/**
 * Query Get Webhook Message
 *
 * Query parameters for the Get Webhook Message endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-params}
 */
export const QueryGetWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Get Webhook Message Infer
 *
 * The inferred type of {@link QueryGetWebhookMessage}
 */
export type QueryGetWebhookMessageInfer = z.infer<typeof QueryGetWebhookMessage>;

/**
 * Get Webhook Message
 *
 * Get a previously-sent webhook message by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
 */
export function GetWebhookMessage<T extends MessageStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string, messageId: string, query?: QueryGetWebhookMessageInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
	};
}

/**
 * Query Edit Webhook Message
 *
 * Query parameters for the Edit Webhook Message endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-params}
 */
export const QueryEditWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Edit Webhook Message Infer
 *
 * The inferred type of {@link QueryEditWebhookMessage}
 */
export type QueryEditWebhookMessageInfer = z.infer<typeof QueryEditWebhookMessage>;

/**
 * JSON Edit Webhook Message
 *
 * JSON body for the Edit Webhook Message endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-json-params}
 */
export const JSONEditWebhookMessage = z.object({
	content: z.string().max(2_000).optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.string().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
});

/**
 * JSON Edit Webhook Message Infer
 *
 * The inferred type of {@link JSONEditWebhookMessage}
 */
export type JSONEditWebhookMessageInfer = z.infer<typeof JSONEditWebhookMessage>;

/**
 * Edit Webhook Message
 *
 * Edit a previously-sent webhook message by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
 */
export function EditWebhookMessage<T extends MessageStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string, messageId: string, json: JSONEditWebhookMessageInfer, query?: QueryEditWebhookMessageInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		query: QueryEditWebhookMessage.parse(query),
		body: JSONEditWebhookMessage.parse(json),
		headers: { "Content-Type": "multipart/form-data" },
	};
}

/**
 * Query Delete Webhook Message
 *
 * Query parameters for the Delete Webhook Message endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-params}
 */
export const QueryDeleteWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Delete Webhook Message Infer
 *
 * The inferred type of {@link QueryDeleteWebhookMessage}
 */
export type QueryDeleteWebhookMessageInfer = z.infer<typeof QueryDeleteWebhookMessage>;

/**
 * Delete Webhook Message
 *
 * Delete a previously-sent webhook message by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
 */
export function DeleteWebhookMessage<T extends void>(webhookId: SnowflakeInfer, webhookToken: string, messageId: string, query?: QueryDeleteWebhookMessageInfer): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		query: QueryDeleteWebhookMessage.parse(query),
	};
}
