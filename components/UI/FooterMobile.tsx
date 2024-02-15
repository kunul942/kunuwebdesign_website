import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import CarouselLibrary from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FooterImages, SocialMedia } from '@/constants';
import { arrowTop, kunuLogo } from '@/assets';

import { useScrollTop } from '@/hooks/useScrollTop';
import { useAnimations } from '@/hooks/useAnimations';

const CURRENT_YEAR = new Date().getFullYear();

export const FooterMobile = () => {
    const { scrollTop } = useScrollTop();
    const { fadeIn } = useAnimations();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
    };

    return (
        <div data-aos={fadeIn}>
            <div className='md:hidden'>
                <div className='mt-20 mb-10'>
                    <div className='mt-32'>
                        <CarouselLibrary
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            showDots={false}
                            draggable={true}
                            arrows={false}
                            responsive={responsive}
                        >
                            {FooterImages.map((el) => (
                                <div key={el.id} className='mx-4 hoverEffect'>
                                    <Image
                                        src={el.img.src}
                                        alt='image'
                                        height={500}
                                        width={500}
                                        className='h-[150px] md:h-[200px] rounded-xl object-center w-full object-cover border-2'
                                    />
                                    <p className='my-6 text-sm text-gray-600'>{el.text}</p>
                                </div>
                            ))}
                        </CarouselLibrary>
                    </div>
                    <div className='w-[90%] mx-auto'>
                        <div className='flex justify-center mt-8'>
                            <Image
                                src={kunuLogo}
                                className='rounded-xl w-[110px] h-[110px]'
                                alt='image'
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className='flex justify-center'>
                            <div className='mt-2'>
                                <div className='pb-4 text-center'>
                                    <Link
                                        href='/'
                                        passHref
                                        prefetch={false}
                                        className='text-sm text-gray-500 tracking-wide hover:text-gray-400'
                                    >
                                        HOME
                                    </Link>
                                </div>
                                <div className='py-4 text-center'>
                                    <Link
                                        href='/services'
                                        passHref
                                        prefetch={false}
                                        className='text-sm text-gray-500 tracking-wide hover:text-gray-400'
                                    >
                                        SERVICES
                                    </Link>
                                </div>
                                <div className='py-4 text-center'>
                                    <Link
                                        href='/portfolio'
                                        passHref
                                        prefetch={false}
                                        className='text-sm text-gray-500 tracking-wide hover:text-gray-400'
                                    >
                                        PORTFOLIO
                                    </Link>
                                </div>
                                <div className='py-4 text-center'>
                                    <Link
                                        href='/contact'
                                        passHref
                                        prefetch={false}
                                        className='text-sm text-gray-500 tracking-wide hover:text-gray-400'
                                    >
                                        CONTACT
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-10'>
                            {SocialMedia.map(({ id, img, link }) => (
                                <Link
                                    href={link}
                                    target='_blank'
                                    passHref
                                    prefetch={false}
                                    key={id}
                                >
                                    <Image
                                        className='mx-2 h-[22px] mx-4 w-auto'
                                        src={img.src}
                                        alt='image'
                                        height={200}
                                        width={200}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto'>
                        <div className='text-sm'>
                            <div className='text-gray-400 flex justify-center py-2'>
                                <p className='mx-2'>©{CURRENT_YEAR} KunuWebDesign</p>
                                <p className='mx-2'>Terms</p>
                                <p className='mx-2'>Privacy</p>
                            </div>
                            <div className='text-gray-400 flex justify-center'>
                                <p className='mx-2'>Freelancer</p>
                                <p className='mx-2'>Job</p>
                                <p className='mx-2'>Design</p>
                                <p className='mx-2'>Tags</p>
                                <p className='mx-2'>Places</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <div onClick={() => scrollTop('smooth')}>
                            <Image className='h-[40px] w-[40px]' src={arrowTop} alt='arrowTop' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
