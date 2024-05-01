import { z } from "zod";
import { Integer, ISO8601, Mixed, Snowflake } from "../../globals";
import { InviteTargetTypesEnum } from "../../structure/invite";

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
	inviter: Mixed.optional(), // TODO: User Structure
	max_age: Integer,
	max_uses: Integer,
	target_type: InviteTargetTypesEnum.optional(),
	target_user: Mixed.optional(), // TODO: User Structure
	target_application: Mixed.optional(), // TODO: Application Structure
	temporary: z.boolean(),
	uses: Integer,
});
export type GatewayInviteCreateInfer = z.infer<typeof GatewayInviteCreateFields>;
