const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Cita = mongoose.model('Cita', CitaSchema);
module.exports = Cita;