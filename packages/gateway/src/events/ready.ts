import type { Integer } from "@aurajs/core";

// https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure
export type HelloStructure = {
	heartbeat_interval: Integer;
};

// https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields
export type ReadyEventFields = {
	application: object;
	// TODO: Application Structure
	guilds: object;
	// TODO: UnavailableGuild Structure
	resume_gateway_url: string;
	session_id: string;
	shard?: [Integer, Integer];
	user: object;
	// TODO: User Structure
	v: Integer;
};
