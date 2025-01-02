import { JSX } from 'react';
import { ImageComponent } from '../components/image/image.component';
import { LinkComponent } from '../components/web-link/web-link.component';
import { getMetadataHome } from '../lib/helpers/metadata.helper';
import { INextJsPageData } from '../lib/models/page.model';

export default function Home(data: INextJsPageData): JSX.Element {
    return (
        <>
            <ImageComponent src="/img/favicon.webp" alt="Testing image" width={150} height={150} />
            <LinkComponent href="https://www.milanlund.com">About the author</LinkComponent>
        </>
    );
}

export function generateMetadata() {
    return getMetadataHome();
}
