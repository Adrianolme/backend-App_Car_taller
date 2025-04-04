const Cita = require('../models/cita.model');

// Crear nueva cita
const createCita = async (req, res) => {
    try {
        const nuevaCita = await Cita.create(req.body);
        res.status(201).json(nuevaCita);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cita: ' + error.message });
    }
}

// Obtener todas las citas
const getCitas = async (req, res) => {
    try {
        const citas = await Cita.find({});
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener citas: ' + error.message });
    }
}

// Obtener cita por ID
const getCitaById = async (req, res) => {
    try {
        const cita = await Cita.findById(req.params.id);
        if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
        res.status(200).json(cita);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cita: ' + error.message });
    }
}

// Actualizar cita
const updateCita = async (req, res) => {
    try {
        const citaActualizada = await Cita.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!citaActualizada) return res.status(404).json({ message: 'Cita no encontrada' });
        res.status(200).json(citaActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cita: ' + error.message });
    }
}

// Eliminar cita
const deleteCita = async (req, res) => {
    try {
        console.log("[BACKEND] ID recibido:", req.params.id); 
        const citaEliminada = await Cita.findByIdAndDelete(req.params.id);
        if (!citaEliminada) return res.status(404).json({ message: 'Cita no encontrada' });
        res.status(200).json({ message: 'Cita eliminada correctamente' });
    } catch (error) {
        console.error("[BACKEND] Error al eliminar:", error);
        res.status(500).json({ message: 'Error al eliminar cita: ' + error.message });
    }
}

module.exports = {
    createCita,
    getCitas,
    getCitaById,
    updateCita,
    deleteCita
};