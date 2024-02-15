import { Html, Head, Main, NextScript } from 'next/document';
import { kunuLogo } from '@/assets';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
                />
                <link rel='icon' type='image' href={kunuLogo.src} />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
