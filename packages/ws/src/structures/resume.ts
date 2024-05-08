import { Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Resume Structure
 *
 * Represents the structure of the Resume payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#resume}
 */
export const ResumeStructure = z.object({
	token: z.string(),
	session_id: z.string(),
	seq: Integer,
});

/**
 * Resume Structure Infer
 *
 * Represents the inferred type of the {@link ResumeStructure}
 */
export type ResumeStructureInfer = z.infer<typeof ResumeStructure>;
