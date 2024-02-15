import Image from 'next/image';
import Link from 'next/link';
import { homePageProjects } from '@/constants';

export const ProjectsHomePage = () => {
    return (
        <>
            <div>
                <div className='md:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto my-18 xl:shadow-lg rounded-2xl'>
                    <div className='w-[50%] mx-auto'>
                        <div className='flex mb-8'>
                            <div className='border-b-2 border-fuchsia-700 w-[10%] mr-4'></div>
                            <p className='text-gray-600 tracking-widest'>MY WORK</p>
                        </div>
                        <div className='md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-800 font-bold'>
                            Web Design Projects
                        </div>
                        <div className='text-[14px] xl:text-[15px] 2xl:text-[16px] mt-10 mb-20 text-gray-500'>
                            <p>
                                We have developed the successful presence on the web of a large
                                number of small and medium-sized businesses, as well as
                                entrepreneurs and self-employed around the world.
                            </p>
                        </div>
                    </div>
                    <div className='homePageResponsive__grid mb-8'>
                        {homePageProjects.map(({ id, img, link }) => (
                            <Link href={link} passHref prefetch={false} key={id}>
                                <Image
                                    className='rounded-2xl w-[400px] h-[400px] object-cover shadow-xl hoverEffect mb-4'
                                    src={img}
                                    alt='logo'
                                    width={11000}
                                    height={1000}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/portfolio' passHref prefetch={false}>
                            <button className='px-10 py-4 bg-fuchsia-700 text-sm text-white rounded-full hoverEffect mb-8'>
                                PORTFOLIO
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
