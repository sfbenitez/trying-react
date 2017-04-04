import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';

// codigo para manegar las peticiones http, request: datos de la petición del usuario, responses: formas de devolver la respuesta al usuario
function requestHandler(request, response) {
	const html = renderToString(
		React.Dom.h1(null, 'hola')
		);
	response.write(html);
	response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);