// Componente para crear los input y labels par el formulario
import React from 'react';
import { useField } from 'formik';

import '../styles/input.css';

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label className="label">{label}</label>
			<input {...field} className="input" />
			{meta.touched && meta.error ? <p className="error-msg">{meta.error}</p> : null}
		</>
	);
};

export default Input;
