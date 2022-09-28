const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "kidhelped";

mysql
  .createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  })
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
      console.info("creada o comprobada");
    });
  });
//Models
const actividadModels = require("../models/actividad");
const capacitacionModels = require("../models/capacitacion");
const clasificacionModels = require("../models/clasificacion");
const clienteModels = require("../models/cliente");
const comentarioModels = require("../models/comentario");
const objetivoModels = require("../models/objetivo");
const paginaPrincipalModels = require("../models/paginaPrincipal");
const puntacionModels = require("../models/puntacion");
const respuestaComentarioModels = require("../models/respuestaComentario");
const subClasificacionModels = require("../models/subClasificacion");
const tipoCapacitacionModels = require("../models/tipoCapacitacion");
const tipoClienteModels = require("../models/tipoCliente");
const usuarioModels = require("../models/usuario");
const videoModels = require("../models/video");

//Conexion
const sequelize = new Sequelize("kidhelped", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    require: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("conectado");
  })
  .catch((err) => {
    console.log("no conectado");
  });

sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});
//sincronia
const actividad = actividadModels(sequelize, Sequelize);
const capacitacion = capacitacionModels(sequelize, Sequelize);
const clasificacion = clasificacionModels(sequelize, Sequelize);
const cliente = clienteModels(sequelize, Sequelize);
const comentario = comentarioModels(sequelize, Sequelize);
const objetivo = objetivoModels(sequelize, Sequelize);
const paginaPrincipal = paginaPrincipalModels(sequelize, Sequelize);
const puntacion = puntacionModels(sequelize, Sequelize);
const respuestaComentario = respuestaComentarioModels(sequelize, Sequelize);
const subClasificacion = subClasificacionModels(sequelize, Sequelize);
const tipoCapacitacion = tipoCapacitacionModels(sequelize, Sequelize);
const tipoCliente = tipoClienteModels(sequelize, Sequelize);
const usuario = usuarioModels(sequelize, Sequelize);
const video = videoModels(sequelize, Sequelize);

//relaciones
cliente.hasMany(tipoCliente);
tipoCliente.belongsTo(cliente);
tipoCapacitacion.hasMany(capacitacion);
capacitacion.belongsTo(tipoCapacitacion);
comentario.hasMany(respuestaComentario);
respuestaComentario.belongsTo(comentario);
cliente.hasMany(comentario);
comentario.belongsTo(cliente);
cliente.hasMany(puntacion);
puntacion.belongsTo(cliente);
usuario.hasMany(paginaPrincipal);
paginaPrincipal.belongsTo(usuario);
paginaPrincipal.hasMany(objetivo);
objetivo.belongsTo(paginaPrincipal);
usuario.belongsTo(clasificacion);
clasificacion.belongsTo(usuario);
usuario.hasMany(actividad);
actividad.belongsTo(usuario);
usuario.hasMany(capacitacion);
capacitacion.belongsTo(usuario);
usuario.hasMany(subClasificacion);
subClasificacion.belongsTo(usuario);
usuario.hasMany(tipoCapacitacion);
tipoCapacitacion.belongsTo(usuario);
clasificacion.hasMany(subClasificacion);
subClasificacion.belongsTo(clasificacion);
clasificacion.hasMany(actividad);
actividad.belongsTo(clasificacion);
subClasificacion.hasMany(actividad);
actividad.belongsTo(subClasificacion);
actividad.hasMany(comentario);
comentario.belongsTo(actividad);
actividad.hasMany(puntacion);
puntacion.belongsTo(actividad);
capacitacion.hasMany(comentario);
comentario.belongsTo(capacitacion);
capacitacion.hasMany(video);
video.belongsTo(capacitacion);

module.exports = {
  actividad,
  capacitacion,
  clasificacion,
  cliente,
  comentario,
  objetivo,
  paginaPrincipal,
  puntacion,
  respuestaComentario,
  subClasificacion,
  tipoCapacitacion,
  tipoCliente,
  usuario,
  video,
};