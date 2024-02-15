import { useContext } from 'react';

import Image from 'next/image';

import { UiContext } from '../Mobile/context';

import { close, kunuLogo, menu } from '@/assets';
import Link from 'next/link';
import { navbarMobile } from '@/constants';

export const NavbarMobile = () => {
    const { menu: state, isMenuOpen, isMenuClose } = useContext(UiContext);

    return (
        <div className='md:hidden'>
            {state ? (
                <div className='w-[90%] mx-auto animate__animated animate__fadeInLeft'>
                    <div className='flex flex-col justify-between gap-[3.5rem] py-12'>
                        <div className='flex items-center'>
                            <div className='mx-auto'>
                                <div>
                                    <Image
                                        onClick={isMenuOpen}
                                        className='h-[22px] w-[22px]'
                                        src={menu}
                                        alt='kunuLogo'
                                        height={50}
                                        width={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div>
                                {navbarMobile.map(({ id, text, link }) => (
                                    <div className='py-8 text-center' key={id}>
                                        <Link
                                            onClick={isMenuOpen}
                                            href={link}
                                            passHref
                                            prefetch={false}
                                            className='text-[16px] text-gray-500 tracking-wide hover:text-gray-400'
                                        >
                                            {text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                onClick={isMenuOpen}
                                className='h-[100px] w-[100px]'
                                src={kunuLogo}
                                alt='kunuLogo'
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-[90%] mx-auto'>
                    <div className='flex items-center py-4 animate__animated animate__fadeIn'>
                        <div className='mr-auto'>
                            <div>
                                <Image
                                    onClick={isMenuClose}
                                    className='h-[25px] w-[25px]'
                                    src={close}
                                    alt='kunuLogo'
                                    height={50}
                                    width={50}
                                />
                            </div>
                        </div>
                        <div className='mr-auto'>
                            <Image
                                className='h-[80px] w-[80px]'
                                src={kunuLogo}
                                alt='kunuLogo'
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
