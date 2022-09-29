const { timeStamp } = require("console");
const { type } = require("os");
const { INTEGER, Sequelize } = require("sequelize");

const video = (sequelize, type) => {
  return sequelize.define(
    "videos",
    {
      id_videos: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: type.STRING,
      descripcion: type.STRING,
      titulo: type.STRING,
      tipo: type.STRING,

      creacionVideo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },

      actualizacionVideo: {
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
module.exports = video;
