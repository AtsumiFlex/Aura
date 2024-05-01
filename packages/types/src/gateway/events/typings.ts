import { z } from "zod";
import { Integer, Snowflake } from "../../globals";
import { GuildMemberStructure } from "../../structure/guild";

export const GatewayTypingStartFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	user_id: Snowflake,
	timestamp: Integer,
	member: GuildMemberStructure.optional(),
});
export type GatewayTypingStartInfer = z.infer<typeof GatewayTypingStartFields>;
