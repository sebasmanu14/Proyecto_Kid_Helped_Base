const express=require('express')
const { showLogin, login, showRegister, registro, cerrarSesion, siguiente } = require('../controllers/login.controllers')
const router=express.Router()


router.get('/login',showLogin)
router.post('/login',login)
router.get('/registro',showRegister)
router.post('/registro',registro)
router.get('/cierreSesion',cerrarSesion)
router.get('/siguiente', siguiente)
 
module.exports=router