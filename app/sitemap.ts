import { MetadataRoute } from 'next';
import { toAbsoluteUrl } from '../lib/helpers/url.helper';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: toAbsoluteUrl('/'),
            lastModified: new Date()
        }
    ];
}
