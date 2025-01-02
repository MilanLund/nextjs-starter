'use client';

import Image from 'next/image';
import { JSX, Ref } from 'react';

interface IImageProps {
    src: string;
    alt: string;
    loading?: 'eager' | 'lazy';
    className?: string;
    width?: number;
    height?: number;
    id?: string;
    priority?: boolean;
    fill?: boolean;
    imageRef?: Ref<HTMLImageElement | null> | undefined;
    sizes?: string;
}

export function ImageComponent(data: IImageProps): JSX.Element {
    const { src, alt, loading, className, width, height, id, priority, fill, imageRef, sizes } = data;

    return (
        <Image
            ref={imageRef}
            className={className}
            id={id}
            fill={fill}
            priority={priority}
            src={src}
            width={width}
            height={height}
            alt={alt}
            loading={loading}
            sizes={sizes}
        />
    );
}
