/**
 * Audit Logs Resource
 *
 * When an administrative action is performed in a guild, an entry is added to its audit log. Viewing audit logs requires the VIEW_AUDIT_LOG permission and can be fetched by apps using the GET /guilds/{guild.id}/audit-logs endpoint, or seen by users in the guild's Server Settings. All audit log entries are stored for 45 days.
 *
 * When an app is performing an eligible action using the APIs, it can pass an X-Audit-Log-Reason header to indicate why the action was taken. More information is in the audit log entry section.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-logs-resource}
 */
