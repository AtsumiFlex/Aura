import type { SnowflakeInfer, WebhookStructureInfer } from "@aurajs/core";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	EmbedStructure,
	MessageComponentsStructure,
	MessageFlagsEnum,
	PollCreateRequestObjectStructure,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * JSON Create Webhook
 *
 * Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission. Fires a Webhooks Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook-json-params}
 */
export const JSONCreateWebhook = z.object({
	name: z.string().min(1).max(80),
	avatar: z.string().optional().nullable(),
});

/**
 * JSON Create Webhook Infer
 *
 * The inferred type of the {@link JSONCreateWebhook} zod object.
 */
export type JSONCreateWebhookInfer = z.infer<typeof JSONCreateWebhook>;

/**
 * Create Webhook
 *
 * Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission. Fires a Webhooks Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
 */
export function CreateWebhook<T extends WebhookStructureInfer>(channelId: SnowflakeInfer, json: JSONCreateWebhookInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/webhooks`,
		method: "POST",
		body: JSONCreateWebhook.parse(json),
	};
}

/**
 * Get Channel Webhooks
 *
 * Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-channel-webhooks}
 */
export function GetChannelWebhooks<T extends WebhookStructureInfer>(channelId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/webhooks`,
		method: "GET",
	};
}

/**
 * Get Guild Webhooks
 *
 * Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
 */
export function GetGuildWebhooks<T extends WebhookStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/webhooks`,
		method: "GET",
	};
}

/**
 * Get Webhook
 *
 * Returns the new webhook object for the given id.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
 */
export function GetWebhook<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}`,
		method: "GET",
	};
}

/**
 * Get Webhook with Token
 *
 * Same as {@link GetWebhook}, except this call does not require authentication and returns the webhook with the token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
 */
export function GetWebhookWithToken<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}`,
		method: "GET",
	};
}

/**
 * JSON Modify Webhook
 *
 * Modify a webhook. Requires the MANAGE_WEBHOOKS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params}
 */
export const JSONModifyWebhook = z.object({
	name: z.string(),
	avatar: z.string().nullable(),
	channel_id: Snowflake,
});

/**
 * JSON Modify Webhook Infer
 *
 * The inferred type of the {@link JSONModifyWebhook} zod object.
 */
export type JSONModifyWebhookInfer = z.infer<typeof JSONModifyWebhook>;

/**
 * Modify Webhook
 *
 * Modify a webhook. Requires the MANAGE_WEBHOOKS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
 */
export function ModifyWebhook<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, json: JSONModifyWebhookInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}`,
		method: "PATCH",
		body: JSONModifyWebhook.parse(json),
	};
}

/**
 * Modify Webhook with Token
 *
 * Same as {@link ModifyWebhook}, except this call does not require authentication, and returns the updated webhook object.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
 */
export function ModifyWebhookWithToken<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string, json: JSONModifyWebhookInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}`,
		method: "PATCH",
		body: JSONModifyWebhook.parse(json),
	};
}

/**
 * Delete Webhook
 *
 * Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
 */
export function DeleteWebhook(webhookId: SnowflakeInfer): RestRequestOptions<null> {
	return {
		url: `/webhooks/${webhookId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": "delete webhook" },
	};
}

/**
 * Delete Webhook with Token
 *
 * Same as {@link DeleteWebhook}, except this call does not require authentication, and returns no response.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
 */
export function DeleteWebhookWithToken(webhookId: SnowflakeInfer, webhookToken: string): RestRequestOptions<null> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": "delete webhook with token" },
	};
}

/**
 * Query Execute Webhook
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#query-string-params}
 */
export const QueryExecuteWebhook = z.object({
	wait: z.boolean().default(false).optional(),
	thread_id: Snowflake.optional(),
});

/**
 * Query Execute Webhook Infer
 *
 * The inferred type of the {@link QueryExecuteWebhook} zod object.
 */
export type QueryExecuteWebhookInfer = z.infer<typeof QueryExecuteWebhook>;

/**
 * JSON Execute Webhook
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-json-params}
 */
export const JSONExecuteWebhook = z.object({
	content: z.string().optional(),
	username: z.string().optional(),
	avatar_url: z.string().optional(),
	tts: z.boolean().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.array(z.unknown()).optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
	flags: MessageFlagsEnum.optional(),
	thread_name: z.string().optional(),
	applied_tags: z.array(Snowflake).optional(),
	poll: PollCreateRequestObjectStructure.optional(),
});

/**
 * JSON Execute Webhook Infer
 *
 * The inferred type of the {@link JSONExecuteWebhook} zod object.
 */
export type JSONExecuteWebhookInfer = z.infer<typeof JSONExecuteWebhook>;

/**
 * Execute Webhook
 *
 * Trigger a webhook in a channel. Requires the SEND_MESSAGES permission in the channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
 */
export function ExecuteWebhook(webhookId: SnowflakeInfer, webhookToken: string, json: JSONExecuteWebhookInfer, query?: QueryExecuteWebhookInfer): RestRequestOptions<void> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}`,
		method: "POST",
		body: JSONExecuteWebhook.parse(json),
		query: QueryExecuteWebhook.parse(query),
	};
}

/**
 * Query Webhook Message
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#query-string-params-1}
 */
export const QueryWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Webhook Message Infer
 *
 * The inferred type of the {@link QueryWebhookMessage} zod object.
 */
export type QueryWebhookMessageInfer = z.infer<typeof QueryWebhookMessage>;

/**
 * Get Webhook Message
 *
 * Returns the message that was created by the webhook.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
 */
export function GetWebhookMessage<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, query?: QueryWebhookMessageInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		method: "GET",
		query: QueryWebhookMessage.parse(query),
	};
}

/**
 * Query Edit Webhook Message
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#query-string-params-2}
 */
export const QueryEditWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Edit Webhook Message Infer
 *
 * The inferred type of the {@link QueryEditWebhookMessage} zod object.
 */
export type QueryEditWebhookMessageInfer = z.infer<typeof QueryEditWebhookMessage>;

/**
 * JSON Edit Webhook Message
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-json-params}
 */
export const JSONEditWebhookMessage = z.object({
	content: z.string().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.array(z.unknown()).optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
});

/**
 * JSON Edit Webhook Message Infer
 *
 * The inferred type of the {@link JSONEditWebhookMessage} zod object.
 */
export type JSONEditWebhookMessageInfer = z.infer<typeof JSONEditWebhookMessage>;

/**
 * Edit Webhook Message
 *
 * Edits a previously-sent webhook message from the same token.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
 */
export function EditWebhookMessage<T extends WebhookStructureInfer>(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, json: JSONEditWebhookMessageInfer, query?: QueryEditWebhookMessageInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		method: "PATCH",
		body: JSONEditWebhookMessage.parse(json),
		query: QueryEditWebhookMessage.parse(query),
	};
}

/**
 * Query Delete Webhook Message
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#query-string-params-3}
 */
export const QueryDeleteWebhookMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Delete Webhook Message Infer
 *
 * The inferred type of the {@link QueryDeleteWebhookMessage} zod object.
 */
export type QueryDeleteWebhookMessageInfer = z.infer<typeof QueryDeleteWebhookMessage>;

/**
 * Delete Webhook Message
 *
 * Deletes a message that was created by the webhook.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
 */
export function DeleteWebhookMessage(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, query?: QueryDeleteWebhookMessageInfer): RestRequestOptions<void> {
	return {
		url: `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
		method: "DELETE",
		query: QueryDeleteWebhookMessage.parse(query),
	};
}
