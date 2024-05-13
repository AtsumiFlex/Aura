import { ApiVersionsEnum, ApplicationStructure, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Ready
 *
 * The ready event is dispatched when a client has completed the initial handshake with the gateway (for new sessions). The ready event can be the largest and most complex event the gateway will send, as it contains all the state required for a client to begin interacting with the rest of the platform.
 *
 * guilds are the guilds of which your bot is a member. They start out as unavailable when you connect to the gateway. As they become available, your bot will be notified via Guild Create events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields}
 */
export const Ready = z.object({
	/**
	 * API version
	 */
	v: ApiVersionsEnum,
	/**
	 * Information about the user including email
	 */
	user: UserStructure,
	/**
	 * Guilds the user is in
	 */
	guilds: z.array(z.object({
		id: Snowflake,
		unavailable: z.boolean(),
	})),
	/**
	 * Used for resuming connections
	 */
	session_id: z.string(),
	/**
	 * Gateway URL for resuming connections
	 */
	resume_gateway_url: z.string(),
	/**
	 * Shard information associated with this session, if sent when identifying
	 */
	shard: z.array(Snowflake).max(2).optional(),
	/**
	 * Contains id and flags
	 */
	application: ApplicationStructure.partial(),
});

/**
 * Ready Infer
 *
 * Is used to infer the type of the {@link Ready} object.
 */
export type ReadyInfer = z.infer<typeof Ready>;
