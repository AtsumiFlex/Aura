// https://discord.com/developers/docs/topics/gateway-events#integrations

import type { Snowflake } from "@aurajs/core";

// https://discord.com/developers/docs/topics/gateway-events#integration-create-integration-create-event-additional-fields
export type IntegrationCreateEventAdditionalFields = {
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#integration-update-integration-update-event-additional-fields
export type IntegrationUpdateEventAdditionalFields = {
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#integration-delete-integration-delete-event-fields
export type IntegrationDeleteEventFields = {
	application_id?: Snowflake;
	guild_id: Snowflake;
	integration_id: Snowflake;
};