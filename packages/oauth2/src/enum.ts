/**
 * Enum for OAuth2 URLs.
 *
 * @enum {string}
 * @readonly
 * @property {string} BaseAuthorizationUrl - The base URL for OAuth2 authorization.
 * @property {string} TokenRevocationUrl - The URL for revoking OAuth2 tokens.
 * @property {string} TokenUrl - The URL for obtaining OAuth2 tokens.
 * @see {https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2URLs {
	BaseAuthorizationUrl = "https://discord.com/oauth2/authorize",
	TokenRevocationUrl = "https://discord.com/api/oauth2/token/revoke",
	TokenUrl = "https://discord.com/api/oauth2/token",
}

/**
 * Enum for OAuth2 Scopes.
 *
 * @enum {string}
 * @readonly
 * @property {string} ActivitiesRead - Allows reading of a user's activities.
 * @property {string} ActivitiesWrite - Allows writing of a user's activities.
 * @property {string} ApplicationsBuildsRead - Allows reading of a user's application builds.
 * @property {string} ApplicationsBuildsUpload - Allows uploading of a user's application builds.
 * @property {string} ApplicationsCommands - Allows access to a user's application commands.
 * @property {string} ApplicationsCommandsPermissionsUpdate - Allows updating of a user's application commands permissions.
 * @property {string} ApplicationsCommandsUpdate - Allows updating of a user's application commands.
 * @property {string} ApplicationsEntitlements - Allows access to a user's application entitlements.
 * @property {string} ApplicationsStoreUpdate - Allows updating of a user's application store.
 * @property {string} Bot - Allows bot access.
 * @property {string} Connections - Allows access to a user's connections.
 * @property {string} DmChannelsRead - Allows reading of a user's DM channels.
 * @property {string} Email - Allows access to a user's email.
 * @property {string} GdmJoin - Allows joining of a user's GDM.
 * @property {string} Guilds - Allows access to a user's guilds.
 * @property {string} GuildsJoin - Allows joining of a user's guilds.
 * @property {string} GuildsMembersRead - Allows reading of a user's guild members.
 * @property {string} Identify - Allows identification of a user.
 * @property {string} MessagesRead - Allows reading of a user's messages.
 * @property {string} RelationshipsRead - Allows reading of a user's relationships.
 * @property {string} RoleConnectionsWrite - Allows writing of a user's role connections.
 * @property {string} Rpc - Allows RPC access.
 * @property {string} RpcActivitiesWrite - Allows writing of a user's RPC activities.
 * @property {string} RpcNotificationsRead - Allows reading of a user's RPC notifications.
 * @property {string} RpcVoiceRead - Allows reading of a user's RPC voice.
 * @property {string} RpcVoiceWrite - Allows writing of a user's RPC voice.
 * @property {string} Voice - Allows voice access.
 * @property {string} WebhookIncoming - Allows incoming webhook access.
 * @see {https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
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
