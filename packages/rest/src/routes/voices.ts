import type { VoiceRegionStructureInfer } from "@aurajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List Voice Regions
 *
 * Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function ListVoiceRegions(): RestMakeRequestOptions<VoiceRegionStructureInfer[]> {
	return {
		method: "GET",
		path: "/voice/regions",
	};
}
