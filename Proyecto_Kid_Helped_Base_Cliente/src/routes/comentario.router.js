const express = require("express");
const { showComentario } = require("../controllers/comentario.controllers");
const router = express.Router();
router.get("/comentario", showComentario);

module.exports = router;



