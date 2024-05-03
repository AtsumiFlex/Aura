/**
 * Webhooks Gateway
 *
 * Webhooks are a way for your application to receive real-time notifications when a specific event occurs.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks}
 */

import { z } from "zod";
import { Snowflake } from "../../globals/globals";

/**
 * Webhooks Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#webhooks-update}
 */
export const WebhooksUpdateEventFields = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake,
});

/**
 * Webhooks Update Event Fields Infer
 *
 * Infer the type of a {@link WebhooksUpdateEventFields} object.
 */
export type WebhooksUpdateEventFieldsInfer = z.infer<typeof WebhooksUpdateEventFields>;
