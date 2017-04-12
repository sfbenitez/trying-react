import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Pages from './pages/containers/Page.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// codigo para manejar las peticiones http, request: datos de la petición del usuario, responses: formas de devolver la respuesta al usuario
function requestHandler(request, response) {
	const context = {}

	function counter(state = 0, action) {
	  switch (action.type) {
	  case 'INCREMENT':
	    return state + 1
	  case 'DECREMENT':
	    return state - 1
	  default:
	    return state
	  }
	}
	let store = createStore(counter);

	const html = renderToString(
		<Provider store={store}>
//			<IntlProvider locale={locale} messages={messages[locale]}>*/
				<StaticRouter location={request.url} context={context}>
					<Pages />
				</StaticRouter>
//			</IntlProvider>*/
		</Provider>
	);

	response.setHeader('Content-Type', 'text/html');

	if (context.url) {
		response.writeHead(301, {
			Location: context.url,
		});
		response.end();
	}

	if (context.url) {
		response.writeHead(404);
	}

	response.write(html);
	response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);