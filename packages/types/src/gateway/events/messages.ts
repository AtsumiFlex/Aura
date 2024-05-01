import { z } from "zod";
import { Mixed, Snowflake } from "../../globals";

export const GatewayMessageReactionRemoveEmojiFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	message_id: Snowflake,
	emoji: Mixed, // TODO: partial Emoji Structure
});
export type GatewayMessageReactionRemoveEmojiInfer = z.infer<typeof GatewayMessageReactionRemoveEmojiFields>;

export const GatewayMessageReactionRemoveAllFields = z.object({
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
});
export type GatewayMessageReactionRemoveAllInfer = z.infer<typeof GatewayMessageReactionRemoveAllFields>;

export const GatewayMessageReactionRemoveFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	emoji: Mixed, // TODO: partial Emoji Structure
});
export type GatewayMessageReactionRemoveInfer = z.infer<typeof GatewayMessageReactionRemoveFields>;

export const GatewayMessageReactionAddFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	member: Mixed.optional(), // TODO: Member Structure
	emoji: Mixed, // TODO: partial Emoji Structure
	message_author_id: Snowflake.optional(),
});
export type GatewayMessageReactionAddInfer = z.infer<typeof GatewayMessageReactionAddFields>;

export const GatewayMessageDeleteBulkFields = z.object({
	ids: z.array(Snowflake),
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
});
export type GatewayMessageDeleteBulkInfer = z.infer<typeof GatewayMessageDeleteBulkFields>;

export const GatewayMessageDeleteFields = z.object({
	id: Snowflake,
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
});
export type GatewayMessageDeleteInfer = z.infer<typeof GatewayMessageDeleteFields>;

export const GatewayMessageCreateFields = z.object({
	guild_id: Snowflake.optional(),
	member: Mixed.optional(), // TODO: Member Structure
	mentions: z.array(Mixed), // TODO: User Structure, with an additional partial member field
});
export type GatewayMessageCreateInfer = z.infer<typeof GatewayMessageCreateFields>;
