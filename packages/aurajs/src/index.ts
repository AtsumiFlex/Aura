import { GetGuildEmoji, Rest } from "@aurajs/rest";

const rest = new Rest("");
const func = async () => {
	const data = await rest.makeRequest(GetGuildEmoji("1213054538760855582", "1223921994416914473"));

	console.log(data);
};

void func();
