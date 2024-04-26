import type { Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function GetCurrentUser() {
	return {
		method: "GET",
		path: "/users/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-user}
 */
export function GetUser(userId: Snowflake) {
	return {
		method: "GET",
		path: `/users/${userId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export type JSONModifyCurrentUser = {
	avatar?: string | null;
	username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function ModifyCurrentUser(json: JSONModifyCurrentUser) {
	return {
		method: "PATCH",
		path: "/users/@me",
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export type JSONGetCurrentUserGuilds = {
	after?: Snowflake;
	before?: Snowflake;
	limit?: number;
	with_counts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function GetCurrentUserGuilds(query?: JSONGetCurrentUserGuilds) {
	return {
		method: "GET",
		path: "/users/@me/guilds",
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guild-member}
 */
export function GetCurrentUserGuildMember(guildId: Snowflake) {
	return {
		method: "GET",
		path: `/users/@me/guilds/${guildId}/member`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function LeaveGuild(guildId: Snowflake) {
	return {
		method: "DELETE",
		path: `/users/@me/guilds/${guildId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export type JSONCreateDM = {
	recipient_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function CreateDM(json: JSONCreateDM) {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export type JSONCreateGroupDM = {
	access_tokens: string[];
	nicks: Record<Snowflake, string>;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
// eslint-disable-next-line sonarjs/no-identical-functions
export function CreateGroupDM(json: JSONCreateGroupDM) {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function GetCurrentUserConnections() {
	return {
		method: "GET",
		path: "/users/@me/connections",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection}
 */
export function GetCurrentUserApplicationRoleConnection(applicationId: Snowflake) {
	return {
		method: "GET",
		path: "/users/@me/applications/{application.id}/role-connection",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */

export type JSONUpdateCurrentUserApplicationRoleConnection = {
	metadata?: object; // TODO: object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	platform_name?: string;
	platform_username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection(applicationId: Snowflake, json: JSONUpdateCurrentUserApplicationRoleConnection) {
	return {
		method: "PUT",
		path: "/users/@me/applications/{application.id}/role-connection",
		body: json,
	};
}
