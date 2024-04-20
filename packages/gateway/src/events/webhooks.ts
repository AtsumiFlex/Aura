/**
 * @fileoverview This file defines the types for the webhooks update event in the application.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks}
 */

import type { Snowflake } from "@aurajs/core";

/**
 * @typedef {object} WebhooksUpdateEventFields
 * @description Type for the fields of the WebhooksUpdate event.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 * @property
 */
export type WebhooksUpdateEventFields = {
	channel_id: Snowflake;
	guild_id: Snowflake;
};
