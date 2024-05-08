import { GatewayOpcodesEnum, Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Gateway Payload Structure
 *
 * Represents a payload that is sent to the server
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#payload-structure}
 */
export const GatewayPayloadStructure = z.object({
	op: GatewayOpcodesEnum,
	d: z.any().nullable(),
	s: Integer.nullable(),
	t: z.string().nullable(),
});

/**
 * Gateway Payload Structure Infer
 *
 * Represents the inferred type of the {@link GatewayPayloadStructure}
 */
export type GatewayPayloadStructureInfer = z.infer<typeof GatewayPayloadStructure>;
