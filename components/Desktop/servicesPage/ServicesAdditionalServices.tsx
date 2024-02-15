export const ServicesAdditionalServices = () => {
    return (
        <div className='md:w-[90%] xl:w-[75%] 2xl:w-[50%] mx-auto my-28'>
            <h1 className='md:text-2xl lg:text-3xl text-gray-600 font-bold'>
                Additional Services & Prices
            </h1>

            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>Website updating</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>$40 / page</p>
                </div>
            </div>
            <div className='tracking-widest mb-8 mt-10'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>Domain & web hosting</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>$30 / year</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>SEO</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500 md:text-xl lg:text-2xl'>$20</p>
                </div>
            </div>
        </div>
    );
};
