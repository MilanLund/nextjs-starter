import { JSX } from 'react';
import { INextJsRootData } from '../lib/models/page.model';
import './global.scss';
import './reset.scss';

export default function RootLayout(data: INextJsRootData): JSX.Element {
    return (
        <html lang="en">
            <body>{data.children}</body>
        </html>
    );
}

export const metadata = {
    icons: {
        icon: '/img/favicon.webp'
    }
};
