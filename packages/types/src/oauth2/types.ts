/**
 * @fileoverview This file defines the types used in the OAuth2 package.
 * @see {@link https://discord.com/developers/docs/topics/oauth2#oauth2}
 */

import type { BitwisePermissionFlags } from "../permission";
import type { ApplicationStructure } from "../resources/application";
import type { UserStructure } from "../resources/user";
import type { OAuth2Scopes } from "./enum";

/**
 * @typedef {object} AccessTokenResponse
 * @description This type represents the response from an authorization code grant access token request.
 * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response}
 * @property
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
 * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant-client-credentials-access-token-response}
 * @property
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
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 * @property
 */
export type BotAuthParameters = {
	client_id: string;
	disable_guild_select: boolean;
	guild_id: string;
	permissions: BitwisePermissionFlags;
	scope: string;
};

/**
 * @typedef {object} GetCurrentAuthorizationInformationResponse
 * @description This type represents the response from a get current authorization information request.
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 * @property
 */
export type GetCurrentAuthorizationInformationResponse = {
	application: ApplicationStructure;
	expires: number;
	scopes: OAuth2Scopes[];
	user?: UserStructure;
};
