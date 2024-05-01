import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../../globals";
import { ChannelStructure, ThreadMemberStructure } from "../../structure/channel";

export const GatewayChannelPinsUpdateFields = z.object({
	guild_id: Snowflake.optional(),
	channel_id: Snowflake,
	last_pin_timestamp: ISO8601.optional().nullable(),
});
export type GatewayChannelPinsUpdateInfer = z.infer<typeof GatewayChannelPinsUpdateFields>;

export const GatewayThreadMembersUpdateFields = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	member_count: Integer,
	added_members: z.array(ThreadMemberStructure).optional(),
	removed_member_ids: z.array(Snowflake).optional(),
});
export type GatewayThreadMembersUpdateInfer = z.infer<typeof GatewayThreadMembersUpdateFields>;

export const GatewayThreadMemberUpdateFields = z.object({ guild_id: Snowflake });
export type GatewayThreadMemberUpdateInfer = z.infer<typeof GatewayThreadMemberUpdateFields>;

export const GatewayThreadListSyncFields = z.object({
	guild_id: Snowflake,
	channel_ids: z.array(Snowflake).optional(),
	threads: z.array(ChannelStructure),
	members: z.array(ThreadMemberStructure),
});
export type GatewayThreadListSyncInfer = z.infer<typeof GatewayThreadListSyncFields>;
