import { ApplicationStructure, Integer, ISO8601Timestamp, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";

/**
 * Invite Delete Event Fields
 *
 * Sent when an invite is deleted
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-delete}
 */
export const InviteDeleteEventFields = z.object({
	channel_id: Snowflake,
	guild_id: Snowflake.optional(),
	code: z.string(),
});

/**
 * Invite Create Event Fields Infer
 *
 * Represents the inferred type of the {@link InviteCreateEventFields}
 */
export type InviteCreateEventFieldsInfer = z.infer<typeof InviteCreateEventFields>;

/**
 * Invite Create Event Fields
 *
 * Sent when an invite is created
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-create}
 */
export const InviteCreateEventFields = z.object({
	channel_id: Snowflake,
	code: z.string(),
	created_at: ISO8601Timestamp,
	guild_id: Snowflake.optional(),
	inviter: UserStructure,
	max_age: Integer,
	max_uses: Integer,
	target_type: Integer.optional(),
	target_user: UserStructure.optional(),
	target_application: ApplicationStructure.partial().optional(),
	temporary: z.boolean(),
	uses: Integer.default(0),
});

/**
 * Invite Delete Event Fields Infer
 *
 * Represents the inferred type of the {@link InviteDeleteEventFields}
 */
export type InviteDeleteEventFieldsInfer = z.infer<typeof InviteDeleteEventFields>;
