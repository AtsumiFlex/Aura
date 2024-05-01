import { z } from "zod";

export enum Oauth2Urls {
	BaseAuthorization = "https://discord.com/oauth2/authorize",
	Token = "https://discord.com/api/oauth2/token",
	TokenRevoke = "https://discord.com/api/oauth2/token/revoke",
}

export const Oauth2UrlsEnum = z.nativeEnum(Oauth2Urls);

export enum Oauth2Scopes {
	ActivitiesRead = "activities.read",
	ActivitiesWrite = "activities.write",
	ApplicationsBuildsRead = "applications.builds.read",
	ApplicationsBuildsUpload = "applications.builds.upload",
	ApplicationsCommands = "applications.commands",
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	ApplicationsCommandsUpdate = "applications.commands.update",
	ApplicationsEntitlements = "applications.entitlements",
	ApplicationsStoreUpdate = "applications.store.update",
	Bot = "bot",
	Connections = "connections",
	DmChannelsRead = "dm_channels.read",
	Email = "email",
	GdmJoin = "gdm.join",
	Guilds = "guilds",
	GuildsJoin = "guilds.join",
	GuildsMembersRead = "guilds.members.read",
	Identify = "identify",
	MessagesRead = "messages.read",
	RelationshipsRead = "relationships.read",
	RoleConnectionsWrite = "role_connections.write",
	Rpc = "rpc",
	RpcActivitiesWrite = "rpc.activities.write",
	RpcNotificationsRead = "rpc.notifications.read",
	RpcVoiceRead = "rpc.voice.read",
	RpcVoiceWrite = "rpc.voice.write",
	Voice = "voice",
	WebhookIncoming = "webhook.incoming",
}

export const Oauth2ScopesEnum = z.nativeEnum(Oauth2Scopes);

export const AccessTokenResponse = z.object({
	access_token: z.string(),
	expires_in: z.number(),
	refresh_token: z.string(),
	scope: z.union([z.string(), Oauth2ScopesEnum]),
	token_type: z.union([z.literal("Bearer"), z.literal("Bot")]),
}).partial();
export type AccessTokenResponseInfer = z.infer<typeof AccessTokenResponse>;

export const ClientCredentialsAccessTokenResponse = z.object({
	access_token: z.string(),
	expires_in: z.number(),
	scope: z.union([z.string(), Oauth2ScopesEnum]),
	token_type: z.union([z.literal("Bearer"), z.literal("Bot")]),
}).partial();
export type ClientCredentialsAccessTokenResponseInfer = z.infer<typeof ClientCredentialsAccessTokenResponse>;

export const BotAuthParameters = z.object({
	client_id: z.string(),
	disable_guild_select: z.boolean(),
	guild_id: z.string(),
	permissions: z.string(),
	scope: z.literal(Oauth2Scopes.Bot),
}).partial();
export type BotAuthParametersInfer = z.infer<typeof BotAuthParameters>;
