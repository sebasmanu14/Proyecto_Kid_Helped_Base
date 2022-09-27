const paginaPrincipal = (sequelize, type) => {
  return sequelize.define(
    "paginaPrincipals",
    {
      id_pagprincipal: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombrePagina: type.STRING(99),
      mision: type.STRING,
      vision: type.STRING,
        contraseña: type.STRING,
      
      creacionpaginaPrincipal: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizarpaginaPrincipal: {
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

module.exports = paginaPrincipal;