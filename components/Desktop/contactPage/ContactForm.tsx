import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import { Field, Form, Formik } from 'formik';
import { MyTextInput } from './MyTextInput';
import * as Yup from 'yup';
import { MyTextArea } from './MyTextArea';

const INITIAL_VALUE = {
    name: '',
    email: '',
    contactDetails: '',
    projectDetails: '',
};

export const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    //template_k9p5aje
    //service_7uosecb
    //Hd8K1Fz9hRvUFyOMQ

    const onSubmitForm = (value: any, { resetForm }: any) => {
        setLoading(true);

        emailjs
            .send(
                'service_7uosecb',
                'template_k9p5aje',
                {
                    from_name: value.name,
                    to_name: 'kunuwebdesign',
                    from_email: value.email,
                    to_email: 'kunuwebdesign428@gmail.com',
                    from_contactDetails: value.contactDetails,
                    from_projectDetails: value.projectDetails,
                },
                'Hd8K1Fz9hRvUFyOMQ'
            )
            .then(
                () => {
                    setLoading(false);
                    Swal.fire({
                        title: 'Thank you!',
                        text: 'I will get back to you as soon as possible',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    resetForm();
                },
                (error) => {
                    console.log({ error }, 'there is an error on contactForm');

                    setLoading(false);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong.',
                        icon: 'error',
                        confirmButtonText: 'Cool',
                    });
                }
            );
    };

    return (
        <Formik
            initialValues={INITIAL_VALUE}
            onSubmit={onSubmitForm}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'it should have 20 characters or less')
                    .required('Please fill out this field'),
                email: Yup.string().email('Invalid email').required('Please fill out this field'),
                contactDetails: Yup.string()
                    .max(255, 'it should have 200 characters or less')
                    .required('Please fill out this field'),
                projectDetails: Yup.string()
                    .max(255, '255 maximun number of characters allowed')
                    .required('Please fill out this field'),
            })}
        >
            {(formik) => (
                <Form noValidate>
                    <h2 className='text-xl xl:text-2xl text-gray-500 font-bold mb-8'>
                        Let's discuss your project
                    </h2>
                    <MyTextInput name='name' placeholder='Your name' />
                    <MyTextInput name='email' type='email' placeholder='Your email' />
                    <MyTextInput name='contactDetails' placeholder='Your contact details' />
                    <MyTextArea
                        name='projectDetails'
                        placeholder='Project details (website type you need, features it should incluve, few words about your business, etc)'
                    />
                    <div className='flex justify-center'>
                        <button
                            className='text-xs xl:text-sm bg-fuchsia-700 py-4 px-12 text-white rounded-full hoverEffect'
                            type='submit'
                        >
                            SUBMIT
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
