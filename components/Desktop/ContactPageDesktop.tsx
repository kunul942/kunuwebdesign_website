import { useAnimations } from '@/hooks/useAnimations';
import { Layout } from '../layouts';
import { ContactAbout, ContactForm } from './contactPage';

export const ContactPageDesktop = () => {
    const { fadeIn } = useAnimations();

    return (
        <Layout title='Contact | Web Design'>
            <div className='hidden md:block'>
                <div data-aos={fadeIn}>
                    <ContactAbout />
                    <div className='w-[70%] lg:w-[60%] 2xl:w-[45%] mx-auto my-28'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
