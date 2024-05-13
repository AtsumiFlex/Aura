import type { GuildStructureInfer, SnowflakeInfer, UserStructureInfer } from "@aurajs/core";
import { Integer, OAuth2Scopes, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Current User
 *
 * Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function GetCurrentUser(): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: "/users/@me",
		scopes: [OAuth2Scopes.Identify],
	};
}

/**
 * Get User
 *
 * Returns a user object for a given user ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-user}
 */
export function GetUser(userId: SnowflakeInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: `/users/${userId}`,
	};
}

/**
 * JSON Params Modify Current User
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export const JSONParamsModifyCurrentUser = z.object({
	/**
	 * User's username, if changed may cause the user's discriminator to be randomized.
	 */
	username: z.string().optional(),
	/**
	 * If passed, modifies the user's avatar.
	 */
	avatar: z.string().nullable(),
});

/**
 * JSON Params Modify Current User Infer
 *
 * Is used to infer the type of the {@link JSONParamsModifyCurrentUser} object.
 */
export type JSONParamsModifyCurrentUserInfer = z.infer<typeof JSONParamsModifyCurrentUser>;

/**
 * Modify Current User
 *
 * Modify the requester's user account settings. Returns a user object on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function ModifyCurrentUser(json: JSONParamsModifyCurrentUserInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "PATCH",
		path: "/users/@me",
		body: JSONParamsModifyCurrentUser.parse(json),
	};
}

/**
 * Query Get Current User Guilds
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export const QueryGetCurrentUserGuilds = z.object({
	/**
	 * Get guilds before this guild ID
	 */
	before: Snowflake.optional(),
	/**
	 * Get guilds after this guild ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of guilds to return (1-200)
	 */
	limit: Integer.min(1).max(200).default(200).optional(),
	/**
	 * Include approximate member and presence counts in response
	 */
	with_counts: z.boolean().default(false).optional(),
});

/**
 * Query Get Current User Guilds Infer
 *
 * Is used to infer the type of the {@link QueryGetCurrentUserGuilds} object.
 */
export type QueryGetCurrentUserGuildsInfer = z.infer<typeof QueryGetCurrentUserGuilds>;

/**
 * Get Current User Guilds
 *
 * Returns a list of partial guild objects the current user is a member of. Requires the guilds OAuth2 scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function GetCurrentUserGuilds(query?: QueryGetCurrentUserGuildsInfer): RestMakeRequestOptions<Partial<GuildStructureInfer>[]> {
	return {
		method: "GET",
		path: "/users/@me/guilds",
		scopes: [OAuth2Scopes.Guilds],
		query: QueryGetCurrentUserGuilds.parse(query),
	};
}

/**
 * Get Current User Guild Member
 *
 * Returns a guild member object for the current user. Requires the guilds.members.read OAuth2 scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetCurrentUserGuildMember(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "GET",
		path: `/users/@me/guilds/${guildId}/member`,
		scopes: [OAuth2Scopes.GuildsMembersRead],
	};
}

/**
 * Leave Guild
 *
 * Leave a guild. Returns a 204 empty response on success. Fires a Guild Delete Gateway event and a Guild Member Remove Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function LeaveGuild(guildId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/users/@me/guilds/${guildId}`,
	};
}

/**
 * JSON Params Create DM
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export const JSONParamsCreateDM = z.object({
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: Snowflake,
});

/**
 * JSON Params Create DM Infer
 *
 * Is used to infer the type of the {@link JSONParamsCreateDM} object.
 */
export type JSONParamsCreateDMInfer = z.infer<typeof JSONParamsCreateDM>;

/**
 * Create DM
 *
 * Create a new DM channel with a user. Returns a DM channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function CreateDM(json: JSONParamsCreateDMInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: JSONParamsCreateDM.parse(json),
	};
}

/**
 * JSON Params Create Group DM
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export const JSONParamsCreateGroupDM = z.object({
	/**
	 * Access tokens of users that have granted your app the gdm.join scope
	 */
	access_tokens: z.array(z.string()),
	/**
	 * A dictionary of user ids to their respective nicknames
	 */
	nicks: z.record(Snowflake, z.string()),
});

/**
 * JSON Params Create Group DM Infer
 *
 * Is used to infer the type of the {@link JSONParamsCreateGroupDM} object.
 */
export type JSONParamsCreateGroupDMInfer = z.infer<typeof JSONParamsCreateGroupDM>;

/**
 * Create Group DM
 *
 * Create a new group DM channel with multiple users. Returns a DM channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
export function CreateGroupDM(json: JSONParamsCreateGroupDMInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: JSONParamsCreateGroupDM.parse(json),
	};
}

/**
 * Get Current User Connections
 *
 * Returns a list of connection objects. Requires the connections OAuth2 scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function GetCurrentUserConnections(): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: "/users/@me/connections",
		scopes: [OAuth2Scopes.Connections],
	};
}

/**
 * Get Current User Application Role Connection
 *
 * Returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection}
 */
export function GetCurrentUserApplicationRoleConnection(applicationId: SnowflakeInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: `/users/@me/applications/${applicationId}/role-connection`,
		scopes: [OAuth2Scopes.RoleConnectionsWrite],
	};
}

/**
 * JSON Params Update Current User Application Role Connection
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export const JSONParamsUpdateCurrentUserApplicationRoleConnection = z.object({
	/**
	 * The vanity name of the platform a bot has connected
	 */
	platform_name: z.string().max(50).optional(),
	/**
	 * The username on the platform a bot has connected
	 */
	platform_username: z.string().max(100).optional(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value for the user on the platform a bot has connected
	 */
	metadata: z.record(z.string().max(100), z.string().max(100)).optional(),
});

/**
 * JSON Params Update Current User Application Role Connection Infer
 *
 * Is used to infer the type of the {@link JSONParamsUpdateCurrentUserApplicationRoleConnection} object.
 */
export type JSONParamsUpdateCurrentUserApplicationRoleConnectionInfer = z.infer<typeof JSONParamsUpdateCurrentUserApplicationRoleConnection>;

/**
 * Update Current User Application Role Connection
 *
 * Updates the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection(applicationId: SnowflakeInfer, json: JSONParamsUpdateCurrentUserApplicationRoleConnectionInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "PATCH",
		path: `/users/@me/applications/${applicationId}/role-connection`,
		scopes: [OAuth2Scopes.RoleConnectionsWrite],
		body: JSONParamsUpdateCurrentUserApplicationRoleConnection.parse(json),
	};
}
