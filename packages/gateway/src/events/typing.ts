import type { Integer, Snowflake } from "@aurajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields}
 */
export type TypingStartEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	member?: object; // TODO: Member object
	timestamp: Integer;
	user_id: Snowflake;
};
