import { Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Hello Structure
 *
 * Represents the structure of the Hello payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#hello}
 */
export const HelloStructure = z.object({ heartbeat_interval: Integer });

/**
 * Hello Structure Infer
 *
 * Represents the inferred type of the {@link HelloStructure}
 */
export type HelloStructureInfer = z.infer<typeof HelloStructure>;
