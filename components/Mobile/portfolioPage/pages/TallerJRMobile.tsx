import Image from 'next/image';
import { LayoutMobile } from '@/components/layouts/LayoutMobile';
import { useAnimations } from '@/hooks/useAnimations';
import { portfolioTallerJrHome, portfolioTallerServices, portfolioTallerAbout } from '@/constants';

export const TallerJRMobile = () => {
    const { fadeIn } = useAnimations();

    return (
        <div className='md:hidden'>
            <div data-aos={fadeIn}>
                <div className='w-[80%] mx-auto mb-28'>
                    <div className='flex justify-center my-12'>
                        <div className='border-b-2 border-fuchsia-700 w-[15%] mr-4'></div>
                        <p className='text-gray-600 text-[18px] tracking-widest'>TALLER JR</p>
                    </div>
                    <div className='my-6'>
                        <div className='mt-6 mb-10'>
                            <h2 className='my-2 text-gray-700 font-bold text-[16px]'>DATE:</h2>
                            <h3 className='text-gray-500 text-[16px]'>March 2023</h3>
                        </div>
                        <div className='my-10'>
                            <h2 className='my-2 text-gray-700 font-bold text-[16px]'>SERVICES:</h2>
                            <ul className='text-gray-500 text-[16px]'>
                                <li>Web Design</li>
                                <li>Landing Page</li>
                                <li>SEO</li>
                            </ul>
                        </div>
                        <div className='my-10'>
                            <h2 className='my-2 text-gray-700 font-bold text-[16px]'>
                                DESCRIPTION:
                            </h2>
                            <h3 className='text-gray-500 text-[16px]'>
                                A website where he is responsible for making those unforgettable
                                moments special, specializing in wedding photography, focusing on
                                immortalizing every heartfelt moment and charming detail..
                            </h3>
                        </div>
                    </div>
                    <div className='rounded-xl my-20'>
                        <div className='mb-20 shadow-xl'>
                            {portfolioTallerJrHome.map((el) => (
                                <Image
                                    key={el.id}
                                    className='w-full object-cover rounded-xl mt-4'
                                    src={el.img.src}
                                    alt='portfolioImages'
                                    width={5000}
                                    height={5000}
                                />
                            ))}
                        </div>
                        <div className='mb-20 shadow-xl'>
                            {portfolioTallerAbout.map((el) => (
                                <Image
                                    key={el.id}
                                    className='w-full object-cover rounded-xl mt-4'
                                    src={el.img.src}
                                    alt='portfolioImages'
                                    width={5000}
                                    height={5000}
                                />
                            ))}
                        </div>
                        <div className='mb-20 shadow-xl'>
                            {portfolioTallerServices.map((el) => (
                                <Image
                                    key={el.id}
                                    className='w-full object-cover rounded-xl mt-4'
                                    src={el.img.src}
                                    alt='portfolioImages'
                                    width={5000}
                                    height={5000}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
