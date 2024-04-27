/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#oauth2}
 */

import type { AuthenticationType } from "@aurajs/core";
import type { Integer, ISO8601Timestamp, SetString, Snowflake } from "../globals";
import type { BitwisePermissionFlags } from "./permissions";

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2URLs {
	BaseAuthorizationUrl = "https://discord.com/oauth2/authorize",
	TokenRevocationUrl = "https://discord.com/api/oauth2/token/revoke",
	TokenUrl = "https://discord.com/api/oauth2/token",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export enum OAuth2Scopes {
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

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response}
 */
export type AccessTokenResponse = {
	access_token: string;
	expires_in: Integer;
	refresh_token: string;
	scope: SetString<OAuth2Scopes>;
	token_type: AuthenticationType;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant-client-credentials-access-token-response}
 */
export type ClientCredentialsAccessTokenResponse = {
	access_token: string;
	expires_in: Integer;
	scope: SetString<OAuth2Scopes>;
	token_type: AuthenticationType;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 */
export type BotAuthorizationParameters = {
	client_id: Snowflake;
	disable_guild_select: boolean;
	guild_id: Snowflake;
	permissions: BitwisePermissionFlags[]; // TODO: A voir si c'est bien ça
	scope: SetString<OAuth2Scopes>;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export type CurrentAuthorizationInformationResponse = {
	application: object; // TODO: partial application object
	expires: ISO8601Timestamp;
	scopes: SetString<OAuth2Scopes>[];
	user?: object; // TODO: user object
};
