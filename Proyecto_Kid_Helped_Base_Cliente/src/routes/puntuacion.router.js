const express = require("express");
const {showPuntuacion} = require("../controllers/puntuacion.controllers");
const router = express.Router();
router.get("/puntuacion", showPuntuacion);

module.exports = router;           