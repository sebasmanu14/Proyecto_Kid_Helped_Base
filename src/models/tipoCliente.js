const tipoCliente = (sequelize, type) => {
  return sequelize.define(
    "tipoClientes",
    {
      id_tipocliente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING(99),
      descripción: type.STRING,
      estado: type.STRING,

      creaciontipoCliente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizartipoCliente: {
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

module.exports = tipoCliente;
