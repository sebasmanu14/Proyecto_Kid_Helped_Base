const respuestaComentario=(sequelize,type)=>{
    return sequelize.define('respuestaComentarios',{
        id_respuestaComentario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        respuesta:type.STRING(3000),   
      


        creacionrespuestaComentario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarrespuestaComentario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports=respuestaComentario