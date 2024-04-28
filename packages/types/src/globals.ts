/**
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export type Snowflake = string;
export type Integer = number;
export type Double = number;
export type Float = number;
export type ISO8601Timestamp = string;
export type If<T, Y, N> = T extends true ? Y : N;
export type IfEquals<X, Y, Yea, Nay> = X extends Y ? Y extends X ? Yea : Nay : Nay;
export type Awaitable<T> = Promise<T> | T;
export type SetRequired<T, K extends keyof T> = Required<Pick<T, K>> & T;
export type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & T;
export type SetString<T extends bigint | boolean | number | string | null | undefined> = `${T}`;
