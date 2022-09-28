
const express = require('express');
const { show } = require('../controllers/index.controllers');
const router = express.Router();

router.get('/',show)


module.exports = router;
