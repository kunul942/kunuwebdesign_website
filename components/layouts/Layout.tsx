import { Navbar } from '../UI';
import { Footer } from '../UI/Footer';
import { LayoutHeader } from '.';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout = ({ title = 'Kunu | Web Design', children }: Props) => {
    return (
        <div>
            <LayoutHeader title={title} />

            <Navbar />

            <div>{children}</div>
            <Footer />
        </div>
    );
};
