import type { NextPage } from 'next';

import { HomePageDesktop } from '@/components/Desktop';
import { HomePageMobile } from '@/components/Mobile';

const HomePage: NextPage = () => {
    return (
        <div>
            <HomePageDesktop />
            <HomePageMobile />
        </div>
    );
};

export default HomePage;
