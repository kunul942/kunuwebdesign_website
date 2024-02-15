import { useAnimations } from '@/hooks/useAnimations';
import { Layout } from '../layouts';
import { AboutHomePage, MainImageHomePage, ProjectsHomePage, ServicesHomePage } from './homePage';

export const HomePageDesktop = () => {
    const { fadeDown, fadeIn } = useAnimations();
    return (
        <Layout title='Kunu | Web Design'>
            <div className='hidden md:block'>
                <div data-aos={fadeDown}>
                    <MainImageHomePage />
                </div>
                <div data-aos={fadeIn}>
                    <AboutHomePage />
                </div>
                <div data-aos={fadeDown}>
                    <ServicesHomePage />
                </div>
                <div data-aos={fadeIn}>
                    <ProjectsHomePage />
                </div>
            </div>
        </Layout>
    );
};
