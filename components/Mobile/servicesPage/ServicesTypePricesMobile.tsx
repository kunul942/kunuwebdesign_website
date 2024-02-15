import Link from 'next/link';
import React from 'react';

export const ServicesTypePricesMobile = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-[18px] text-gray-600 font-bold'>Website Types & Prices</h1>
            <div className='tracking-widest mb-8 mt-10'>
                <div className='flex'>
                    <p className='text-gray-500'>Portfolio</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$440</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500'>Business</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$550</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500'>Ecommerce</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$650</p>
                </div>
                <p className='my-8 italic text-gray-400'>
                    Prices may change depending on your needs
                </p>
            </div>
            <div className='flex justify-center'>
                <button className='text-xs bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'>
                    <Link href='/contact' passHref prefetch={false}>
                        GET YOUR ORDER
                    </Link>
                </button>
            </div>
        </div>
    );
};
