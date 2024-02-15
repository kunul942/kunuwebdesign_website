import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { useAnimations } from '@/hooks/useAnimations';
import { kunuLogo } from '@/assets';

export const Navbar = () => {
    const { pathname } = useRouter();

    const { fadeIn } = useAnimations();

    return (
        <div data-aos={fadeIn}>
            <div className='hidden md:block'>
                <div className='w-[90%] xl:w-[75%] 2xl:w-[65%] mx-auto'>
                    <div className='flex justify-between'>
                        <div className='my-auto'>
                            <Image
                                className='rounded-xl w-[200px] h-[150px] 2xl:w-[220px] 2xl:h-[170px]'
                                src={kunuLogo.src}
                                width={500}
                                height={500}
                                alt='KunuLogo'
                            />
                        </div>
                        <div className='my-auto'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
