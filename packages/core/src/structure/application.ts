/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata}
 */

import type { LocaleString } from "../reference/locales";

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export type ApplicationRoleConnectionMetadata = {
	description: string;
	description_localizations?: Record<LocaleString, string>;
	key: string;
	name: string;
	name_localizations?: Record<LocaleString, string>;
	type: ApplicationRoleConnectionMetadataType;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataType {
	IntegerLessThanOrEqual = 1,
	IntegerGreaterThanOrEqual = 2,
	IntegerEqual = 3,
	IntegerNotEqual = 4,
	DateTimeLessThanOrEqual = 5,
	DateTimeGreaterThanOrEqual = 6,
	BooleanEqual = 7,
	BooleanNotEqual = 8,
}
