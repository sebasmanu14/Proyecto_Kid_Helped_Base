const express = require("express");
const router = express.Router();
const { mostrar,listar,} = require("../controllers/actividades.controllers");


router.get('/actividades',mostrar);
router.get('/actividades/:id',listar)

module.exports = router;