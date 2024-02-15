import { useContext } from 'react';
import { NextPage } from 'next';

import { UiContext } from '@/components/Mobile/context';
import { TsksCalendar } from '@/components/Desktop/portfolioPage/pages';
import { TsksCalendarMobile } from '@/components/Mobile/portfolioPage/pages';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';

const TsksCalendarPage: NextPage = () => {
    const { menu } = useContext(UiContext);

    return (
        <LayoutMobile title='Portfolio | TsksCalendar'>
            {!menu ? (
                <div>
                    <TsksCalendar />
                    <TsksCalendarMobile />
                </div>
            ) : (
                <></>
            )}
        </LayoutMobile>
    );
};

export default TsksCalendarPage;
