// En este componente se podra navejar entre las vistas 'Inicio' y 'Checkout'
// Tambien se mostrara la cantidad de destinos seleccionandos
import React from 'react';
import { Link } from 'react-router-dom';
import { useDestinationsContext } from './Context';

import '../styles/navbar.css';

const Navbar = () => {
	// Destructurar el arreglo que contiene los destinos seleccionados
	const { selectedDest } = useDestinationsContext();

	return (
		<header className="header">
			<ul className="m-0 p-0 ul d-flex align-items-start justify-content-end">
				<li className="li">
					<Link to="/">Inicio</Link>
				</li>
				<li className="li">
					<Link to="/checkout">
						<span className="material-symbols-outlined p-0">shopping_cart</span>
						<p className="badge rounded-pill bg-success p-2 m-0">{selectedDest.length}</p>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
