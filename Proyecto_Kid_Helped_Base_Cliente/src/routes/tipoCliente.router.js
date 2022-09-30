
const express = require("express");
const { showTipo } = require("../controllers/type_client.controllers");
const router = express.Router();
router.get("/tipo", showTipo);

module.exports = router;
