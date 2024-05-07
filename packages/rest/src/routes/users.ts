import type {
	ApplicationRoleConnectionStructureInfer,
	ChannelStructureInfer,
	ConnectionStructureInfer,
	GuildMemberStructureInfer,
	GuildStructureInfer,
	SnowflakeInfer,
	UserStructureInfer,
} from "@aurajs/core";
import { ApplicationRoleConnectionMetadataStructure, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Current User
 *
 * Get the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function GetCurrentUser<T extends UserStructureInfer>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/users/@me",
	};
}

/**
 * Get User
 *
 * Returns a user object for a given user ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-user}
 */
export function GetUser<T extends UserStructureInfer>(userId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/users/${userId}`,
	};
}

/**
 * JSON Modify Current User
 *
 * Modify the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export const JSONModifyCurrentUser = z.object({
	username: z.string().optional(),
	avatar: z.string().optional(),
});

/**
 * JSON Modify Current User Infer
 *
 * The inferred type of {@link JSONModifyCurrentUser}
 */
export type JSONModifyCurrentUserInfer = z.infer<typeof JSONModifyCurrentUser>;

/**
 * Modify Current User
 *
 * Modify the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function ModifyCurrentUser<T extends UserStructureInfer>(json: JSONModifyCurrentUserInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: "/users/@me",
		body: JSONModifyCurrentUser.parse(json),
	};
}

/**
 * Query Get Current User Guilds
 *
 * Query parameters for the GetCurrentUserGuilds endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export const QueryGetCurrentUserGuilds = z.object({
	before: Snowflake.optional(),
	after: Snowflake.optional(),
	limit: Integer.min(1).max(200).default(200).optional(),
	with_counts: z.boolean().default(false).optional(),
});

/**
 * Query Get Current User Guilds Infer
 *
 * The inferred type of {@link QueryGetCurrentUserGuilds}
 */
export type QueryGetCurrentUserGuildsInfer = z.infer<typeof QueryGetCurrentUserGuilds>;

/**
 * Get Current User Guilds
 *
 * Returns a list of partial guild objects the current user is a member of.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function GetCurrentUserGuilds<T extends Partial<GuildStructureInfer>[]>(query?: QueryGetCurrentUserGuildsInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/users/@me/guilds",
		query: QueryGetCurrentUserGuilds.parse(query),
	};
}

/**
 * Get Current User Guild Member
 *
 * Returns a guild member object for the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetCurrentUserGuildMember<T extends GuildMemberStructureInfer>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/users/@me/guilds/${guildId}/member`,
	};
}

/**
 * Leave Guild
 *
 * Leave a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function LeaveGuild<T extends void>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/users/@me/guilds/${guildId}`,
	};
}

/**
 * Create DM
 *
 * Create a new DM channel with a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function CreateDM<T extends ChannelStructureInfer>(json: {
	recipient_id: SnowflakeInfer;
}): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: "/users/@me/channels",
		body: Snowflake.parse(json),
	};
}

/**
 * JSON Create Group DM
 *
 * Create a new group DM channel with multiple users.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
export const JSONCreateGroupDM = z.object({
	access_tokens: z.array(z.string()),
	nicks: z.record(Snowflake, z.string()).optional(),
});

/**
 * JSON Create Group DM Infer
 *
 * The inferred type of {@link JSONCreateGroupDM}
 */
export type JSONCreateGroupDMInfer = z.infer<typeof JSONCreateGroupDM>;

/**
 * Create Group DM
 *
 * Create a new group DM channel with multiple users.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
export function CreateGroupDM<T extends ChannelStructureInfer>(json: JSONCreateGroupDMInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: "/users/@me/channels",
		body: JSONCreateGroupDM.parse(json),
	};
}

/**
 * Get Current User Connections
 *
 * Returns a list of connection objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function GetCurrentUserConnections<T extends ConnectionStructureInfer[]>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/users/@me/connections",
	};
}

/**
 * Get Current User Application Role Connection
 *
 * Returns the connection object for the current user's application.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-connection}
 */
export function GetCurrentUserApplicationConnection<T extends ApplicationRoleConnectionStructureInfer>(applicationId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/users/@me/applications/${applicationId}/role-connection`,
	};
}

/**
 * JSON Update Current User Application Role Connection
 *
 * JSON body for the UpdateCurrentUserApplicationRoleConnection endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-connection-json-params}
 */
export const JSONUpdateCurrentUserApplicationRoleConnection = z.object({
	platform_name: z.string().max(50).nullable(),
	platform_username: z.string().max(100).nullable(),
	metadata: z.record(z.string().regex(/^[\d_a-z]{1,50}$/), ApplicationRoleConnectionMetadataStructure).optional(),
});

/**
 * JSON Update Current User Application Role Connection Infer
 *
 * The inferred type of {@link JSONUpdateCurrentUserApplicationRoleConnection}
 */
export type JSONUpdateCurrentUserApplicationRoleConnectionInfer = z.infer<typeof JSONUpdateCurrentUserApplicationRoleConnection>;

/**
 * Update Current User Application Role Connection
 *
 * Update the current user's application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection<T extends ApplicationRoleConnectionStructureInfer>(applicationId: SnowflakeInfer, json: JSONUpdateCurrentUserApplicationRoleConnectionInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/users/@me/applications/${applicationId}/role-connection`,
		body: JSONUpdateCurrentUserApplicationRoleConnection.parse(json),
	};
}
