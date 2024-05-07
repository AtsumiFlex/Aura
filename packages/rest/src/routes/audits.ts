import type { AuditLogStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { AuditLogEventsEnum, Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Get Guild Audit Log
 *
 * Query parameters for the GetGuildAuditLog endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-params}
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
 * The inferred type of {@link QueryGetGuildAuditLog}
 */
export type QueryGetGuildAuditLogInfer = z.infer<typeof QueryGetGuildAuditLog>;

/**
 * Get Guild Audit Log
 *
 * Returns an audit log object for the guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
 */
export function GetGuildAuditLog<T extends AuditLogStructureInfer>(guildId: SnowflakeInfer, query?: QueryGetGuildAuditLogInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/audit-logs`,
		query: QueryGetGuildAuditLog.parse(query),
	};
}
