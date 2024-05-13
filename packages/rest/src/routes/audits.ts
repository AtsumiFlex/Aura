import type {
	AuditLogStructureInfer,
	SnowflakeInfer,
} from "@aurajs/core";
import {
	AuditLogEventsEnum,
	BitwisePermissionFlags,
	Integer,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Get Guild Audit Log
 *
 * The following parameters can be used to filter which and how many audit log entries are returned.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-params}
 */
export const QueryGetGuildAuditLog = z.object({
	/**
	 * Entries from a specific user ID
	 */
	user_id: Snowflake.optional(),
	/**
	 * Entries for a specific audit log event
	 */
	action_type: AuditLogEventsEnum.optional(),
	/**
	 * Entries with ID less than a specific audit log entry ID
	 */
	before: Snowflake.optional(),
	/**
	 * Entries with ID greater than a specific audit log entry ID
	 */
	after: Snowflake.optional(),
	/**
	 * Maximum number of entries (between 1-100) to return, defaults to 50
	 */
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query Get Guild Audit Log Infer
 *
 * Is used to infer the type of the {@link QueryGetGuildAuditLog} object.
 */
export type QueryGetGuildAuditLogInfer = z.infer<typeof QueryGetGuildAuditLog>;

/**
 * Get Guild Audit Log
 *
 * Returns an audit log object for the guild. Requires the VIEW_AUDIT_LOG permission.
 *
 * The returned list of audit log entries is ordered based on whether you use before or after. When using before, the list is ordered by the audit log entry ID descending (newer entries first). If after is used, the list is reversed and appears in ascending order (older entries first). Omitting both before and after defaults to before the current timestamp and will show the most recent entries in descending order by ID, the opposite can be achieved using after=0 (showing oldest entries).
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
 */
export function GetGuildAuditLog(guildId: SnowflakeInfer, query?: QueryGetGuildAuditLogInfer): RestMakeRequestOptions<AuditLogStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/audit-logs`,
		query: QueryGetGuildAuditLog.parse(query),
		permissions: [BitwisePermissionFlags.ViewAuditLog],
	};
}
