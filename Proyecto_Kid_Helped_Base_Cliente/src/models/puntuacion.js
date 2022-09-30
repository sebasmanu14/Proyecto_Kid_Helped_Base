const puntuacion = (sequelize, type) => {
  return sequelize.define(
    "puntuaciones",
    {
      id_puntuacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      puntuacion: type.INTEGER,


      creacionPuntuacion: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarPuntuacion: {
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

module.exports = puntuacion;
