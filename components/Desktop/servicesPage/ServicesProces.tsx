import { servicesSimpleProcess } from '@/constants';

export const ServicesProces = () => {
    return (
        <div className='md:w-[90%] xl:w-[75%] 2xl:w-[50%] mx-auto'>
            <h1 className='md:text-2xl lg:text-3xl text-gray-600 font-bold mt-28'>
                Simple Process
            </h1>

            <div className='my-4 homepageThree__grid gap-[2.5rem] tracking-wide'>
                {servicesSimpleProcess.map(({ id, text }) => (
                    <div
                        key={id}
                        className='border-l-4 border-fuchsia-700 my-8 flex flex-col justify-center shadow-lg rounded-xl hoverEffect'
                    >
                        <p className='text-gray-500 md:text-[16px] lg:text-xl py-8 px-10'>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
