import { ListGuildEmojis, Rest } from "@aurajs/rest";

const rest = new Rest("");
const func = async () => {
	const data = await rest.makeRequest(ListGuildEmojis("1213054538760855582"));

	console.log(data);
};

void func();
