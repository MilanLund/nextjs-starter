import { removeTrailingSlash } from './helpers/url.helper';

export const SITE_URL: string = removeTrailingSlash(process.env.SITE_URL);
export const URL_NOT_FOUND: string = `/404`;
