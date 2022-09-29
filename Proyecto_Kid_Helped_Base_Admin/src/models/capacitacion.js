const capacitacion = (sequelize, type) => {
  return sequelize.define(
    "capacitaciones",
    {
      id_capacitacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: type.STRING(99),
      descripcion: type.STRING(99),
      estado: type.STRING(99),

      creacionCapacitaciones: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarCapacitaciones: {
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

module.exports = capacitacion;
