import { useContext } from 'react';
import { LayoutMobile } from '../layouts/LayoutMobile';
import {
    ServicesAboutMobile,
    ServicesAdditionalServicesMobile,
    ServicesHowWeWorkMobile,
    ServicesTypePricesMobile,
} from './servicesPage';
import { useAnimations } from '@/hooks/useAnimations';
import { UiContext } from './context';

export const ServicesPageMobile = () => {
    const { menu } = useContext(UiContext);

    const { fadeDown } = useAnimations();

    return (
        <LayoutMobile title='Services | Web Design'>
            <div className='md:hidden'>
                {!menu ? (
                    <div className='w-[90%] mx-auto'>
                        <div data-aos={fadeDown}>
                            <ServicesAboutMobile />
                        </div>
                        <div data-aos={fadeDown}>
                            <ServicesTypePricesMobile />
                        </div>
                        <div data-aos={fadeDown}>
                            <ServicesHowWeWorkMobile />
                        </div>
                        <div data-aos={fadeDown}>
                            <ServicesAdditionalServicesMobile />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};
