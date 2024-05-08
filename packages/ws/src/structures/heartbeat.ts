import { Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Heartbeat Structure
 *
 * Represents the structure of the Heartbeat payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#heartbeat}
 */
export const HeartbeatStructure = z.object({ heartbeat_interval: Integer });

/**
 * Heartbeat Structure Infer
 *
 * Represents the inferred type of the {@link HeartbeatStructure}
 */
export type HeartbeatStructureInfer = z.infer<typeof HeartbeatStructure>;
