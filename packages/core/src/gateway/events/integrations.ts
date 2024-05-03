/**
 * Integrations Gateway
 *
 * This class is responsible for handling integration events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#integration}
 */

import { z } from "zod";
import { Snowflake } from "../../globals/globals";

/**
 * Integration Delete Event Fields
 *
 * Sent when an integration is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#integration-delete}
 */
export const IntegrationDeleteEventFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	application_id: Snowflake.optional(),
});

/**
 * Integration Delete Event Fields Infer
 *
 * Infer the type of a {@link IntegrationDeleteEventFields} object.
 */
export type IntegrationDeleteEventFieldsInfer = z.infer<typeof IntegrationDeleteEventFields>;

/**
 * Integration Update Event Fields
 *
 * Sent when an integration is updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#integration-update}
 */
export const IntegrationUpdateEventFields = z.object({ guild_id: Snowflake });

/**
 * Integration Update Event Fields Infer
 *
 * Infer the type of a {@link IntegrationUpdateEventFields} object.
 */
export type IntegrationUpdateEventFieldsInfer = z.infer<typeof IntegrationUpdateEventFields>;

/**
 * Integration Create Event Fields
 *
 * Sent when an integration is created.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#integration-create}
 */
export const IntegrationCreateEventFields = z.object({ guild_id: Snowflake });

/**
 * Integration Create Event Fields Infer
 *
 * Infer the type of a {@link IntegrationCreateEventFields} object.
 */
export type IntegrationCreateEventFieldsInfer = z.infer<typeof IntegrationCreateEventFields>;
