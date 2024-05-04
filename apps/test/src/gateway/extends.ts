export class Test {
	public id;

	public name;

	public constructor(data: any) {
		this.id = data.id;
		this.name = data.name;
	}
}

export const GatewayEventExtends = { CHANNEL_CREATE: (data: any) => new Test(data) };
