import Link from 'next/link';
import Image from 'next/image';

import 'react-multi-carousel/lib/styles.css';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { aboutImage2 } from '@/assets';

export const MainImageHomePage = () => {
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
        <div>
            <div className='flex md:w-[90%] xl:w-[80%] mx-auto homepage__grid bord'>
                <div className='w-[100%] mx-auto'>
                    <div className='my-12 2xl:my-16'>
                        <div className='flex mb-8'>
                            <div className='border-b-2 border-fuchsia-700 w-[5%] mr-4'></div>
                            <p className='text-gray-600 tracking-widest'>
                                WELCOME TO KUNU WEB DESIGN
                            </p>
                        </div>
                    </div>
                    <div className='my-12 xl:my-16'>
                        <div className='w-[80%]'>
                            <span className='md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-gray-700 w-[80%]'>
                                {text}
                            </span>
                            <Cursor />
                        </div>
                    </div>
                    <div className='my-6 lg:my-10 text-gray-500 text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-widest w-[80%]'>
                        <p className='2xl:mb-20 text-gray-500'>
                            A place where we turn ideas into captivating online experiences.
                            It&apos;s where innovation meets design, and your digital presence takes
                            the spotlight. Ready to transform your vision into a standout website?
                            Let&apos;s talk.
                        </p>
                    </div>
                    <div>
                        <button className='text-xs 2xl:text-xl bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect 2xl:mt-8'>
                            <Link href='/contact' passHref prefetch={false}>
                                GET IN TOUCH
                            </Link>
                        </button>
                    </div>
                </div>

                <Image
                    className='w-full md:h-[400px] xl:h-[500px] 2xl:h-[700px] object-cover rounded-2xl'
                    src={aboutImage2}
                    alt='fondoWebsite'
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
    );
};
