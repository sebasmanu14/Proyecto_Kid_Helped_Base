const subClasificacion=(sequelize,type)=>{
    return sequelize.define('subClasificaciones',{
        id_subclasificacion:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        id_subclasificacion:type.STRING(99),
        nombre:type.STRING(99),
        detalle:type.STRING(99),
        correoid_clasificacion:type.STRING(99),


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