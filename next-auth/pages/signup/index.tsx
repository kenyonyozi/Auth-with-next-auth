import React from 'react'
import { Formik, Field, Form } from 'formik'

export default function Signup() {

    async function handleSubmit(values: any) {
        console.log(values);
        
    }
    return (
        <div className='flex flex-col items-center mt-10' >

            <h2 >Signup here</h2>
            <div >
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        agreedToTerms: false,
                        role: 'admin',
                    }}
                    onSubmit={(values: any) => {
                        handleSubmit(values);
                    }}
                >
                    <Form>
                        <label className='flex flex-col mt-2' htmlFor="firstName">First Name</label>
                        <Field className='border-solid border-2 rounded-lg border-sky-500 ' id="firstName" name="firstName" placeholder="Jane" />

                        <label className='flex flex-col mt-2' htmlFor="lastName">Last Name</label>
                        <Field className='border-solid border-2 rounded-lg border-sky-500 ' id="lastName" name="lastName" placeholder="Doe" />

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

                        <label className='flex flex-col mt-2' htmlFor="confirmPassword">Confirm Password</label>
                        <Field className='border-solid border-2 rounded-lg border-sky-500 ' id="confirmPassword" name="confirmPassword" />

                        <button className='flex flex-col mt-5  items-center justify-center gap-2 rounded-lg border' type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}