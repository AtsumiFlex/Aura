import type {
	ApplicationRoleConnectionStructureInfer,
	ChannelStructureInfer,
	ConnectionStructureInfer,
	GuildMemberStructureInfer,
	GuildStructureInfer,
	SnowflakeInfer,
	UserStructureInfer,
} from "@aurajs/core";
import {
	ApplicationRoleConnectionMetadataStructure,
	Integer,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * JSON Modify Current User
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export const JSONModifyCurrentUser = z.object({
	username: z.string().optional(),
	avatar: z.string().nullable(),
});

/**
 * JSON Modify Current User Infer
 *
 * Is the inferred type of the {@link JSONModifyCurrentUser} zod object.
 */
export type JSONModifyCurrentUserInfer = z.infer<typeof JSONModifyCurrentUser>;

/**
 * Get Current User
 *
 * Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function GetCurrentUser<T extends UserStructureInfer>(): RestRequestOptions<T> {
	return {
		url: "/users/@me",
		method: "GET",
	};
}

/**
 * Get User
 *
 * Returns a user object for a given user ID.
 *
 * @see {https://discord.com/developers/docs/resources/user#get-user}
 */
export function GetUser<T extends UserStructureInfer>(userId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/users/${userId}`,
		method: "GET",
	};
}

/**
 * Modify Current User
 *
 * Modify the requester's user account settings. Returns a user object on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function ModifyCurrentUser<T extends UserStructureInfer>(json: JSONModifyCurrentUserInfer): RestRequestOptions<T> {
	return {
		url: "/users/@me",
		method: "PATCH",
		body: json,
	};
}

/**
 * Query Get Current User Guilds
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export const QueryGetCurrentUserGuilds = z.object({
	before: Snowflake,
	after: Snowflake,
	limit: Integer.min(1).max(200).default(200),
	with_counts: z.boolean(),
}).partial();

/**
 * Query Get Current User Guilds Infer
 *
 * Is the inferred type of the {@link QueryGetCurrentUserGuilds} zod object.
 */
export type QueryGetCurrentUserGuildsInfer = z.infer<typeof QueryGetCurrentUserGuilds>;

/**
 * Get Current User Guilds
 *
 * Returns a list of partial guild objects the current user is a member of. Requires the guilds OAuth2 scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function GetCurrentUserGuilds<T extends Partial<GuildStructureInfer>>(query?: QueryGetCurrentUserGuildsInfer): RestRequestOptions<T> {
	return {
		url: "/users/@me/guilds",
		method: "GET",
		query,
	};
}

/**
 * Get Current User Guild Member
 *
 * Returns a guild member object for the specified user.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetCurrentUserGuildMember<T extends GuildMemberStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/users/@me/guilds/${guildId}/member`,
		method: "GET",
	};
}

/**
 * Leave Guild
 *
 * Leave a guild. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function LeaveGuild(guildId: SnowflakeInfer): RestRequestOptions<null> {
	return {
		url: `/users/@me/guilds/${guildId}`,
		method: "DELETE",
	};
}

/**
 * JSON Create DM
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export const JSONCreateDM = z.object({ recipient_id: Snowflake });

/**
 * JSON Create DM Infer
 *
 * Is the inferred type of the {@link JSONCreateDM} zod object.
 */
export type JSONCreateDMInfer = z.infer<typeof JSONCreateDM>;

/**
 * Create DM
 *
 * Create a new DM channel with a user. Returns a DM channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function CreateDM<T extends ChannelStructureInfer>(json: JSONCreateDMInfer): RestRequestOptions<T> {
	return {
		url: "/users/@me/channels",
		method: "POST",
		body: json,
	};
}

/**
 * JSON Create Group DM
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export const JSONCreateGroupDM = z.object({
	access_tokens: z.array(z.string()),
	nicks: z.record(z.string()),
});

/**
 * JSON Create Group DM Infer
 *
 * Is the inferred type of the {@link JSONCreateGroupDM} zod object.
 */
export type JSONCreateGroupDMInfer = z.infer<typeof JSONCreateGroupDM>;

/**
 * Create Group DM
 *
 * Create a new group DM channel with multiple users. Returns a DM channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
// eslint-disable-next-line sonarjs/no-identical-functions
export function CreateGroupDM<T extends ChannelStructureInfer>(json: JSONCreateGroupDMInfer): RestRequestOptions<T> {
	return {
		url: "/users/@me/channels",
		method: "POST",
		body: json,
	};
}

/**
 * Get Current User Connections
 *
 * Returns a list of connection objects. Requires the connections OAuth2 scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function GetCurrentUserConnections<T extends ConnectionStructureInfer>(): RestRequestOptions<T> {
	return {
		url: "/users/@me/connections",
		method: "GET",
	};
}

/**
 * Get Current User Application Role Connection
 *
 * Returns the connection object of the current user's application.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection}
 */
export function GetCurrentUserApplicationRoleConnection<T extends ApplicationRoleConnectionStructureInfer>(applicationId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/users/@me/applications/${applicationId}/role-connection`,
		method: "GET",
	};
}

/**
 * JSON Update Current User Application Role Connection
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export const JSONUpdateCurrentUserApplicationRoleConnection = z.object({
	platform_name: z.string().optional(),
	platform_username: z.string().optional(),
	metadata: z.record(ApplicationRoleConnectionMetadataStructure).optional(),
});

/**
 * JSON Update Current User Application Role Connection Infer
 *
 * Is the inferred type of the {@link JSONUpdateCurrentUserApplicationRoleConnection} zod object.
 */
export type JSONUpdateCurrentUserApplicationRoleConnectionInfer = z.infer<typeof JSONUpdateCurrentUserApplicationRoleConnection>;

/**
 * Update Current User Application Role Connection
 *
 * Update the current user's application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection<T extends ApplicationRoleConnectionStructureInfer>(applicationId: SnowflakeInfer, json: JSONUpdateCurrentUserApplicationRoleConnectionInfer): RestRequestOptions<T> {
	return {
		url: `/users/@me/applications/${applicationId}/role-connection`,
		method: "PUT",
		body: json,
	};
}
