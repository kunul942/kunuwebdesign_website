import { useContext } from 'react';
import { UiContext } from './context';

import { useAnimations } from '@/hooks/useAnimations';
import { LayoutMobile } from '../layouts/LayoutMobile';
import { PortfolioAboutMobile, PortfolioImagesMobile } from './portfolioPage';

export const PortfolioPageMobile = () => {
    const { menu } = useContext(UiContext);

    const { fadeIn } = useAnimations();
    return (
        <LayoutMobile title='Kunu | Web Design'>
            <div className='md:hidden'>
                {!menu ? (
                    <div data-aos={fadeIn}>
                        <PortfolioAboutMobile />
                        <PortfolioImagesMobile />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};
