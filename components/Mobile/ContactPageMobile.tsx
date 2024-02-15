import { useContext } from 'react';

import { UiContext } from './context';
import { LayoutMobile } from '../layouts/LayoutMobile';
import { useAnimations } from '@/hooks/useAnimations';
import { ContactMobile } from './contactPage';
import { ContactForm } from '../Desktop/contactPage';

export const ContactPageMobile = () => {
    const { menu } = useContext(UiContext);
    const { fadeIn } = useAnimations();

    return (
        <LayoutMobile title='Contact | Web Design'>
            <div className='md:hidden'>
                {!menu ? (
                    <div data-aos={fadeIn}>
                        <ContactMobile />
                        <div className='w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto'>
                            <ContactForm />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </LayoutMobile>
    );
};
