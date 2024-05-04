import type { ChannelStructureInfer } from "../../../core/src/structures/channels";
import { GatewayEvents } from "./gateway";

class Test {
	public static test() {
		return "test";
	}
}

export const GatewayEventExtends = { [GatewayEvents.ChannelCreate]: (data: ChannelStructureInfer) => new Test() };
