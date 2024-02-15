import Link from 'next/link';
import Image from 'next/image';

import { kunuImage } from '@/assets';

export const AboutHomePageMobile = () => {
    return (
        <div className='w-[90%] mx-auto mb-28'>
            <div className='flex justify-center my-12'>
                <div className='border-b-2 border-fuchsia-700 w-[15%] mr-4'></div>
                <p className='text-gray-600 text-sm tracking-widest'>KUNU WEB DESIGN</p>
            </div>
            <h2 className='text-2xl text-center text-gray-800 font-bold'>
                Web design and digital marketing agency.
            </h2>
            <div className='text-sm my-12 text-gray-500 text-justify'>
                <p>
                    We have helped entrepreneurs from many parts of the world grow. We are a digital
                    agency specialized in the development and design of websites, online stores,
                    Blogs, Branding, Social Networks, SEM, SMM, SEO and more...
                </p>
                <p className='my-10'>
                    We offer the best web consulting and creative and effective solutions that adapt
                    to each business model and budget.
                </p>
            </div>
            <div className='p-4 bg-slate-100 rounded-xl border-l-4 border-fuchsia-700 text-justify'>
                <div className='flex'>
                    <p className='text-sm italic text-gray-700'>
                        My strategic actions are always guided by the needs of my clients, whom I
                        support and advise in order to achieve their successful presence on the web.
                    </p>
                </div>
            </div>
            <div className='mb-12 mt-8'>
                <div className='flex justify-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            className='rounded-full h-[70px] w-[70px] object-cover'
                            src={kunuImage}
                            alt='logo'
                            width={150}
                            height={200}
                        />
                        <div>
                            <h2 className='text-[18px] font-bold mt-2 text-center'>Kunu Lee</h2>
                            <p className='text-gray-500 text-sm mb-2 text-center'>@kunuwebdesign</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'>
                                <Link href='/contact' passHref prefetch={false}>
                                    CONTACT
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
