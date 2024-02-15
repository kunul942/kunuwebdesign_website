import { useContext } from 'react';
import { NextPage } from 'next';

import { UiContext } from '@/components/Mobile/context';
import { TallerJRMobile } from '@/components/Mobile/portfolioPage/pages';
import { TallerJr } from '@/components/Desktop/portfolioPage/pages';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const TallerJRPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | Taller JR'>
            <div>
                {!menu ? (
                    <div>
                        <TallerJr />
                        <TallerJRMobile />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};

export default TallerJRPage;
