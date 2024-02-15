import { serviceHomeImages } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const ServicesHomePageMobile = () => {
    return (
        <div className='w-[90%] mx-auto mb-28'>
            <div className='flex justify-center my-12'>
                <div className='border-b-2 border-fuchsia-700 w-[15%] mr-4'></div>
                <p className='text-gray-600 text-sm tracking-widest'>SERVICES</p>
            </div>
            <h2 className='text-2xl text-center text-gray-800 font-bold'>
                Digital Online Services
            </h2>
            <div className='my-12 text-sm text-gray-500 text-justify'>
                <p>
                    Your website is the virtual home of your business, which is why it is important
                    that it is totally unique. My goal is to design a website that matches your
                    brand, that impacts your customers.
                </p>
            </div>
            <div className='my-12'>
                {serviceHomeImages.map(({ id, img, text }) => (
                    <div className='my-12 hoverEffect' key={id}>
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
                <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'>
                    <Link href='/services' passHref prefetch={false}>
                        SERVICES
                    </Link>
                </button>
            </div>
        </div>
    );
};
