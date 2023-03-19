import React from 'react'
import { Formik, Field, Form } from 'formik'
import { signIn } from 'next-auth/react';
import { GetServerSideProps, NextPage } from 'next';
import { auth } from '../../utils/auth';


export const getServerSideProps: GetServerSideProps<{}> = async context => {
    return auth(context);
};
  

export default function Login() {

    async function handleSubmit(values: any) {
        const result = await signIn('credentials',{
            email:values.email,
            password:values.password,
            redirect: true,
            callbackUrl:'/'
        })
        console.log('result from login',result);
        
    }

  

    return (
        <div className='flex flex-col items-center mt-10' >
            <h2 >Login here</h2>
            <div >
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values: any) => {
                        handleSubmit(values);
                    }}
                >
                    <Form>

                        <label className='flex flex-col mt-2' htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                            className='border-solid border-2 rounded-lg border-sky-500 '
                        />
                        <label className='flex flex-col mt-2' htmlFor="password">Password</label>
                        <Field className='border-solid border-2 rounded-lg border-sky-500 ' id="passsword" name="password" />

                        <button className='flex flex-col mt-5  items-center justify-center gap-2 rounded-lg border' type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>

        </div>

    )
}
