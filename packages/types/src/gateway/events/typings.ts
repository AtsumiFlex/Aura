import { z } from "zod";
import { Integer, Mixed, Snowflake } from "../../globals";

export const GatewayTypingStartFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	user_id: Snowflake,
	timestamp: Integer,
	member: Mixed.optional(), // TODO: Member Structure
});
export type GatewayTypingStartInfer = z.infer<typeof GatewayTypingStartFields>;
