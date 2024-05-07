/**
 * Webhook Resource
 *
 * Webhooks are a low-effort way to post messages to channels in Discord. They do not require a bot user or authentication to use.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { ChannelStructure } from "./channels";
import { GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * Webhook Types
 *
 * The types of webhooks.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookTypes {
	/**
	 * Incoming
	 */
	Incoming = 1,
	/**
	 * Channel Follower
	 */
	ChannelFollower = 2,
	/**
	 * Application
	 */
	Application = 3,
}

/**
 * Webhook Types Enum
 *
 * Is a zod enum that represents the available {@link WebhookTypes}.
 */
export const WebhookTypesEnum = z.nativeEnum(WebhookTypes);

/**
 * Webhook Structure
 *
 * Represents a webhook.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure}
 */
export const WebhookStructure = z.object({
	id: Snowflake,
	type: WebhookTypesEnum,
	guild_id: Snowflake.optional().nullable(),
	channel_id: Snowflake.optional(),
	user: UserStructure.optional(),
	name: z.string().nullable(),
	avatar: z.string().nullable(),
	token: z.string().optional(),
	application_id: Snowflake.nullable(),
	source_guild: GuildStructure.partial().optional(),
	source_channel: ChannelStructure.partial().optional(),
	url: z.string().optional(),
});

/**
 * Webhook Structure Infer
 *
 * The inferred type of {@link WebhookStructure}
 */
export type WebhookStructureInfer = z.infer<typeof WebhookStructure>;
