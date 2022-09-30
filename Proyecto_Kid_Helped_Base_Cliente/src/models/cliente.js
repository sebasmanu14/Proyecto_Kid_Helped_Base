const cliente = (sequelize, type) => {
  return sequelize.define(
    "clientes",
    {
      id_cliente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreCliente: type.STRING(99),
      apellido: type.STRING, 
      nombre: type.STRING,
      correo: type.STRING,
      celular: type.STRING,
      contraseña: type.STRING,

      creacionCliente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarCliente: {
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

module.exports = cliente;
