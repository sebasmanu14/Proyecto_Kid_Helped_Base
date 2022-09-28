const usuario=(sequelize,type)=>{
    return sequelize.define('usuarios',{
        id_usuario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombreUsuario:type.STRING(99),
        apellidoUsuario:type.STRING(99),
        correoUsuario:type.STRING(99),
        apodoUsuario:type.STRING(99),
        contraseña: type.STRING(10),
        


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