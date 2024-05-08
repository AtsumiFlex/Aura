import { ApplicationStructure, Integer, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Ready Event Fields
 *
 * Represents the structure of the Ready Event Fields payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#ready-ready-event-fields}
 */
export const ReadyEventFields = z.object({
	v: Integer,
	user: UserStructure,
	guilds: z.array(z.object({
		id: Snowflake,
		unavailable: z.boolean(),
	})),
	session_id: z.string(),
	resume_gateway_url: z.string(),
	shard: z.array(Integer).length(2).optional(),
	application: ApplicationStructure.partial(),
});

/**
 * Ready Event Fields Infer
 *
 * Represents the inferred type of the {@link ReadyEventFields}
 */
export type ReadyEventFieldsInfer = z.infer<typeof ReadyEventFields>;
