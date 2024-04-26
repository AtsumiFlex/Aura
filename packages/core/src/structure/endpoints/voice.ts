/**
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function ListVoiceRegions() {
	return {
		method: "GET",
		path: "/voice/regions",
	};
}
