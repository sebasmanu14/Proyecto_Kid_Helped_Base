const usuario=(sequelize,type)=>{
    return sequelize.define('usuarios',{
        id_usuario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombreUsuario:type.STRING,
        apellidoUsuario:type.STRING,
        correoUsuario:type.STRING,
        apodoUsuario:type.STRING(99),
        contraseña: type.STRING,
        


        creacionUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = usuario;