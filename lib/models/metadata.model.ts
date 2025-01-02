export interface IMetadata {
    metadataBase: URL;
    title: string;
    description?: string;
    openGraph: {
        title: string;
        description?: string;
        images: string[];
    };
}

export interface IMetadataOptions {
    title: string;
    description?: string;
    ogTitle?: string;
    omitSiteNameInTitle?: boolean;
}
