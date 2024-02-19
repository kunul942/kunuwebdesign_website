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

export const Footer = () => {
    const { pathname } = useRouter();
    const { scrollTop } = useScrollTop();
    const { fadeOut, fadeDown, fadeIn } = useAnimations();

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
        <div>
            <div className='hidden md:block'>
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
                                    <p className='my-6 text-gray-600'>{el.text}</p>
                                </div>
                            ))}
                        </CarouselLibrary>
                    </div>
                    <div className='flex justify-between place-items-center md:w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto'>
                        <div className=''>
                            <Image
                                src={kunuLogo}
                                className='rounded-xl w-auto h-[100px] 2xl:w-[150px] 2xl:h-[150px]'
                                alt='image'
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className='flex tracking-widest'>
                            <Link
                                className='mx-2 lg:mx-4 xl:mx-6'
                                href='/'
                                passHref
                                prefetch={false}
                            >
                                <div
                                    className={`text-sm h-[35px] text-gray-600 ${
                                        pathname === '/'
                                            ? 'border-b-2 border-fuchsia-700 text-gray-400'
                                            : ''
                                    } hover:border-b-2 border-fuchsia-700 hover:text-gray-400`}
                                >
                                    <p>HOME</p>
                                </div>
                            </Link>
                            <Link
                                className='mx-2 lg:mx-4 xl:mx-6'
                                href='/services'
                                passHref
                                prefetch={false}
                            >
                                <div
                                    className={`text-sm h-[35px] text-gray-600 ${
                                        pathname === '/services'
                                            ? 'border-b-2 border-fuchsia-700 text-gray-400'
                                            : ''
                                    } hover:border-b-2 border-fuchsia-700 hover:text-gray-400`}
                                >
                                    <p>SERVICES</p>
                                </div>
                            </Link>
                            <Link
                                className='mx-2 lg:mx-4 xl:mx-6'
                                href='/portfolio'
                                passHref
                                prefetch={false}
                            >
                                <div
                                    className={`text-sm h-[35px] text-gray-600 ${
                                        pathname === '/portfolio'
                                            ? 'border-b-2 border-fuchsia-700 text-gray-400'
                                            : ''
                                    } hover:border-b-2 border-fuchsia-700 hover:text-gray-400`}
                                >
                                    <p>PORTFOLIO</p>
                                </div>
                            </Link>
                            <Link
                                className='ml-2 lg:ml-4 xl:mx-6'
                                href='/contact'
                                passHref
                                prefetch={false}
                            >
                                <div
                                    className={`text-sm h-[35px] text-gray-600 ${
                                        pathname === '/contact'
                                            ? 'border-b-2 border-fuchsia-700 text-gray-400'
                                            : ''
                                    } hover:border-b-2 border-fuchsia-700 hover:text-gray-400`}
                                >
                                    <p>CONTACT</p>
                                </div>
                            </Link>
                        </div>
                        <div className='flex'>
                            {SocialMedia.map(({ id, img, link }) => (
                                <Link
                                    href={link}
                                    target='_blank'
                                    passHref
                                    prefetch={false}
                                    key={id}
                                >
                                    <Image
                                        className='mx-2 h-[25px] mx-2 w-auto'
                                        src={img.src}
                                        alt='image'
                                        height={200}
                                        width={200}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='w-[80%] lg:w-[75%] 2xl:w-[65%] mx-auto mt-20 mb-10'>
                        <div className='flex justify-between'>
                            <div className='flex text-gray-400 '>
                                <p className='mx-2'>©{CURRENT_YEAR} KunuWebDesign</p>
                                <p className='mx-2'>Terms</p>
                                <p>Privacy</p>
                            </div>
                            <div className='flex text-gray-400 '>
                                <p className='mx-2'>Freelancer</p>
                                <p className='mx-2'>Job</p>
                                <p className='mx-2'>Design</p>
                                <p className='mx-2'>Tags</p>
                                <p className='mx-2'>Places</p>
                                <p>Resources</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => scrollTop('smooth')}>
                            <Image className='h-[50px] w-[40px]' src={arrowTop} alt='arrowTop' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
