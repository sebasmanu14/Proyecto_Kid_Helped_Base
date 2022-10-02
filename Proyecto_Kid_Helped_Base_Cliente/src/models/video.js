
const video = (sequelize, type) => {
  return sequelize.define(
    "videos",
    {
      id_video: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: type.STRING,
      descripcion: type.STRING,
      titulo: type.STRING,
      tipo: type.STRING,

      creacionvideo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },

      actualizacionvideo: {
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
