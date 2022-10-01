const paginaPrincipal = (sequelize, type) => {
  return sequelize.define(
    "paginaPrincipals",
    {
      id_pagprincipal: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombrePagina: type.STRING,
      mision: type.STRING(3000),
      vision: type.STRING(3000),
      
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