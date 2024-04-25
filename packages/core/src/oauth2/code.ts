/**
 * @fileoverview OAuth2 resources for Discord's API.
 * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant}
 */

import type { AuthenticationType } from "../base/base";
import type { SetString } from "../index";
import type { OAuth2Scopes } from "./resources";

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response}
 */
export type AccessTokenResponse = {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	scope: SetString<OAuth2Scopes> | string; // TODO: Check si c'est bien un SetString
	token_type: AuthenticationType;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant-client-credentials-access-token-response}
 */
export type ClientCredentialsAccessTokenResponse = {
	access_token: string;
	expires_in: number;
	scope: SetString<OAuth2Scopes> | string; // TODO: Check si c'est bien un SetString
	token_type: AuthenticationType;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 */
export type BotAuthParameters = {
	client_id: string;
	disable_guild_select: boolean;
	guild_id: string;
	permissions: string; // TODO: "the permissions you're requesting" Mettre les permissions
	scope: SetString<OAuth2Scopes> | string; // TODO: Check si c'est bien un SetString
};
