// Componente para mostrar los datos de los destinos
import React from 'react';
import { useDestinationsContext } from './Context';

import '../styles/card.css';

const Card = ({ destino, ciudad, estado, img, descripcion, elem }) => {
	// Destructurar la función que mete y quita destinos de la lista y el array que
	// contiene los destinos seleccionados
	const { handleSelectedArray, selectedDest } = useDestinationsContext();
	return (
		<div className="col-4 col-mb">
			<div className="cards">
				<div className="card-side front">
					<div className="img">
						<img src={img} alt="imagen" />
					</div>
					<div className="list-details">
						<ul>
							<li>{destino}</li>
							<li>{ciudad}</li>
							<li>{estado}</li>
						</ul>
					</div>
				</div>
				<div className="card-side back">
					<div className="div-back d-flex flex-column justify-content-between">
						<p className="card-text m-0">{descripcion}</p>
						<button onClick={() => handleSelectedArray(elem)} className="button">
							{selectedDest.includes(elem) ? 'Eliminar' : 'Agregar al Carrito'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
