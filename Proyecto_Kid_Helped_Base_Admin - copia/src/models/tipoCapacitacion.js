const tipoCapacitacion = (sequelize, type) => {
  return sequelize.define(
    "tipoCapacitaciones",
    {
      id_tipoCapacitacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING(99),
      estado: type.STRING,

      creaciontipoCapacitacion: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizartipoCapacitacion: {
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

module.exports = tipoCapacitacion;
