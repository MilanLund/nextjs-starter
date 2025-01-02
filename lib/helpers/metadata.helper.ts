import { SITE_URL } from '../environment';
import { IMetadata, IMetadataOptions } from '../models/metadata.model';
import { removeInlineElements, stripHtmlTags } from './text.helper';
import { isAbsoluteUrl, toAbsoluteUrl } from './url.helper';

export function getMetadataHome(): IMetadata | undefined {
    return createMetadataObject({
        title: 'Next.js starter'
    });
}

function createPageTitle(title: string, omitSiteName: boolean): string {
    return omitSiteName ? title : `${title} | ${getSiteTitle()}`;
}

function getSiteTitle(): string {
    return 'by Milan Lund';
}

function createPageDescription(description: string): string {
    return removeInlineElements(stripHtmlTags(description));
}

function getOpenGraphImage(): string | undefined {
    return undefined;
}

function createMetadataObject(data: IMetadataOptions): IMetadata {
    const titleMetadata = createPageTitle(data.title, data.omitSiteNameInTitle ?? false);

    const descriptionMetadata = data.description ? createPageDescription(data.description) : undefined;

    const ogImageUrl = getOpenGraphImage();
    const ogImageAbsoluteUrl = ogImageUrl ? (isAbsoluteUrl(ogImageUrl) ? ogImageUrl : toAbsoluteUrl(ogImageUrl)) : undefined;

    return {
        metadataBase: new URL(SITE_URL),
        title: titleMetadata,
        description: descriptionMetadata,
        openGraph: {
            title: data.ogTitle ?? titleMetadata,
            description: descriptionMetadata,
            images: ogImageAbsoluteUrl ? [ogImageAbsoluteUrl] : []
        }
    };
}
