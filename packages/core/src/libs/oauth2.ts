/**
 * OAuth2
 *
 * OAuth2 enables application developers to build applications that utilize authentication and data from the Discord API. Within Discord, there are multiple types of OAuth2 authentication. We support the authorization code grant, the implicit grant, client credentials, and some modified special-for-Discord flows for Bots and Webhooks.
 *
 * Shared Resources :
 *
 * The first step in implementing OAuth2 is registering a developer application and retrieving your client ID and client secret. Most people who will be implementing OAuth2 will want to find and utilize a library in the language of their choice. For those implementing OAuth2 from scratch, please see RFC 6749 for details. After you create your application with Discord, make sure that you have your client_id and client_secret handy. The next step is to figure out which OAuth2 flow is right for your purposes.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#oauth2}
 */

import { z } from "zod";
import { AuthorizationTypesEnum } from "../globals/api";
import { Integer, Snowflake } from "../globals/formatters";

/**
 * OAuth2 URLs
 *
 * The URLs for OAuth2.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2Urls {
	/**
	 * Base authorization URL
	 */
	Authorize = "https://discord.com/oauth2/authorize",
	/**
	 * Token URL
	 */
	Token = "https://discord.com/api/oauth2/token",
	/**
	 * Token Revocation URL
	 */
	TokenRevoke = "https://discord.com/api/oauth2/token/revoke",
}

/**
 * OAuth2 Urls Enum
 *
 * Is a zod enum that represents the available {@link OAuth2Urls}.
 */
export const OAuth2UrlsEnum = z.nativeEnum(OAuth2Urls);

/**
 * OAuth2 Scopes
 *
 * These are a list of all the OAuth2 scopes that Discord supports. Some scopes require approval from Discord to use. Requesting them from a user without approval from Discord may cause errors or undocumented behavior in the OAuth2 flow.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export enum OAuth2Scopes {
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list — not currently available for apps
	 */
	ActivitiesRead = "activities.read",
	/**
	 * Allows your app to update a user's activity - not currently available for apps (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
	 */
	ActivitiesWrite = "activities.write",
	/**
	 * Allows your app to read build data for a user's applications
	 */
	ApplicationsBuildsRead = "applications.builds.read",
	/**
	 * Allows your app to upload/update builds for a user's applications - requires Discord approval
	 */
	ApplicationsBuildsUpload = "applications.builds.upload",
	/**
	 * Allows your app to add commands to a guild - included by default with the bot scope
	 */
	ApplicationsCommands = "applications.commands",
	/**
	 * Allows your app to update permissions for its commands in a guild a user has permissions to
	 */
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	/**
	 * Allows your app to update its commands using a Bearer token - client credentials grant only
	 */
	ApplicationsCommandsUpdate = "applications.commands.update",
	/**
	 * Allows your app to read entitlements for a user's applications
	 */
	ApplicationsEntitlements = "applications.entitlements",
	/**
	 * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
	 */
	ApplicationsStoreUpdate = "applications.store.update",
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = "bot",
	/**
	 * Allows /users/@me/connections to return linked third-party accounts
	 */
	Connections = "connections",
	/**
	 * Allows your app to see information about the user's DMs and group DMs - requires Discord approval
	 */
	DmChannelsRead = "dm_channels.read",
	/**
	 * Enables /users/@me to return an email
	 */
	Email = "email",
	/**
	 * Allows your app to join users to a group DM
	 */
	GdmJoin = "gdm.join",
	/**
	 * Allows /users/@me/guilds to return basic information about all of a user's guilds
	 */
	Guilds = "guilds",
	/**
	 * Allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild
	 */
	GuildsJoin = "guilds.join",
	/**
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
	 */
	GuildsMembersRead = "guilds.members.read",
	/**
	 * Allows /users/@me without email
	 */
	Identify = "identify",
	/**
	 * For local rpc server API access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)
	 */
	MessagesRead = "messages.read",
	/**
	 * Allows your app to know a user's friends and implicit relationships - requires Discord approval
	 */
	RelationshipsRead = "relationships.read",
	/**
	 * Allows your app to update a user's connection and metadata for the app
	 */
	RoleConnectionsWrite = "role_connections.write",
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
	 */
	Rpc = "rpc",
	/**
	 * For local rpc server access, this allows you to update a user's activity - requires Discord approval
	 */
	RpcActivitiesWrite = "rpc.activities.write",
	/**
	 * For local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval
	 */
	RpcNotificationsRead = "rpc.notifications.read",
	/**
	 * For local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval
	 */
	RpcVoiceRead = "rpc.voice.read",
	/**
	 * For local rpc server access, this allows you to update a user's voice settings - requires Discord approval
	 */
	RpcVoiceWrite = "rpc.voice.write",
	/**
	 * Allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
	 */
	Voice = "voice",
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = "webhook.incoming",
}

/**
 * OAuth2 Scopes Enum
 *
 * Is a zod enum that represents the available {@link OAuth2Scopes}.
 */
export const OAuth2ScopesEnum = z.nativeEnum(OAuth2Scopes);

/**
 * Access Token Response
 *
 * The response from the OAuth2 token endpoint.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response}
 */
export const AccessTokenResponse = z.object({
	access_token: z.string(),
	token_type: AuthorizationTypesEnum,
	expires_in: Integer,
	refresh_token: z.string(),
	scope: z.string(),
});

/**
 * Access Token Response Infer
 *
 * Is used to infer the type of the {@link AccessTokenResponse} object.
 */
export type AccessTokenResponseInfer = z.infer<typeof AccessTokenResponse>;

/**
 * Client Credentials Access Token Response
 *
 * The response from the OAuth2 token endpoint when using the client credentials grant.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant-access-token-response}
 */
export const ClientCredentialsAccessTokenResponse = z.object({
	access_token: z.string(),
	token_type: AuthorizationTypesEnum,
	expires_in: Integer,
	scope: z.string(),
});

/**
 * Client Credentials Access Token Response Infer
 *
 * Is used to infer the type of the {@link ClientCredentialsAccessTokenResponse} object.
 */
export type ClientCredentialsAccessTokenResponseInfer = z.infer<typeof ClientCredentialsAccessTokenResponse>;

/**
 * Bot Auth Parameters
 *
 * The parameters required to authenticate a bot.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow}
 */
export const BotAuthParameters = z.object({
	client_id: Snowflake,
	scope: z.literal(OAuth2ScopesEnum.enum.Bot),
	permissions: z.string(),
	guild_id: Snowflake,
	disable_guild_select: z.boolean(),
});

/**
 * Bot Auth Parameters Infer
 *
 * Is used to infer the type of the {@link BotAuthParameters} object.
 */
export type BotAuthParametersInfer = z.infer<typeof BotAuthParameters>;
