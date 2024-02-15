import { aboutImage2, kunuImage, homePageAboutImage } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

export const AboutHomePage = () => {
    return (
        <div>
            <div className='homepage__grid md:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto my-28'>
                <div>
                    <Image
                        className='md:h-[350px] lg:h-[400px] 2xl:h-[500px] md:w-[90%] lg:w-[80%] 2xl:w-[75%] rounded-full object-cover mt-8'
                        src={homePageAboutImage}
                        alt='website'
                        width={5000}
                        height={5000}
                    />
                </div>
                <div>
                    <div className='flex mb-8'>
                        <div className='border-b-2 border-fuchsia-700 w-[10%] mr-4'></div>
                        <p className='text-gray-600 tracking-widest'>KUNU WEB DESIGN</p>
                    </div>
                    <h1 className='text-2xl xl:text-3xl 2xl:text-4xl text-gray-800 font-bold'>
                        Web design and digital marketing agency.
                    </h1>
                    <div className='text-[14px] xl:text-[15px] 2xl:text-[16px] my-10 text-gray-500'>
                        <p>
                            We have helped entrepreneurs from many parts of the world grow. We are a
                            digital agency specialized in the development and design of websites,
                            online stores, Blogs, Branding, Social Networks, SEM, SMM, SEO and
                            more...
                        </p>
                        <p className='my-10'>
                            We offer the best web consulting and creative and effective solutions
                            that adapt to each business model and budget.
                        </p>
                    </div>
                    <div className='md:p-4  2xl:p-12 bg-slate-100 rounded-xl border-l-4 border-fuchsia-700'>
                        <div className='flex'>
                            <p className='md:text-[14px] 2xl:text-[16px] italic text-gray-700'>
                                My strategic actions are always guided by the needs of my clients,
                                whom I support and advise in order to achieve their successful
                                presence on the web.
                            </p>
                        </div>
                    </div>
                    <div className='flex place-items-center 2xl:gap-[0.5rem] xl:w-[80%] my-10'>
                        <Image
                            className='rounded-full h-[70px] w-[80px] xl:w-[100px] xl:h-[100px] object-cover'
                            src={kunuImage}
                            alt='logo'
                            width={150}
                            height={200}
                        />
                        <div className='mr-auto ml-6'>
                            <h2 className='md:text-xl xl:text-2xl font-bold'>Kunu Lee</h2>
                            <p className='text-gray-500 text-sm mt-2'>@kunuwebdesign</p>
                        </div>
                        <div>
                            <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect 2xl:mt-8'>
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
