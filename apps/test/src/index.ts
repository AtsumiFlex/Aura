import { GatewayIntents } from "@aurajs/gateway";
import { Client } from "aurajs";

const client = new Client("token", { intents: [GatewayIntents.Guilds] });
