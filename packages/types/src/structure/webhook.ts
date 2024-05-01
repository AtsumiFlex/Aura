import { z } from "zod";
import { Snowflake } from "../globals";
import { ChannelStructure } from "./channel";
import { GuildStructure } from "./guild";
import { UserStructure } from "./user";

export enum WebhookTypes {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
}

export const WebhookTypesEnum = z.nativeEnum(WebhookTypes);

export const WebhookStructure = z.object({
	id: Snowflake,
	type: WebhookTypesEnum,
	guild_id: Snowflake.optional().nullable(),
	channel_id: Snowflake.nullable(),
	user: UserStructure.optional(),
	name: z.string().nullable(),
	avatar: z.string().nullable(),
	token: z.string().optional(),
	application_id: Snowflake.nullable(),
	source_guild: GuildStructure.partial().optional(),
	source_channel: ChannelStructure.partial().optional(),
	url: z.string().optional(),
});
export type WebhookInfer = z.infer<typeof WebhookStructure>;
