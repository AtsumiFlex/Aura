import { GuildMemberStructure, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Typing Start Event Fields
 *
 * Sent when a user starts typing in a channel
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start}
 */
export const TypingStartEventFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	user_id: Snowflake,
	timestamp: Integer,
	member: GuildMemberStructure.optional(),
});

/**
 * Typing Start Event Fields Infer
 *
 * Represents the inferred type of the {@link TypingStartEventFields}
 */
export type TypingStartEventFieldsInfer = z.infer<typeof TypingStartEventFields>;
