const respuestaComentario=(sequelize,type)=>{
    return sequelize.define('respuestaComentarios',{
        id_respuestaComentario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        id_detalle:type.STRING(99),
        respuesta:type.STRING(99),
        id_comentario:type.STRING(99),


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