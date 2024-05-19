import { z } from "zod";

/**
 * Enum representing OAuth2 URLs for Discord.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2Urls {
	/**
	 * Base authorization URL.
	 */
	BaseAuthorization = "https://discord.com/oauth2/authorize",
	/**
	 * Token URL.
	 */
	Token = "https://discord.com/api/oauth2/token",
	/**
	 * Token Revocation URL.
	 */
	TokenRevocation = "https://discord.com/api/oauth2/token/revoke",
}

/**
 * Zod schema for validating {@link OAuth2Urls}.
 *
 * @example
 * ```typescript
 * OAuth2UrlsEnum.parse(OAuth2Urls.BaseAuthorization); // Valid
 * OAuth2UrlsEnum.parse("https://invalid.url"); // Throws an error
 * ```
 */
export const OAuth2UrlsEnum = z.nativeEnum(OAuth2Urls);

/**
 * Enum representing OAuth2 scopes for Discord.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export enum OAuth2Scopes {
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list — not currently available for apps.
	 */
	ActivitiesRead = "activities.read",
	/**
	 * Allows your app to update a user's activity - not currently available for apps (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER).
	 */
	ActivitiesWrite = "activities.write",
	/**
	 * Allows your app to read build data for a user's applications.
	 */
	ApplicationsBuildsRead = "applications.builds.read",
	/**
	 * Allows your app to upload/update builds for a user's applications - requires Discord approval.
	 */
	ApplicationsBuildsUpload = "applications.builds.upload",
	/**
	 * Allows your app to add commands to a guild - included by default with the bot scope.
	 */
	ApplicationsCommands = "applications.commands",
	/**
	 * Allows your app to update permissions for its commands in a guild a user has permissions to.
	 */
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	/**
	 * Allows your app to update its commands using a Bearer token - client credentials grant only.
	 */
	ApplicationsCommandsUpdate = "applications.commands.update",
	/**
	 * Allows your app to read entitlements for a user's applications.
	 */
	ApplicationsEntitlements = "applications.entitlements",
	/**
	 * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications.
	 */
	ApplicationsStoreUpdate = "applications.store.update",
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default.
	 */
	Bot = "bot",
	/**
	 * Allows /users/@me/connections to return linked third-party accounts.
	 */
	Connections = "connections",
	/**
	 * Allows your app to see information about the user's DMs and group DMs - requires Discord approval.
	 */
	DmChannelsRead = "dm_channels.read",
	/**
	 * Enables /users/@me to return an email.
	 */
	Email = "email",
	/**
	 * Allows your app to join users to a group dm.
	 */
	GdmJoin = "gdm.join",
	/**
	 * Allows /users/@me/guilds to return basic information about all of a user's guilds.
	 */
	Guilds = "guilds",
	/**
	 * Allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild.
	 */
	GuildsJoin = "guilds.join",
	/**
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild.
	 */
	GuildsMembersRead = "guilds.members.read",
	/**
	 * Allows /users/@me without email.
	 */
	Identify = "identify",
	/**
	 * For local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates).
	 */
	MessagesRead = "messages.read",
	/**
	 * Allows your app to know a user's friends and implicit relationships - requires Discord approval.
	 */
	RelationshipsRead = "relationships.read",
	/**
	 * Allows your app to update a user's connection and metadata for the app.
	 */
	RoleConnectionsWrite = "role_connections.write",
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval.
	 */
	Rpc = "rpc",
	/**
	 * For local rpc server access, this allows you to update a user's activity - requires Discord approval.
	 */
	RpcActivitiesWrite = "rpc.activities.write",
	/**
	 * For local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval.
	 */
	RpcNotificationsRead = "rpc.notifications.read",
	/**
	 * For local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval.
	 */
	RpcVoiceRead = "rpc.voice.read",
	/**
	 * For local rpc server access, this allows you to update a user's voice settings - requires Discord approval.
	 */
	RpcVoiceWrite = "rpc.voice.write",
	/**
	 * Allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval.
	 */
	Voice = "voice",
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants.
	 */
	WebhookIncoming = "webhook.incoming",
}

/**
 * Zod schema for validating {@link OAuth2Scopes}.
 *
 * @example
 * ```typescript
 * OAuth2ScopesEnum.parse(OAuth2Scopes.Email); // Valid
 * OAuth2ScopesEnum.parse("invalid.scope"); // Throws an error
 * ```
 */
export const OAuth2ScopesEnum = z.nativeEnum(OAuth2Scopes);
