/**
 * Invites Gateway
 *
 * All Invite related events are only sent to bot users with the MANAGE_CHANNELS permission on the channel.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invites}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../../globals/globals";
import { ApplicationStructure } from "../../structures/applications";
import { InviteTargetTypesEnum } from "../../structures/invites";
import { UserStructure } from "../../structures/user";

/**
 * Invite Delete Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#invite-delete}
 */
export const InviteDeleteEventFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	code: z.string(),
});

/**
 * Invite Delete Event Fields Infer
 *
 * Infer the type of a {@link InviteDeleteEventFields} object.
 */
export type InviteDeleteEventFieldsInfer = z.infer<typeof InviteDeleteEventFields>;

/**
 * Invite Create Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#invite-create}
 */
export const InviteCreateEventFields = z.object({
	channel_id: Snowflake,
	code: z.string(),
	created_at: z.string(),
	guild_id: Snowflake.optional(),
	inviter: UserStructure,
	max_age: Integer,
	max_uses: Integer,
	target_type: InviteTargetTypesEnum.optional(),
	target_user: UserStructure.optional(),
	target_application: ApplicationStructure.partial().optional(),
	temporary: z.boolean(),
	uses: Integer,
});

/**
 * Invite Create Event Fields Infer
 *
 * Infer the type of a {@link InviteCreateEventFields} object.
 */
export type InviteCreateEventFieldsInfer = z.infer<typeof InviteCreateEventFields>;
