import Link from 'next/link';
import { JSX } from 'react';
import { URL_NOT_FOUND } from '../../lib/environment';
import { isAbsoluteUrl } from '../../lib/helpers/url.helper';

type LinkTargetType = '_blank' | '_self' | '_parent' | '_top';

interface ILinkProps {
    href: string;
    id?: string;
    children?: React.ReactNode | undefined;
    target?: LinkTargetType;
    className?: string;
    ariaLabel?: string;
    customAttribute?: string;
    originalFullUrl?: string;
    forcePrefetch?: boolean;
}

export function LinkComponent(data: ILinkProps): JSX.Element {
    const targetUrl = data.href || URL_NOT_FOUND;
    const targetAttribute = data.target || (isAbsoluteUrl(targetUrl) ? '_blank' : undefined);

    if (targetAttribute === '_blank') {
        return (
            <a
                id={data.id}
                href={targetUrl}
                rel="noreferrer"
                target={targetAttribute}
                className={data.className}
                aria-label={data.ariaLabel}
            >
                {data.children}
            </a>
        );
    }

    if (targetUrl.includes('#')) {
        return (
            <a id={data.id} href={targetUrl} className={data.className} aria-label={data.ariaLabel}>
                {data.children}
            </a>
        );
    }

    return (
        <Link id={data.id} href={data.href} className={data.className} aria-label={data.ariaLabel} prefetch={true}>
            {data.children}
        </Link>
    );
}
