import { GuildMemberStructure, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Typing Start Event Fields
 *
 * Sent when a user starts typing in a channel.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields}
 */
export const TypingStartEventFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * Unix time (in seconds) of when the user started typing
	 */
	timestamp: Integer,
	/**
	 * Member who started typing if this happened in a guild
	 */
	member: GuildMemberStructure.optional(),
});

/**
 * Typing Start Event Fields Infer
 *
 * Is used to infer the type of the {@link TypingStartEventFields} object.
 */
export type TypingStartEventFieldsInfer = z.infer<typeof TypingStartEventFields>;
