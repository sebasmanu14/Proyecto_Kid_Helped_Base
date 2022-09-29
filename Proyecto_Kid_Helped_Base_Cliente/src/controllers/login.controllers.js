const loginCtl={}
const passport=require('passport')
const { render } = require('../app')

loginCtl.showLogin=(req,res)=>{
    res.render('login/login')
}

loginCtl.login=passport.authenticate('local.signin',{
    successRedirect: '/siguiente',
    failureRedirect: '/login',
    failureFlash: true
})

loginCtl.showRegister=(req,res)=>{
    res.render('login/registro')
}

loginCtl.registro=passport.authenticate('local.signup',{
    successRedirect: '/cierreSesion',
    failureRedirect: '/registro',
    failureFlash: true
})

//Cerrar Session

loginCtl.cerrarSesion=(req,res,next)=>{
   req.logout(function(err){
    if(err){
        return next(err)
    }
    req.flash('success','Seccion cerrada exitosamente')
    res.redirect('/')
   })
}

loginCtl.siguiente=(req,res,next)=>{
    req.login(function(err){
     if(err){
         return next(err)
     }
     req.flash('success','se ingreso exitosamente')
     res.redirect('/')
    })
 }

module.exports=loginCtl



