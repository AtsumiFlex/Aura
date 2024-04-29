/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#oauth2}
 */

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2Urls {
	BaseAuthorizationUrl = "https://discord.com/oauth2/authorize",
	TokenRevocationUrl = "https://discord.com/api/oauth2/token/revoke",
	TokenUrl = "https://discord.com/api/oauth2/token",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export type OAuth2Scopes =
    "activities.read"
    | "activities.write"
    | "applications.builds.read"
    | "applications.builds.upload"
    | "applications.commands.permissions.update"
    | "applications.commands.update"
    | "applications.commands"
    | "applications.entitlements"
    | "applications.store.update"
    | "bot"
    | "connections"
    | "dm_channels.read"
    | "email"
    | "gdm.join"
    | "guilds.join"
    | "guilds.members.read"
    | "guilds"
    | "identify"
    | "messages.read"
    | "relationships.read"
    | "role_connections.write"
    | "rpc.activities.write"
    | "rpc.notifications.read"
    | "rpc.voice.read"
    | "rpc.voice.write"
    | "rpc"
    | "voice"
    | "webhook.incoming";

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 */
export type BotAuthorizationFlowQuery = {
	client_id: string;
	disable_guild_select: boolean;
	guild_id: string;
	permissions: number;
	scope: string;
};
