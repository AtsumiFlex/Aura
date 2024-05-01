import { z } from "zod";
import { Snowflake } from "../../globals";

export const GatewayVoiceServerUpdateFields = z.object({
	token: z.string(),
	guild_id: Snowflake,
	endpoint: z.string().nullable(),
});
export type GatewayVoiceServerUpdateInfer = z.infer<typeof GatewayVoiceServerUpdateFields>;
