// https://discord.com/developers/docs/resources/webhook#webhook-resource
import type { Snowflake } from "./global";
import type { GuildStructure } from "./guild";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
export type WebhookStructure = {
	application_id: Snowflake | null;
	avatar: string | null;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	id: Snowflake;
	name: string | null;
	source_guild?: GuildStructure;
	token?: string;
	type: WebhookType;
	url?: string;
	user?: UserStructure;
};

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
export enum WebhookType {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
}
