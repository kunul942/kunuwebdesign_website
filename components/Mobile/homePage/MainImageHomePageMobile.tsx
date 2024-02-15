import { aboutImage2 } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

export const MainImageHomePageMobile = () => {
    const [text, count] = useTypewriter({
        words: [
            'Crafting captivating online experiences.',
            'Transforming ideas into digital realities.',
            'Elevate your online presence with design.',
            'Your story, beautifully designed online.',
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='w-[90%] mx-auto mb-28'>
            <div>
                <Image
                    className='w-full h-[300px] object-cover rounded-2xl'
                    src={aboutImage2}
                    alt='fondoWebsite'
                    width={5000}
                    height={5000}
                />
            </div>
            <div className='flex justify-center my-12'>
                <div className='border-b-2 border-fuchsia-700 w-[15%] mr-4'></div>
                <p className='text-gray-600 text-sm tracking-widest'>WELCOME TO KUNU WEB DESIGN</p>
            </div>
            <div className='my-12'>
                <span className='text-4xl text-gray-700'>{text}</span>
                <Cursor />
            </div>
            <div className='my-12 text-gray-500 text-[16px] tracking-widest'>
                <p className='2xl:mb-20 text-gray-500 text-justify'>
                    A place where we turn ideas into captivating online experiences. It&apos;s where
                    innovation meets design, and your digital presence takes the spotlight. Ready to
                    transform your vision into a standout website? Let&apos;s talk.
                </p>
            </div>
            <div className='flex justify-center'>
                <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'>
                    <Link href='/contact' passHref prefetch={false}>
                        GET IN TOUCH
                    </Link>
                </button>
            </div>
        </div>
    );
};
