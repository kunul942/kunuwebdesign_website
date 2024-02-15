import { useField, FieldHookConfig, ErrorMessage } from 'formik';
import React, { ClassAttributes, InputHTMLAttributes } from 'react';

interface Props {
    label?: string;
}
export const MyTextInput = ({
    label,
    className = '',
    ...props
}: Props &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>) => {
    const [field, metadata] = useField(props);
    return (
        <>
            <ErrorMessage name={props.name} component='h2' className='text-red-400 py-2' />
            <label htmlFor=''>{label}</label>
            <input
                className={`${className} p-[20px] block bg-gray-100 h-[50px] focus:outline-none w-[100%] mb-[2rem]`}
                {...field}
                {...props}
            />
        </>
    );
};
