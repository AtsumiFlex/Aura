import type { VoiceRegionStructureInfer } from "@aurajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List Voice Regions
 *
 * Returns an array of voice region objects that can be used when creating servers.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function ListVoiceRegions<T extends VoiceRegionStructureInfer[]>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/voice/regions",
	};
}
