import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Webhooks Update Event Fields
 *
 * Sent when a channel's webhook is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 */
export const WebhooksUpdateEventFields = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake,
});

/**
 * Webhooks Update Event Fields Infer
 *
 * Represents the inferred type of the {@link WebhooksUpdateEventFields}
 */
export type WebhooksUpdateEventFieldsInfer = z.infer<typeof WebhooksUpdateEventFields>;
