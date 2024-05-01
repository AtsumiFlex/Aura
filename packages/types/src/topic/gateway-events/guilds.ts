import { z } from "zod";
import { Integer, ISO8601, Mixed, Snowflake } from "../../globals";

export const GatewayGuildRoleDeleteFields = z.object({
	guild_id: Snowflake,
	role_id: Snowflake,
});
export type GatewayGuildRoleDeleteInfer = z.infer<typeof GatewayGuildRoleDeleteFields>;

export const GatewayGuildRoleUpdateFields = z.object({
	guild_id: Snowflake,
	role: Mixed, // TODO: Role object
});
export type GatewayGuildRoleUpdateInfer = z.infer<typeof GatewayGuildRoleUpdateFields>;

export const GatewayGuildRoleCreateFields = z.object({
	guild_id: Snowflake,
	role: Mixed, // TODO: Role object
});
export type GatewayGuildRoleCreateInfer = z.infer<typeof GatewayGuildRoleCreateFields>;

export const GatewayGuildMembersChunkFields = z.object({
	guild_id: Snowflake,
	members: z.array(Mixed), // TODO: GuildMember object
	chunk_index: Integer,
	chunk_count: Integer,
	not_found: z.array(Mixed).optional(),
	presences: z.array(Mixed).optional(), // TODO: Presence object
	nonce: z.string().optional(),
});
export type GatewayGuildMembersChunkInfer = z.infer<typeof GatewayGuildMembersChunkFields>;

export const GatewayGuildMemberUpdateFields = z.object({
	guild_id: Snowflake,
	roles: z.array(Snowflake),
	user: Mixed, // TODO: User object
	nick: z.string().nullable(),
	avatar: z.string().nullable(),
	joined_at: ISO8601.nullable(),
	premium_since: ISO8601.nullable(),
	deaf: z.boolean().optional(),
	mute: z.boolean().optional(),
	pending: z.boolean().optional(),
	communication_disabled_until: ISO8601.optional().nullable(),
});
export type GatewayGuildMemberUpdateInfer = z.infer<typeof GatewayGuildMemberUpdateFields>;

export const GatewayGuildMemberRemoveFields = z.object({
	guild_id: Snowflake,
	user: Mixed, // TODO: User object
});
export type GatewayGuildMemberRemoveInfer = z.infer<typeof GatewayGuildMemberRemoveFields>;

export const GatewayGuildMemberAddFields = z.object({ guild_id: Snowflake });
export type GatewayGuildMemberAddInfer = z.infer<typeof GatewayGuildMemberAddFields>;

export const GatewayGuildIntegrationsUpdateFields = z.object({ guild_id: Snowflake });
export type GatewayGuildIntegrationsUpdateInfer = z.infer<typeof GatewayGuildIntegrationsUpdateFields>;

export const GatewayGuildStickersUpdateFields = z.object({
	guild_id: Snowflake,
	stickers: z.array(Mixed), // TODO: Sticker object
});
export type GatewayGuildStickersUpdateInfer = z.infer<typeof GatewayGuildStickersUpdateFields>;

export const GatewayGuildEmojisUpdateFields = z.object({
	guild_id: Snowflake,
	emojis: z.array(Mixed), // TODO: Emoji object
});
export type GatewayGuildEmojisUpdateInfer = z.infer<typeof GatewayGuildEmojisUpdateFields>;

export const GatewayGuildBanRemoveFields = z.object({
	guild_id: Snowflake,
	user: Mixed, // TODO: User object
});
export type GatewayGuildBanRemoveInfer = z.infer<typeof GatewayGuildBanRemoveFields>;

export const GatewayGuildBanAddFields = z.object({
	guild_id: Snowflake,
	user: Mixed, // TODO: User object
});
export type GatewayGuildBanAddInfer = z.infer<typeof GatewayGuildBanAddFields>;

export const GatewayGuildCreateFields = z.object({
	guild: Mixed, // TODO: Guild object
	joined_at: ISO8601,
	large: z.boolean(),
	unavailable: z.boolean().optional(),
	member_count: Integer,
	voice_states: z.array(Mixed),
	members: z.array(Mixed), // TODO: GuildMember object
	channels: z.array(Mixed), // TODO: Channel object
	threads: z.array(Mixed), // TODO: Channel object
	presences: z.array(Mixed), // TODO: Presence object
	stage_instances: z.array(Mixed), // TODO: StageInstance object
	guild_scheduled_events: z.array(Mixed), // TODO: GuildScheduledEvent object
});
export type GatewayGuildCreateInfer = z.infer<typeof GatewayGuildCreateFields>;
