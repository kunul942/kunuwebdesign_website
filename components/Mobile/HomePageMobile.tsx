import { useContext } from 'react';
import { UiContext } from './context';

import { useAnimations } from '@/hooks/useAnimations';
import { LayoutMobile } from '../layouts/LayoutMobile';
import {
    MainImageHomePageMobile,
    AboutHomePageMobile,
    ServicesHomePageMobile,
    ProjectHomePageMobile,
} from './homePage';

export const HomePageMobile = () => {
    const { menu } = useContext(UiContext);
    const { fadeDown, fadeIn } = useAnimations();

    return (
        <LayoutMobile title='Kunu Web Design'>
            <div className='md:hidden'>
                {!menu ? (
                    <>
                        <div data-aos={fadeDown}>
                            <MainImageHomePageMobile />
                        </div>
                        <div data-aos={fadeIn}>
                            <AboutHomePageMobile />
                        </div>
                        <div data-aos={fadeDown}>
                            <ServicesHomePageMobile />
                        </div>
                        <div data-aos={fadeIn}>
                            <ProjectHomePageMobile />
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};
