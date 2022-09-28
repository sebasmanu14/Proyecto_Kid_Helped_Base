const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const CryptoJS = require("crypto-js");

const orm = require("../conf/dataBase.orm");
const sql = require("../conf/database.sql");
const helpers = require("./helpers");
const cliente = require("../models/cliente");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const rows = await orm.cliente.findOne({
        where: { nombreCliente: username },
      });
      if (rows) {
        const cliente = rows;
        const contraseña = await CryptoJS.AES.decrypt(
          cliente.contraseña,
          "secret"
        );
        const validPassword = contraseña.toString(CryptoJS.enc.Utf8);
        if (validPassword == password) {
          done(
            null,
            cliente,
            req.flash("message", "Bienvenido" + " " + cliente.nombreCliente)
          );
        } else {
          done(null, false, req.flash("message", "Datos incorrectos"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const cliente = await orm.cliente.findOne({
        where: { nombreCliente: username },
      });
      if (cliente === null) {
        const { nombreCliente, apellido, nombre, correo, celular, contraseña } =
          req.body;
        let creacionCliente = {
          nombre,
          apellido,
          correo,
          celular,
          nombreCliente: username,
          contraseña: password,
        };
        creacionCliente.nombre = await helpers.encryptPassword(
          nombre
        );
        creacionCliente.apellido = await helpers.encryptPassword(
          apellido
        );
        creacionCliente.correo = await helpers.encryptPassword(
          correo
        );
        creacionCliente.contraseña = await helpers.encryptPassword(contraseña);

        const resultado = await orm.cliente.create(creacionCliente);
        creacionCliente.id = resultado.insertId;

        return done(null, creacionCliente);
      } else {
        if (cliente) {
          const clientes = cliente;
          if (clientes.apellido == username) {
            done(
              null,
              false,
              req.flash("message", "El nombre de usuario ya existe.")
            );
          } else {
            const {
              nombre,
              apellido,
              correo,
              celular,
              nombreCliente,
              contraseña,
            } = req.body;
            let creacionCliente = {
              nombre,
              apellido,
              correo,
              celular,
              nombreCliente: username,
              contraseña: password,
            };
            creacionCliente.nombre = await helpers.encryptPassword(
              nombre
            );
            creacionCliente.apellido = await helpers.encryptPassword(
              apellido
            );
            creacionCliente.correo = await helpers.encryptPassword(
              correo
            );
            creacionCliente.contraseña = await helpers.encryptPassword(contraseña);

            const resultado = await orm.cliente.create(creacionCliente);
            creacionCliente.id = resultado.insertId;

            return done(null, creacionCliente);
          }
        }
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
