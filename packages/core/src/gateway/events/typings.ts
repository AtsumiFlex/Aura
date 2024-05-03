/**
 * Typings Gateway
 *
 * This class is responsible for handling typings events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#typing}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../../globals/globals";
import { GuildMemberStructure } from "../../structures/guilds";

/**
 * Typing Start Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#typing-start}
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
 * Infer the type of a {@link TypingStartEventFields} object.
 */
export type TypingStartEventFieldsInfer = z.infer<typeof TypingStartEventFields>;
