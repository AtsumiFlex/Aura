/**
 * Voice Gateway
 *
 * This class is responsible for handling voice events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#voice}
 */

import { z } from "zod";
import { Snowflake } from "../../../core/src/globals/globals";

/**
 * Voice Server Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#voice-server-update}
 */
export const VoiceServerUpdateEventFields = z.object({
	token: z.string(),
	guild_id: Snowflake,
	endpoint: z.string().optional(),
});

/**
 * Voice Server Update Event Fields Infer
 *
 * Infer the type of a {@link VoiceServerUpdateEventFields} object.
 */
export type VoiceServerUpdateEventFieldsInfer = z.infer<typeof VoiceServerUpdateEventFields>;
