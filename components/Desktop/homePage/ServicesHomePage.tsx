import Link from 'next/link';
import Image from 'next/image';
import { serviceHomeImages } from '@/constants';

export const ServicesHomePage = () => {
    return (
        <div>
            <div className='md:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto mt-28 mb-32'>
                <div className='w-[50%] mx-auto'>
                    <div className='flex mb-8'>
                        <div className='border-b-2 border-fuchsia-700 w-[10%] mr-4'></div>
                        <p className='text-gray-600 tracking-widest'>SERVICES</p>
                    </div>
                    <div className='md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-800 font-bold'>
                        Digital Online Services
                    </div>
                    <div className='text-[14px] xl:text-[15px] 2xl:text-[16px] mt-10 mb-20 text-gray-500'>
                        <p>
                            Your website is the virtual home of your business, which is why it is
                            important that it is totally unique. My goal is to design a website that
                            matches your brand, that impacts your customers.
                        </p>
                    </div>
                </div>
                <div className='homepageThree__grid my-12'>
                    {serviceHomeImages.map(({ id, img, text }) => (
                        <div className='mx-4 2xl:mx-8 hoverEffect' key={id}>
                            <Link href='/services' passHref prefetch={false}>
                                <Image
                                    className='h-[230px] lg:h-[270px] xl:h-[300px] 2xl:h-[350px] w-full object-cover rounded-xl object-center shadow-lg'
                                    src={img.src}
                                    alt='portfolioImages'
                                    width={1000}
                                    height={1000}
                                />
                                <p className='mt-10 text-gray-500 text-justify text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                                    {text}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='h-full bg-fuchsia-700 text-sm text-white rounded-full px-12 py-4 hoverEffect'>
                        <Link href='/services' passHref prefetch={false}>
                            SERVICES
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
