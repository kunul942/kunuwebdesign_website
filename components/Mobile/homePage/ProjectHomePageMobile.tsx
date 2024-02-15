import { homePageProjects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectHomePageMobile = () => {
    return (
        <div className='w-[90%] mx-auto mb-28'>
            <div className='flex justify-center my-12'>
                <div className='border-b-2 border-fuchsia-700 w-[15%] mr-4'></div>
                <p className='text-gray-600 text-sm tracking-widest'>MY WORK</p>
            </div>
            <h2 className='text-2xl text-center text-gray-800 font-bold'>Web Design Projects</h2>
            <div className='text-sm my-12 text-gray-500 text-justify'>
                <p>
                    We have developed the successful presence on the web of a large number of small
                    and medium-sized businesses, as well as entrepreneurs and self-employed around
                    the world.
                </p>
            </div>
            <div className='homePageResponsive__grid mb-8'>
                {homePageProjects.map(({ id, img, link }) => (
                    <Link href={link} passHref prefetch={false} key={id}>
                        <Image
                            className='rounded-2xl w-full h-[450px] object-cover shadow-xl hoverEffect mb-4'
                            src={img}
                            alt='logo'
                            width={11000}
                            height={1000}
                        />
                    </Link>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'>
                    <Link href='/portfolio' passHref prefetch={false}>
                        PORTFOLIO
                    </Link>
                </button>
            </div>
        </div>
    );
};
