import type { Snowflake } from "../../base/base";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure}
 */
export type WebhookStructure = {
	application_id: Snowflake | null;
	avatar: string | null;
	channel_id: Snowflake | null;
	guild_id?: Snowflake | null;
	id: Snowflake;
	name: string | null;
	source_channel?: object; // TODO: Partial Channel object
	source_guild?: object; // TODO: Partial Guild object
	token?: string;
	type: WebhookType;
	url?: UserStructure;
	user: object;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookType {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
}
