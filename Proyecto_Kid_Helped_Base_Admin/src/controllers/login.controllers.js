const loginCtl = {};
const passport = require("passport");

loginCtl.showLogin = (req, res) => {
  res.render("login/login");
};

loginCtl.login = passport.authenticate("local.signin", {
  successRedirect: "/tipoCapacitacion/listar/:id",
  failureRedirect: "/login",
  failureFlash: true,
});

loginCtl.showRegister = (req, res) => {
  res.render("login/registro");
};

loginCtl.registro = passport.authenticate("local.signup", {
  successRedirect: "/cierreSesion",
  failureRedirect: "/registro",
  failureFlash: true,
});

//Cerrar Session

loginCtl.cerrarSesion = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Seccion cerrada exitosamente");
    res.redirect("/");
  });
};

module.exports = loginCtl;