import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field, FieldHookConfig } from 'formik';

export const MyTextArea = ({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>) => {
    return (
        <>
            <ErrorMessage name={props.name} component='h2' className='text-red-700' />
            <Field
                {...props}
                as='textarea'
                className={`${className} block w-[100%] outline-none p-[20px] bg-gray-100 h-[200px] focus:outline-none servicesColor title_letter mb-[2rem] resize-none	`}
            />
        </>
    );
};
