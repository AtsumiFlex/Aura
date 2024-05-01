import { z } from "zod";
import { Snowflake } from "../../globals";

export const GatewayIntegrationDeleteFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	application_id: Snowflake.optional(),
});
export type GatewayIntegrationDeleteInfer = z.infer<typeof GatewayIntegrationDeleteFields>;

export const GatewayIntegrationUpdateFields = z.object({ guild_id: Snowflake });
export type GatewayIntegrationUpdateInfer = z.infer<typeof GatewayIntegrationUpdateFields>;

export const GatewayIntegrationCreateFields = z.object({ guild_id: Snowflake });
export type GatewayIntegrationCreateInfer = z.infer<typeof GatewayIntegrationCreateFields>;

export const GatewayGuildScheduledEventUserRemoveFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});
export type GatewayGuildScheduledEventUserRemoveInfer = z.infer<typeof GatewayGuildScheduledEventUserRemoveFields>;

export const GatewayGuildScheduledEventUserAddFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});
export type GatewayGuildScheduledEventUserAddInfer = z.infer<typeof GatewayGuildScheduledEventUserAddFields>;
