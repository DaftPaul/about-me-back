'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = Schema({
	name: String,
	surname: String,
	email: String,
	message: String,
	phone: Number
});

module.exports = mongoose.model("Contact", ContactSchema)