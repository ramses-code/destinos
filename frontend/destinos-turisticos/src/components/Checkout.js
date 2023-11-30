// Componente encargado de mostrar los destinos seleccionados
import React from 'react';
import { useDestinationsContext } from './Context';

import '../styles/checkout.css';
import FormCheckout from './FormCheckout';

const Checkout = () => {
	// Destructurar el array de destinos seleccionados(selectedDest)
	const { selectedDest } = useDestinationsContext();

	// Componente encargado de mostrar los destinos seleccionados
	return (
		<section className="main section-height">
			<div className="div-heading">
				<h1 className="heading move-in-right m-0">Mis destinos</h1>
			</div>
			<div className="list-details">
				<ul className="ul-dest ps-0">
					{selectedDest.length === 0
						? null
						: selectedDest.map((elem, index) => {
								return <li key={index}>{elem.destino}</li>;
						  })}
				</ul>
			</div>
			<FormCheckout />
		</section>
	);
};
export default Checkout;
