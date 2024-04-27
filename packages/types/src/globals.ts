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
export type Nullable<T> = T | null;
export type Awaitable<T> = Promise<T> | T;
