import { useContext } from 'react';
import { UiContext } from '../Mobile/context';

import { LayoutHeader } from './LayoutHeader';
import { NavbarMobile, FooterMobile } from '../UI/';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const LayoutMobile = ({ title = 'Kunu | Web Design', children }: Props) => {
    const { menu } = useContext(UiContext);

    return (
        <div>
            <LayoutHeader title={title} />
            <NavbarMobile />

            <div>{children}</div>
            {!menu ? <FooterMobile /> : <></>}
        </div>
    );
};
