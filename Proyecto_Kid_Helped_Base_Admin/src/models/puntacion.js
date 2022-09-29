const puntacion = (sequelize, type) => {
  return sequelize.define(
    "puntaciones",
    {
      id_puntacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      puntacion: type.INTEGER,


      creacionPuntacion: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarPuntacion: {
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

module.exports = puntacion;
