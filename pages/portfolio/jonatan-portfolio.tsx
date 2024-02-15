import { useContext } from 'react';
import { NextPage } from 'next';

import { UiContext } from '@/components/Mobile/context';
import { JonatanPortfolio } from '@/components/Desktop/portfolioPage/pages';
import { JonatanPortfolioMobile } from '@/components/Mobile/portfolioPage/pages';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const JonatanPortfolioPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | JonatanPortfolio'>
            {!menu ? (
                <div>
                    <JonatanPortfolio />
                    <JonatanPortfolioMobile />
                </div>
            ) : (
                <></>
            )}
        </LayoutMobile>
    );
};

export default JonatanPortfolioPage;
