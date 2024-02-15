import { NextPage } from 'next';
import { UiContext } from '@/components/Mobile/context';

import { WeddingJoseDanielDesktop } from '@/components/Desktop/portfolioPage/pages';
import { WeddingJoseDanielMobile } from '@/components/Mobile/portfolioPage/pages';
import { useContext } from 'react';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const WeddingJoseDanielPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | Wedding Jose Daniel'>
            <div>
                {!menu ? (
                    <div>
                        <WeddingJoseDanielDesktop />
                        <WeddingJoseDanielMobile />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};

export default WeddingJoseDanielPage;
