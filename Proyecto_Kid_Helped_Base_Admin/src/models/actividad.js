const actividad = (sequelize, type) => {
  return sequelize.define(
    "actividades",
    {
      id_actividad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreActividad: type.STRING(99),
      descripcion: type.STRING(200),
      imagen: type.STRING(99),
      urlActividad: type.STRING(99),

      creacionActividad: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarActividad: {
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

module.exports = actividad;
