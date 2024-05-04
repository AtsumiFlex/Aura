import type { VoiceRegionStructureInfer } from "@aurajs/core";
import type { RestRequestOptions } from "../globals/rest";

/**
 * List Voice Regions
 *
 * Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function ListVoiceRegions<T extends VoiceRegionStructureInfer>(): RestRequestOptions<T> {
	return {
		url: "/voice/regions",
		method: "GET",
	};
}
