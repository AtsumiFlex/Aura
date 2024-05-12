import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Integration Delete Event Fields
 *
 * Sent when an integration is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-delete-integration-delete-event-fields}
 */
export const IntegrationDeleteEventFields = z.object({
	/**
	 * Integration ID
	 */
	id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the bot/OAuth2 application for this discord integration
	 */
	application_id: Snowflake.optional(),
});

/**
 * Integration Delete Event Fields Infer
 *
 * Is used to infer the type of the {@link IntegrationDeleteEventFields} object.
 */
export type IntegrationDeleteEventFieldsInfer = z.infer<typeof IntegrationDeleteEventFields>;

/**
 * Integration Update Event Additional Fields
 *
 * Additional fields for the Integration Update Event.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-update-integration-update-event-additional-fields}
 */
export const IntegrationUpdateEventAdditionalFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Integration Update Event Additional Fields Infer
 *
 * Is used to infer the type of the {@link IntegrationUpdateEventAdditionalFields} object.
 */
export type IntegrationUpdateEventAdditionalFieldsInfer = z.infer<typeof IntegrationUpdateEventAdditionalFields>;

/**
 * Integration Create Event Additional Fields
 *
 * Additional fields for the Integration Create Event.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-create-integration-create-event-additional-fields}
 */
export const IntegrationCreateEventAdditionalFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Integration Create Event Additional Fields Infer
 *
 * Is used to infer the type of the {@link IntegrationCreateEventAdditionalFields} object.
 */
export type IntegrationCreateEventAdditionalFieldsInfer = z.infer<typeof IntegrationCreateEventAdditionalFields>;
