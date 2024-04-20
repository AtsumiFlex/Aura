/**
 * @fileoverview This file defines the types used in the OAuth2 package.
 */

import type { OAuth2Scopes } from "./enum";

/**
 * @typedef {object} AccessTokenResponse
 * @description This type represents the response from an authorization code grant access token request.
 * @see {https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response}
 * @property {string} access_token - The access token for the user.
 * @property {number} expires_in - The number of seconds before the access token expires.
 * @property {string} refresh_token - The refresh token for the user.
 * @property {string} scope - The scopes that the access token has access to.
 * @property {string} token_type - The type of the token.
 */
export type AccessTokenResponse = {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	token_type: string;
};

/**
 * @typedef {object} ClientCredentialsAccessTokenResponse
 * @description This type represents the response from a client credentials grant access token request.
 * @see {https://discord.com/developers/docs/topics/oauth2#client-credentials-grant-client-credentials-access-token-response}
 * @property {string} access_token - The access token for the client.
 * @property {number} expires_in - The number of seconds before the access token expires.
 * @property {string} scope - The scopes that the access token has access to.
 * @property {string} token_type - The type of the token.
 */
export type ClientCredentialsAccessTokenResponse = {
	access_token: string;
	expires_in: number;
	scope: string;
	token_type: string;
};

/**
 * @typedef {object} BotAuthParameters
 * @description This type represents the parameters for bot authorization.
 * @see {https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 * @property {string} client_id - The client ID of the bot.
 * @property {boolean} disable_guild_select - Whether to disable guild selection on the authorization page.
 * @property {string} guild_id - The ID of the guild to preselect on the authorization page.
 * @property {string} permissions - The permissions to request.
 * @property {string} scope - The scopes to request.
 */
export type BotAuthParameters = {
	client_id: string;
	disable_guild_select: boolean;
	guild_id: string;
	permissions: string;
	// TODO: Permissions flags
	scope: string;
};

/**
 * @typedef {object} GetCurrentAuthorizationInformationResponse
 * @description This type represents the response from a get current authorization information request.
 * @see {https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 * @property {object} application - The application object.
 * @property {number} expires - The number of seconds before the authorization information expires.
 * @property {OAuth2Scopes[]} scopes - The scopes that the authorization has access to.
 * @property {object} user - The user object.
 */
export type GetCurrentAuthorizationInformationResponse = {
	application: object;
	// TODO: Application object
	expires: number;
	scopes: OAuth2Scopes[];
	user?: object;
	// TODO: User object
};
