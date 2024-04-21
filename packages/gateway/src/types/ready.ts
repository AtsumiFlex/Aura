import type { ApplicationStructure, Integer, Snowflake, UserStructure } from "@aurajs/types";

// https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure
export type HelloStructure = {
	heartbeat_interval: Integer;
};

// https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields
export type ReadyEventFields = {
	application: ApplicationStructure;
	guilds: {
		id: Snowflake;
		unavailable: boolean;
	};
	resume_gateway_url: string;
	session_id: string;
	shard?: [Integer, Integer];
	user: UserStructure;
	v: Integer;
};
