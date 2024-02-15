import Head from 'next/head';

interface Props {
    title: string;
}

export const LayoutHeader = ({ title }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='og:title' content={title} />
        </Head>
    );
};
