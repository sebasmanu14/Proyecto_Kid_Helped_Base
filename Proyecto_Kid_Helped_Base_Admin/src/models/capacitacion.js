const capacitacion = (sequelize, type) => {
  return sequelize.define(
    "capacitaciones",
    {
      id_capacitacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: type.STRING,
      descripcion: type.STRING(3000),
      estado: type.STRING,

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
