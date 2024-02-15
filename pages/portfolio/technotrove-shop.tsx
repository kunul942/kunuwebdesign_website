import { useContext } from 'react';
import { NextPage } from 'next';
import { UiContext } from '@/components/Mobile/context';

import { TechnoTroveShop } from '@/components/Desktop/portfolioPage/pages/';
import { TechnotroveShopMobile } from '@/components/Mobile/portfolioPage/pages';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const TechnotroveShopPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | TechnoTroveShop'>
            {!menu ? (
                <div>
                    <TechnoTroveShop />
                    <TechnotroveShopMobile />
                </div>
            ) : (
                <></>
            )}
        </LayoutMobile>
    );
};

export default TechnotroveShopPage;
