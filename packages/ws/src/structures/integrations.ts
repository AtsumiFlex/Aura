import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Integration Delete Event Fields
 *
 * Sent when an integration is deleted
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-delete}
 */
export const IntegrationDeleteEventFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	application_id: Snowflake.optional(),
});

/**
 * Integration Delete Event Fields Infer
 *
 * Represents the inferred type of the {@link IntegrationDeleteEventFields}
 */
export type IntegrationDeleteEventFieldsInfer = z.infer<typeof IntegrationDeleteEventFields>;

/**
 * Integration Update Event Additional Fields
 *
 * Sent when an integration is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-update}
 */
export const IntegrationUpdateEventAdditionalFields = z.object({ guild_id: Snowflake });

/**
 * Integration Update Event Fields
 *
 * Represents the inferred type of the {@link IntegrationUpdateEventAdditionalFields}
 */
export type IntegrationUpdateEventFieldsInfer = z.infer<typeof IntegrationUpdateEventAdditionalFields>;

/**
 * Integration Create Event Additional Fields
 *
 * Sent when an integration is created
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-create}
 */
export const IntegrationCreateEventAdditionalFields = z.object({ guild_id: Snowflake });

/**
 * Integration Create Event Fields Infer
 *
 * Represents the inferred type of the {@link IntegrationCreateEventAdditionalFields}
 */
export type IntegrationCreateEventFieldsInfer = z.infer<typeof IntegrationCreateEventAdditionalFields>;
