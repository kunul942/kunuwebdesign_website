import { NextPage } from 'next';

import { PortfolioPageDesktop } from '../../components/Desktop/PortfolioPageDesktop';
import { PortfolioPageMobile } from '../../components/Mobile/PortfolioPageMobile';

const PortfolioPage: NextPage = () => {
    return (
        <div>
            <PortfolioPageDesktop />
            <PortfolioPageMobile />
        </div>
    );
};

export default PortfolioPage;
