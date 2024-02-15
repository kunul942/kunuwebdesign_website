export const ServicesAdditionalServicesMobile = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-[18px] text-gray-600 font-bold'>Additional Services && Prices</h2>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500'>Website updating</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$40 / page</p>
                </div>
            </div>
            <div className='tracking-widest mb-8 mt-10'>
                <div className='flex'>
                    <p className='text-gray-500'>Domain & web hosting</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$30 / year</p>
                </div>
            </div>
            <div className='tracking-widest my-8'>
                <div className='flex'>
                    <p className='text-gray-500'>SEO</p>
                    <div
                        className='grow border-b-2'
                        style={{ borderColor: '#ebebeb', borderStyle: 'double' }}
                    ></div>
                    <p className='text-gray-500'>$20</p>
                </div>
            </div>
        </div>
    );
};
