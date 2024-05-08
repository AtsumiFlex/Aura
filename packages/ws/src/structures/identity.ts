import { Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Identify Connection Properties Structure
 *
 * Represents the connection properties that are sent to the server
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties}
 */
export const IdentifyConnectionPropertiesStructure = z.object({
	os: z.string(),
	browser: z.string(),
	device: z.string(),
});

/**
 * Identify Connection Properties Structure Infer
 *
 * Represents the inferred type of the {@link IdentifyConnectionPropertiesStructure}
 */
export type IdentifyConnectionPropertiesStructureInfer = z.infer<typeof IdentifyConnectionPropertiesStructure>;

/**
 * Identify Structure
 *
 * Represents the structure of the Identify payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#identify}
 */
export const IdentifyStructure = z.object({
	token: z.string(),
	properties: IdentifyConnectionPropertiesStructure,
	compress: z.boolean().default(false).optional(),
	large_threshold: Integer.min(50).max(250).default(50).optional(),
	shard: z.array(Integer).length(2).optional(),
	presence: z.any().optional(), // TODO: Presence Update Structure
	intents: Integer,
});

/**
 * Identify Structure Infer
 *
 * Represents the inferred type of the {@link IdentifyStructure}
 */
export type IdentifyStructureInfer = z.infer<typeof IdentifyStructure>;
