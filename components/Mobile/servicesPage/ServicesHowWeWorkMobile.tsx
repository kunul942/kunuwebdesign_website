import { useState } from 'react';
import Image from 'next/image';
import { useAnimations } from '@/hooks/useAnimations';

import { arrowDown, arrowMinus } from '@/assets';

export const ServicesHowWeWorkMobile = () => {
    const [showFirstText, setShowFirstText] = useState(true);
    const [showSecondText, setShowSecondText] = useState(true);
    const [showThirdText, setShowThirdText] = useState(true);
    const [showFourthText, setShowFourthText] = useState(true);

    const { fadeIn } = useAnimations();

    return (
        <div className='mb-20'>
            <h1 className='text-[18px] text-gray-600 font-bold'>How We Work</h1>
            <div className='tracking-widest mb-8 mt-10'>
                <div>
                    <div className='flex justify-between'>
                        <h2
                            className={`${
                                !showFirstText ? 'text-gray-300 my-4' : 'text-gray-500 my-4'
                            } `}
                            onClick={() => setShowFirstText(true)}
                        >
                            Design & Development
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                {showFirstText ? (
                                    <Image
                                        onClick={() => setShowFirstText(false)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowDown}
                                        alt='arrowDown'
                                        height={100}
                                        width={100}
                                    />
                                ) : (
                                    <Image
                                        onClick={() => setShowFirstText(true)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowMinus}
                                        alt='arrowMinus'
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    {!showFirstText ? (
                        <p className='text-gray-500 my-4' data-aos={fadeIn}>
                            We create innovative responsive design that clearly communicate your
                            message & gives the best impression of your business, develop website,
                            add content, do onpage SEO.
                        </p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className='tracking-widest mb-8 mt-10'>
                <div>
                    <div className='flex justify-between'>
                        <h2
                            className={`${
                                !showSecondText ? 'text-gray-300 my-4' : 'text-gray-500 my-4'
                            } `}
                            onClick={() => setShowSecondText(true)}
                        >
                            Maintenance
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                {showSecondText ? (
                                    <Image
                                        onClick={() => setShowSecondText(false)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowDown}
                                        alt='arrowDown'
                                        height={100}
                                        width={100}
                                    />
                                ) : (
                                    <Image
                                        onClick={() => setShowSecondText(true)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowMinus}
                                        alt='arrowMinus'
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    {!showSecondText ? (
                        <p className='text-gray-500 my-4' data-aos={fadeIn}>
                            We can host your website, update it with fresh content, provide SEO
                            services, online marketing & tech support.
                        </p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className='tracking-widest mb-8 mt-10'>
                <div>
                    <div className='flex justify-between'>
                        <h2
                            className={`${
                                !showThirdText ? 'text-gray-300 my-4' : 'text-gray-500 my-4'
                            } `}
                            onClick={() => setShowThirdText(true)}
                        >
                            Research & Analysis
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                {showThirdText ? (
                                    <Image
                                        onClick={() => setShowThirdText(false)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowDown}
                                        alt='arrowDown'
                                        height={100}
                                        width={100}
                                    />
                                ) : (
                                    <Image
                                        onClick={() => setShowThirdText(true)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowMinus}
                                        alt='arrowMinus'
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    {!showThirdText ? (
                        <p className='text-gray-500 my-4 md:text-xl lg:text-2xl' data-aos={fadeIn}>
                            We analyze your competitors & new trends in the industry, make a
                            research, case study, strategy.
                        </p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className='tracking-widest mb-8 mt-10'>
                <div>
                    <div className='flex justify-between'>
                        <h2
                            className={`${
                                !showFourthText ? 'text-gray-300 my-4' : 'text-gray-500 my-4'
                            } `}
                            onClick={() => setShowFourthText(true)}
                        >
                            Testing
                        </h2>
                        <div className='flex items-center'>
                            <div>
                                {showFourthText ? (
                                    <Image
                                        onClick={() => setShowFourthText(false)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowDown}
                                        alt='arrowDown'
                                        height={100}
                                        width={100}
                                    />
                                ) : (
                                    <Image
                                        onClick={() => setShowFourthText(true)}
                                        className={`h-[20px] w-[20px]`}
                                        src={arrowMinus}
                                        alt='arrowMinus'
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    {!showFourthText ? (
                        <p className='text-gray-500 my-4' data-aos={fadeIn}>
                            We analyze site performance & improve it, check site display in various
                            browsers & systems.
                        </p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};
