const { timeStamp } = require("console");
const { type } = require("os");
const { INTEGER, Sequelize } = require("sequelize");

const objetivo = (sequelize, type) => {
  return sequelize.define(
    "objetivo",
    {
      id_objetivo: {
        type: type.INTEGER,
        PrimaryKey: true,
        autoIncement: true,
      },
      objetivos: type.STRING(3000),
      redesSociales: type.STRING,

      creacionObjetivo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizaionObjetivo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
module.exports = objetivo;
