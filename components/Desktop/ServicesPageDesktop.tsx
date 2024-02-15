import { useAnimations } from '@/hooks/useAnimations';
import { Layout } from '@/components/layouts';
import {
    ServicesAdditionalServices,
    ServicesHowWeWork,
    ServicesProces,
    ServicesTypePrices,
} from './servicesPage';
import { ServicesAbout } from '@/components/Desktop/servicesPage/ServicesAbout';

export const ServicesPageDesktop = () => {
    const { fadeDown } = useAnimations();

    return (
        <Layout title='Services | Web Design'>
            <div className='hidden md:block'>
                <div data-aos={fadeDown}>
                    <ServicesAbout />
                </div>
                <div data-aos={fadeDown}>
                    <ServicesTypePrices />
                </div>
                <div data-aos={fadeDown}>
                    <ServicesProces />
                </div>
                <div data-aos={fadeDown}>
                    <ServicesHowWeWork />
                </div>
                <div data-aos={fadeDown}>
                    <ServicesAdditionalServices />
                </div>
            </div>
        </Layout>
    );
};
