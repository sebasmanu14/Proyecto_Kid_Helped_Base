const actividad = (sequelize, type) => {
  return sequelize.define(
    "actividades",
    {
      id_actividad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreActividad: type.STRING,
      descripcion: type.STRING(3000),
      imagen: type.STRING,
      urlActividad: type.STRING,

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
