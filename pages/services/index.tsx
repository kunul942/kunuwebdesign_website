import { NextPage } from 'next';

import { ServicesPageDesktop } from '@/components/Desktop/ServicesPageDesktop';
import { ServicesPageMobile } from '@/components/Mobile';

const ServicePage: NextPage = () => {
    return (
        <div>
            <ServicesPageDesktop />
            <ServicesPageMobile />
        </div>
    );
};

export default ServicePage;
