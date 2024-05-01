import { z } from "zod";
import { Integer, Snowflake } from "../../globals";

export const GatewayMessagePollVoteRemoveFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});
export type GatewayMessagePollVoteRemoveInfer = z.infer<typeof GatewayMessagePollVoteRemoveFields>;

export const GatewayMessagePollVoteAddFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});
export type GatewayMessagePollVoteAddInfer = z.infer<typeof GatewayMessagePollVoteAddFields>;
