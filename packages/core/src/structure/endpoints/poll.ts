import type { Integer, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params}
 */
export type JSONGetAnswerVoters = {
	after?: Snowflake;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters}
 */
export function GetAnswerVoters(channelId: Snowflake, messageId: Snowflake, answerId: Snowflake, query: JSONGetAnswerVoters) {
	return {
		method: "GET",
		path: `/channels/${channelId}/polls/${messageId}/answers/${answerId}`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#end-poll}
 */
export function EndPoll(channelId: Snowflake, messageId: Snowflake) {
	return {
		method: "POST",
		path: `/channels/${channelId}/polls/${messageId}/expire`,
	};
}
