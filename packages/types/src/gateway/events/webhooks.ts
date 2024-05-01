import { z } from "zod";
import { Snowflake } from "../../globals";

export const GatewayWebhooksUpdateFields = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake,
});
export type GatewayWebhooksUpdateInfer = z.infer<typeof GatewayWebhooksUpdateFields>;
