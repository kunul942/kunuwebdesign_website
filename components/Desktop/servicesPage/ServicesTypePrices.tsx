import Link from 'next/link';

export const ServicesTypePrices = () => {
    return (
        <div className='md:w-[90%] xl:w-[75%] 2xl:w-[50%] mx-auto my-28'>
            <h1 className='md:text-2xl lg:text-3xl text-gray-600 font-bold'>
                Website Types & Prices
            </h1>

            <div className='tracking-widest mb-8 mt-10'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>Portfolio</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>$440</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>Business</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>$550</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>Ecommerce</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-[20px] lg:text-2xl'>$650</p>
                </div>
                <p className='my-8 italic text-gray-400 md:text-[20px] lg:text-xl'>
                    Prices may change depending on your needs
                </p>
            </div>
            <div className='flex justify-center'>
                <button className='h-full bg-fuchsia-700 text-sm text-white rounded-full px-10 py-4 hoverEffect'>
                    <Link href='/contact' passHref prefetch={false}>
                        GET YOUR ORDER
                    </Link>
                </button>
            </div>
        </div>
    );
};
