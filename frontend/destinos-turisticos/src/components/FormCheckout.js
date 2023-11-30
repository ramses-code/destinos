// Formularion para ingresar datos de destino
import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import '../styles/formCheckout.css';

import Input from './Input';

const FormCheckout = () => {
	return (
		<div className="form">
			<h3 className="h3">Ingresar datos de origen</h3>
			<Formik
				initialValues={{ name: '', city: '', state: '' }}
				validationSchema={object({
					name: string().required('Requerido').typeError('Ingresar nombre completo.'),
					city: string().required('Requerido').typeError('Ingresar ciudad de origen.'),
					state: string().required('Requerido').typeError('Ingresar estado de origen.'),
				})}>
				<Form>
					<Input name="name" label="Nombre completo" />
					<Input name="city" label="Ciudad" />
					<Input name="state" label="Estado" />
				</Form>
			</Formik>
		</div>
	);
};

export default FormCheckout;
