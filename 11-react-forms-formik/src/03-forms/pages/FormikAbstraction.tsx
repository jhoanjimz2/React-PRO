import { Form, Formik } from 'formik';
import * as Yup from "yup";

import '../styles/styles.css';
import { MyTextInput , MySelect , MyCheckbox } from '../components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
                onSubmit={( values ) => { console.log(values) }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(10, 'Debe de tener 10 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El correo no tiene un formato válido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Esta opción no es permitida')
                            .required('Requerido'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='Jhoan'
                            />

                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Jimenez'
                            />

                            <MyTextInput 
                                label='Email Address' 
                                name='email'
                                placeholder='example@email.com'
                                type='email'
                            />

                            <MySelect name='jobType' label='Job Type'>
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT JR</option>
                            </MySelect>

                            <MyCheckbox label='Terms & conditions' name='terms'/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}