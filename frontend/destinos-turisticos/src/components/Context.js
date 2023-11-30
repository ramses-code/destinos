import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear Context y custom hook para tener acceso a la función y los arrays a nivel global
const DestinationsContext = createContext();
export const useDestinationsContext = () => useContext(DestinationsContext);

const Context = ({ children }) => {
	const [destinations, setDestinations] = useState([]); // Contiene todos los destinos
	const [selectedDest, setSelectedDest] = useState([]); // Contiene los destinos seleccionados
	const [error, setError] = useState(null); // Contiene msg de error si no se pudo cargar los datos en el fetch

	// Traer todos los destinos del backend y guardarlos en el array 'destinations'
	useEffect(() => {
		const dest_url = process.env.REACT_APP_DEST_URL;

		const fetchData = async () => {
			try {
				const response = await fetch(dest_url);
				const data = await response.json();
				console.log(data);
				setDestinations(data);
			} catch (error) {
				console.log(error);
				setError('Hubo un error al cargar los destinos. Por favor, inténtalo de nuevo.');
			}
		};

		fetchData();
	}, []);

	// Función encargada de quitar o meter elementos al array de destinos seleccionados(selectedDest)
	const handleSelectedArray = (elem) => {
		let temp = [...selectedDest];
		let isSelected = temp.includes(elem);

		isSelected ? (temp = temp.filter((item) => item !== elem)) : temp.push(elem);
		setSelectedDest(temp);
	};

	// Retornar el provedor de contexto que se importara en 'App' para que todos los children tengan acceso
	// a los datos especificados en 'value'
	return (
		<DestinationsContext.Provider
			value={{ handleSelectedArray, selectedDest, destinations, error }}>
			{children}
		</DestinationsContext.Provider>
	);
};

export default Context;
