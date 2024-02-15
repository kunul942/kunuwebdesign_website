import Link from 'next/link';
import Image from 'next/image';

import { portfolioImagesPortada } from '@/constants';

export const PortfolioImages = () => {
    return (
        <div className='w-[80%] lg:w-[75%] 2xl:w-[65%] mx-auto xl:shadow-xl  mt-20 rounded-xl'>
            <div className='portfolioPageResponsive__grid'>
                {portfolioImagesPortada.map((el) => (
                    <Link
                        className='hoverEffect'
                        href={el.url}
                        passHref
                        prefetch={false}
                        key={el.id}
                    >
                        <Image
                            className='h-[600px] md:h-[800px] w-full object-cover rounded-xl xl:my-8 object-center'
                            src={el.img}
                            alt='portfolioImages'
                            width={5000}
                            height={5000}
                        />
                        <h3 className='mt-8 text-center text-gray-600 font-bold m-4'>
                            {el.companyName}
                        </h3>
                        <div className='border-b-2 border-fuchsia-700 w-[10%] mx-auto mb-8'></div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
