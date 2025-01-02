export interface INextJsRootData {
    children: React.ReactNode;
}

export interface INextJsPageData<TParams = Promise<SegmentParams>, TSearchParams = Promise<INextSearchParams>> {
    params: TParams;
    searchParams?: TSearchParams;
}

export interface INextSearchParams {
    [key: string]: string;
}

export type PageSlugParam = {
    slug: string;
};

export type SegmentParams = {
    [key: string]: string;
};
