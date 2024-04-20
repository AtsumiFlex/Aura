/**
 * @fileoverview This file defines the OAuth2 endpoints used in the application.
 */

type Oauth2Endpoints = {
	GetCurrentAuthorizationInformation: string;
	GetCurrentBotApplicationInformation: string;
};

/**
 * @type {Oauth2Endpoints}
 * @description This object contains the OAuth2 endpoints used in the application.
 * @property {string} GetCurrentBotApplicationInformation - Endpoint for getting the current bot application information. More details can be found at {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 * @property {string} GetCurrentAuthorizationInformation - Endpoint for getting the current authorization information. More details can be found at {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export const OAuth2Endpoints: Oauth2Endpoints = {
	GetCurrentBotApplicationInformation: "oauth2/applications/@me",
	GetCurrentAuthorizationInformation: "oauth2/@me",
};
