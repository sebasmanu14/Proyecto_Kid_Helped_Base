const express = require('express');
const { showPrincipal } = require('../controllers/principal.controllers');
const router = express.Router();

router.get('/principal',showPrincipal)


module.exports = router;