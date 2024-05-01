import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../../globals";
import { ApplicationStructure } from "../../structure/application";
import { InviteTargetTypesEnum } from "../../structure/invite";
import { UserStructure } from "../../structure/user";

export const GatewayInviteDeleteFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	code: z.string(),
});
export type GatewayInviteDeleteInfer = z.infer<typeof GatewayInviteDeleteFields>;

export const GatewayInviteCreateFields = z.object({
	channel_id: Snowflake,
	code: z.string(),
	created_at: ISO8601,
	guild_id: Snowflake.optional(),
	inviter: UserStructure.optional(),
	max_age: Integer,
	max_uses: Integer,
	target_type: InviteTargetTypesEnum.optional(),
	target_user: UserStructure.optional(),
	target_application: ApplicationStructure.optional(),
	temporary: z.boolean(),
	uses: Integer,
});
export type GatewayInviteCreateInfer = z.infer<typeof GatewayInviteCreateFields>;
