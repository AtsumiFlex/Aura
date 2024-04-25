/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 */
export function GetCurrentUserApplicationInformation() {
	return {
		method: "GET",
		path: "/oauth2/applications/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function GetCurrentUserAuthorizationInformation() {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
