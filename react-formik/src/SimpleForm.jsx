import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './App.css'

function SimpleForm() {
    const initialValues = {
        name: 'Mani',
        email: 'Mani',
        password: 'Mani',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(12, 'Password must be at least 12 characters').required('Password is required'),
    })

    const onSubmit = (values) => {
        console.log('Form data', values);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"></Field>
                    <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password"></Field>
                    <ErrorMessage name="password" component="p"></ErrorMessage>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default SimpleForm