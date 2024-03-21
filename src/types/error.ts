export type ArrayError = {
	code: number;
	errors: {
		activities: {
			0: {
				platform: {
					_errors: { code: string; message: string; }[];
				};
				type: {
					_errors: { code: string; message: string; }[];
				};
			};
		};
	};
	message: string;
};

export type ObjectError = {
	code: number;
	errors: {
		access_token: {
			_errors: { code: string; message: string; }[];
		};
	};
	message: string;
};

export type RequestError = {
	code: number;
	errors: {
		_errors: { code: string; message: string; }[];
	};
	message: string;
};
