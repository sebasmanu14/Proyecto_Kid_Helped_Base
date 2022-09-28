const comentario=(sequelize,type)=>{
    return sequelize.define('comentarios',{
        id_comentario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        id_comentario:type.STRING(99),
        comentario:type.STRING(99),
        fecha_puclicacion:type.STRING(99),
        id_actividades:type.STRING(99),
        id_cliente:type.STRING(99),


        creacioncomentario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarcomentario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports=comentario