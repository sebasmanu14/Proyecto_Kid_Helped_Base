const clasificacion = (sequelize, type) => {
  return sequelize.define(
    "clasificaciones",
    {
      id_clasificacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING(99),
      detalle: type.STRING(200),

      creacionClasificacion: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarClasificacion: {
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

module.exports = clasificacion;
