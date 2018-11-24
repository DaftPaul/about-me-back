'use strict'

var mongoose = require('mongoose')
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portafolio", { useNewUrlParser:true })
		.then(() => {
			console.log("Conexion a la base de datos establecida! RECONTRA BIEN CONCHATUMADRE....");
			
			// CREACION del Servidor
			app.listen(port, () => {
				console.log("Servidor corriendo correctamente en la URL: localhost:3700");
			});

		})
		.catch(err => console.log(err));