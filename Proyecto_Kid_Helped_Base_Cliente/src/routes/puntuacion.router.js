const express = require("express");
const {showPuntuacion, traer, enviar, lista, actualizar, eliminar } = require("../controllers/puntuacion.controllers");
const router = express.Router();

router.get("/puntuacion", showPuntuacion);
router.post('/puntuacion/:id',enviar)
router.get("/puntuacion/:id",traer);
router.get('/puntuacion/:id',lista)
router.post('/puntuacion/:id',actualizar)
router.get('/eliminar/id',eliminar)

module.exports = router;           