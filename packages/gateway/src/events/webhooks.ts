import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Webhooks Update Event Fields
 *
 * Sent when a guild channel's webhook is created, updated, or deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 */
export const WebhooksUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
});

/**
 * Webhooks Update Event Fields Infer
 *
 * Is used to infer the type of the {@link WebhooksUpdateEventFields} object.
 */
export type WebhooksUpdateEventFieldsInfer = z.infer<typeof WebhooksUpdateEventFields>;
