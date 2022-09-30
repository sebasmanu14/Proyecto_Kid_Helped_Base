const subClasificacion=(sequelize,type)=>{
    return sequelize.define('subClasificaciones',{
        id_subclasificacion:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:type.STRING,
        detalle:type.STRING,
        correoid_clasificacion:type.STRING,


        creacionsubclasificacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarsubclasificacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports=subClasificacion