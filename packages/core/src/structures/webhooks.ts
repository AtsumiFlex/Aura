/**
 * Webhook Resource
 *
 * Webhooks are a low-effort way to post messages to channels in Discord. They do not require a bot user or authentication to use.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-resource}
 */

import { z } from "zod";
import { ChannelStructure } from "./channels";
import { GuildStructure } from "./guilds";
import { UserStructure } from "./user";

/**
 * Webhook Types
 *
 * The types of webhooks that can be created.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookTypes {
	/**
	 * Incoming Webhooks can post messages to channels with a generated token
	 */
	Incoming = 1,
	/**
	 * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
	 */
	ChannelFollower = 2,
	/**
	 * Application webhooks are webhooks used with Interactions
	 */
	Application = 3,
}

/**
 * WebhookTypesEnum is a zod enum that represents the webhook types.
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
	id: z.string(),
	type: WebhookTypesEnum,
	guild_id: z.string().optional().nullable(),
	channel_id: z.string().optional().nullable(),
	user: UserStructure.optional(),
	name: z.string().nullable(),
	avatar: z.string().nullable(),
	token: z.string().optional(),
	application_id: z.string().nullable(),
	source_guild: GuildStructure.partial().optional(),
	source_channel: ChannelStructure.partial().optional(),
	url: z.string().optional(),
});

/**
 * Webhook Structure Infer
 *
 * The inferred type of the WebhookStructure zod object.
 */
export type WebhookStructureInfer = z.infer<typeof WebhookStructure>;
