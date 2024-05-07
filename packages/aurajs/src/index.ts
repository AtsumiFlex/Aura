import { Rest } from "@aurajs/rest";

const rest = new Rest("");
const func = async () => {
	const data = await rest.makeRequest({
		method: "GET",
		url: "/users/@me",
	});

	console.log(data);
};

void func();
