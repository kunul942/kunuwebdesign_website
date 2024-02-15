import Image from 'next/image';
import { Layout } from '@/components/layouts';

import { useAnimations } from '@/hooks/useAnimations';
import { tsksCalendarHome } from '@/constants';

export const TsksCalendar = () => {
    const { fadeIn } = useAnimations();

    return (
        <Layout title='Portfolio | Web Design'>
            <div className='hidden md:block' data-aos={fadeIn}>
                <div className='w-[80%] lg:w-[75%] 2xl:w-[65%] mx-auto mb-28'>
                    <div className='flex mb-20 justify-center'>
                        <div className='border-b-2 border-fuchsia-700 w-[10%] mr-4'></div>
                        <p className='text-gray-600 tracking-widest md:text-[16px] lg:text-xl'>
                            TSKS CALENDAR
                        </p>
                    </div>
                    <div className='portfolioTwoColums__grid'>
                        <div className='my-6'>
                            <div className='mt-6 mb-10'>
                                <h2 className='my-2 text-gray-700 font-bold md:text-[16px] lg:text-xl'>
                                    DATE:
                                </h2>
                                <h3 className='text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                                    November 2022
                                </h3>
                            </div>
                            <div className='my-10'>
                                <h2 className='my-2 text-gray-700 font-bold md:text-[16px] lg:text-xl'>
                                    SERVICES:
                                </h2>
                                <ul className='text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                                    <li>Web Design</li>
                                    <li>Landig Page</li>
                                    <li>Full Stack Website</li>
                                    <li>SEO</li>
                                </ul>
                            </div>
                            <div className='my-10'>
                                <h2 className='my-2 text-gray-700 font-bold md:text-[16px] lg:text-xl'>
                                    DESCRIPTION:
                                </h2>
                                <h3 className='text-gray-600 md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                                    A website where he is responsible for making those unforgettable
                                    moments special, specializing in wedding photography, focusing
                                    on immortalizing every heartfelt moment and charming detail..
                                </h3>
                            </div>
                        </div>
                        <div className='rounded-xl'>
                            <div className='mb-28 shadow-xl'>
                                {tsksCalendarHome.map((el) => (
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
        </Layout>
    );
};
