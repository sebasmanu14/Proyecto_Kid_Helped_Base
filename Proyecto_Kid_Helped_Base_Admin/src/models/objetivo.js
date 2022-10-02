
const objetivo = (sequelize, type) => {
  return sequelize.define(
    "objetivos",
    {
      id_objetivo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },
      objetivo: type.STRING(3000),
      redesSociales: type.STRING,

      creacionObjetivo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizaionObjetivo: {
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
module.exports = objetivo;
