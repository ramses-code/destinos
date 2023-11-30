import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Context from './components/Context';

const App = () => {
	return (
		<Context>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</Context>
	);
};

export default App;
