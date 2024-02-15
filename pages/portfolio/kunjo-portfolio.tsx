import { useContext } from 'react';
import { NextPage } from 'next';

import { UiContext } from '@/components/Mobile/context';
import { KunjoPortfolio } from '@/components/Desktop/portfolioPage/pages';
import { KunjoPortfolioMobile } from '@/components/Mobile/portfolioPage/pages';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const KunjoPortfolioPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | KunjoPortfolio'>
            {!menu ? (
                <div>
                    <KunjoPortfolio />
                    <KunjoPortfolioMobile />
                </div>
            ) : (
                <></>
            )}
        </LayoutMobile>
    );
};

export default KunjoPortfolioPage;
