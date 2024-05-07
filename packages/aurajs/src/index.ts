import type { UserStructureInfer } from "@aurajs/core";
import { UserStructure } from "@aurajs/core";

(async () => {
	try {
		const user: UserStructureInfer = {
			id: "12345678901237823",
			username: "Example",
			discriminator: "1234",
			global_name: "Example#1234",
			avatar: "a_1234567890abcdef1234567890abcdef",
		};
		await UserStructure.parseAsync(user);
		console.log("User is valid");
	} catch (error) {
		console.error(error);
	}
})();
