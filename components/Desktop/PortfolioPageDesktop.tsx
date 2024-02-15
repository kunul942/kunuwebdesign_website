import { useAnimations } from '@/hooks/useAnimations';
import { Layout } from '../layouts';
import { PortfolioAbout, PortfolioImages } from './portfolioPage';

export const PortfolioPageDesktop = () => {
    const { fadeIn } = useAnimations();
    return (
        <Layout title='Kunu | Web Design'>
            <div className='hidden md:block'>
                <div data-aos={fadeIn}>
                    <PortfolioAbout />
                    <PortfolioImages />
                </div>
            </div>
        </Layout>
    );
};
