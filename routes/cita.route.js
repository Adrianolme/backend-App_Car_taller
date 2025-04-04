const express = require('express');
const router = express.Router();
const {
    createCita,
    getCitas,
    getCitaById,
    updateCita,
    deleteCita
} = require('../controllers/cita.controller');

router.post('/', createCita);
router.get('/', getCitas);
router.get('/:id', getCitaById);
router.put('/:id', updateCita);
router.delete('/:id', deleteCita);

module.exports = router;