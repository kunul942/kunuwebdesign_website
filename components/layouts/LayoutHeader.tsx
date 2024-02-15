import Head from 'next/head';
import { kunuLogo } from '@/assets';

interface Props {
    title: string;
}

export const LayoutHeader = ({ title }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description'></meta>
            <meta name='og:title' content={title} />

            <meta
                name='description'
                content="Kunu Web Design specializes in the design and development of custom web applications. Our team of experts is dedicated to creating innovative solutions that not only meet but exceed our clients' expectations."
            />
            <meta name='author' content='Kunu Web Design' />
            <meta name='keywords' content='Kunu Web Design' />

            <link rel='canonical' href='https://kunuwebdesign-website.vercel.app/' />
            <link rel='icon' href={kunuLogo.src} />
            <link rel='apple-touch-icon' href={kunuLogo.src} />

            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://kunuwebdesign-website.vercel.app/' />
            <meta property='og:title' content='Kunu Web Design' />
            <meta
                property='og:description'
                content={`Kunu Web Design specializes in the design and development of custom web applications. Our team of experts is dedicated to creating innovative solutions that not only meet but exceed our clients' expectations.`}
            />
            <meta property='og:image' content={kunuLogo.src} />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@kunuwebdesign' />
            <meta name='twitter:creator' content='@kunuwebdesign' />
            <meta name='twitter:title' content='Kunu Web Design' />
            <meta
                name='twitter:description'
                content={`Kunu Web Design specializes in the design and development of custom web applications. Our team of experts is dedicated to creating innovative solutions that not only meet but exceed our clients' expectations.`}
            />
            <meta name='twitter:image' content={kunuLogo.src} />
        </Head>
    );
};
