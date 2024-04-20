/**
 * @fileoverview This file defines the types used in the OAuth2 package.
 * @see {@link https://discord.com/developers/docs/topics/oauth2#oauth2}
 */

type Oauth2Endpoints = {
	GetCurrentAuthorizationInformation: string;
	GetCurrentBotApplicationInformation: string;
};

/**
 * @type {Oauth2Endpoints}
 * @description This object contains the OAuth2 endpoints used in the application.
 */
export const OAuth2Endpoints: Oauth2Endpoints = {
	GetCurrentBotApplicationInformation: "oauth2/applications/@me",
	GetCurrentAuthorizationInformation: "oauth2/@me",
};
