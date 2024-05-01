import { z } from "zod";
import { Snowflake } from "../globals";
import { RoleStructure } from "./role";
import { UserStructure } from "./user";

export const EmojiStructure = z.object({
	id: Snowflake.optional(),
	name: z.string().optional(),
	roles: z.array(RoleStructure.pick({ id: true })).optional(),
	user: UserStructure.optional(),
	require_colons: z.boolean().optional(),
	managed: z.boolean().optional(),
	animated: z.boolean().optional(),
	available: z.boolean().optional(),
});
export type EmojiInfer = z.infer<typeof EmojiStructure>;
