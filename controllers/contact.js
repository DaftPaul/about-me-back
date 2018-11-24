'use strict'

var Contact = require('../models/contact');
var fs = require('fs');
var path = require("path");

var controller = {

	saveContact: function(req,res){
		var contact = new Contact();

		var params = req.body;

		contact.name = params.name;
		contact.surname = params.surname;
		contact.email = params.email;
		contact.message = params.message;
		contact.phone = params.phone;

		contact.save((err,contactStored) => {
			if(err) return res.status(500).send({
				message:'error al guardar'
			});

			if(!contactStored) return res.status(404).send({
				message:'No se ha podido guardar el contacto'
			});

			if(contactStored) return res.status(200).send({contact: contactStored})
		});
	}
};


module.exports = controller;