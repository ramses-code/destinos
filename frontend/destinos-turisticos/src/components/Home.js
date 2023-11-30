// Componente encargado de mostrar todos los destinos en forma de tarjeta
// utilizanod el componente 'Card'
import React from 'react';

import '../styles/home.css';
import Card from './Card';

import { useDestinationsContext } from './Context';

const Home = () => {
	// Destructurar destinations y error del custom hook
	const { destinations, error } = useDestinationsContext();

	return (
		<main className="main">
			<div className="div-heading">
				<h1 className="heading move-in-left">Destinos Turísticos</h1>
			</div>
			{error && (
				<p className="p-3" style={{ color: 'red', height: '100vh' }}>
					{error}
				</p>
			)}
			<div className="row">
				{destinations.length === 0
					? null
					: destinations.map((dest) => {
							return (
								<Card
									key={dest.id}
									destino={dest.destino}
									ciudad={dest.ciudad}
									estado={dest.estado}
									img={dest.img}
									descripcion={dest.descripcion}
									elem={dest}
								/>
							);
					  })}
			</div>
		</main>
	);
};
export default Home;
