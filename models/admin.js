var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    correo: String
});

module.exports = mongoose.model('admins', esquema);