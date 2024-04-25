/**
 * @fileoverview Webhooks event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks}
 */

import type { Snowflake } from "@aurajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 */
export type WebhooksUpdateEventFields = {
	channel_id: Snowflake;
	guild_id: Snowflake;
};
