const comentario=(sequelize,type)=>{
    return sequelize.define('comentarios',{
        id_comentario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        comentario:type.STRING(3000),
        fecha_puclicacion:type.STRING,
        


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