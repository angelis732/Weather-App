import React from "react";


export default function About(){
	return (
		
			<div className="jumbotron jumbotron-fluid">
				<div className="container" style={{backgroundColor: 'transparent'}}>
					<h1 className="display-4">Acerca de</h1>
					<p className="lead">Aplicación desarrollada como homework del Bootcamp de Henry.
						Contiene un buscador para obtener los datos del clima de muchas ciudades, en
						principio muestra temperatura mínima y máxima; si quieres conocer mas detalles
						sobre el clima de esa ciudad, puedes acceder a ello dándole click
						al nombre de la ciudad.</p>
				</div>
			</div>
		
	);
}
