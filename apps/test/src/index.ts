import { ClientGateway } from "@aurajs/core/dist/gateway/client";
import { GatewayIntents } from "@aurajs/core/dist/gateway/intents";

const client = new ClientGateway("", { intents: [GatewayIntents.Guilds, GatewayIntents.GuildMembers, GatewayIntents.GuildModeration, GatewayIntents.GuildEmojisAndStickers, GatewayIntents.GuildIntegrations, GatewayIntents.GuildWebhooks, GatewayIntents.GuildInvites, GatewayIntents.GuildVoiceStates, GatewayIntents.GuildPresences, GatewayIntents.GuildMessages, GatewayIntents.GuildMessageReactions, GatewayIntents.GuildMessageTyping, GatewayIntents.DirectMessages, GatewayIntents.DirectMessageReactions, GatewayIntents.DirectMessageTyping, GatewayIntents.MessageContent, GatewayIntents.GuildScheduledEvents, GatewayIntents.AutoModerationConfigurations, GatewayIntents.AutoModerationExecution, GatewayIntents.GuildMessagePolls, GatewayIntents.DirectMessagePolls] });
client.on("message", (data: any) => {
	console.log(JSON.parse(data));
});
