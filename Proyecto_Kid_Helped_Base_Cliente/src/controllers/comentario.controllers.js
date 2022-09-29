const loginCtl = {};
const passport = require("passport");
const { render } = require("../app");

loginCtl.showLogin = (req, res) => {
  res.render("login/login");
};

loginCtl.login = passport.authenticate("local.signin", {
  successRedirect: "/siguiente",
  failureRedirect: "/login",
  failureFlash: true,
});

loginCtl.comentario = passport.authenticate("local.")