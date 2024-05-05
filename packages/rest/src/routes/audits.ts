import type { AuditLogStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { AuditLogEventsEnum, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Query Get Guild Audit Log
 *
 * The following parameters can be used to filter which and how many audit log entries are returned.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-parameters}
 */
export const QueryGetGuildAuditLog = z.object({
	user_id: Snowflake.optional(),
	action_type: AuditLogEventsEnum.optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query Get Guild Audit Log Infer
 *
 * Is the inferred type of the {@link QueryGetGuildAuditLog} zod object.
 */
export type QueryGetGuildAuditLogInfer = z.infer<typeof QueryGetGuildAuditLog>;

/**
 * Get Guild Audit Log
 *
 * Get the audit log for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
 */
export function GetGuildAuditLog<T extends AuditLogStructureInfer>(guildId: SnowflakeInfer, query?: QueryGetGuildAuditLogInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/audit-logs`,
		method: "GET",
		query: QueryGetGuildAuditLog.parse(query),
	};
}
