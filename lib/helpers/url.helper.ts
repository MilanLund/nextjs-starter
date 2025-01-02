import { SITE_URL } from '../environment';

export function toAbsoluteUrl(path: string): string {
    return `${SITE_URL}/${unifyUrlPath(path)}`;
}

export function removeTrailingSlash(path: string | undefined | null): string {
    if (!path) {
        return '';
    }
    return path.endsWith('/') ? path.slice(0, -1) : path;
}

export function isAbsoluteUrl(url: string): boolean {
    return url.startsWith('http');
}

function unifyUrlPath(path: string): string {
    const trimmedPath = path.startsWith('/') ? path.slice(1) : path;
    return removeTrailingSlash(trimmedPath);
}
