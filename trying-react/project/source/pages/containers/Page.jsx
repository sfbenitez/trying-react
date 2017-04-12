import React from 'react';

//tres componentes que nos ayudan a conrolar nuestras rutas
import {
	Route,
	Switch,
	} from 'react-router-dom';

import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';

function Pages() {
	return (
		<main role="application">
			<Switch>
				<Route
					path="/"
					exact
					component={Home}
				/>
				<Route
					path="/about"
					exact
					component={About}
				/>
				<Route component={Error404} />
			</Switch>
		</main>
	);
}

export default Pages;