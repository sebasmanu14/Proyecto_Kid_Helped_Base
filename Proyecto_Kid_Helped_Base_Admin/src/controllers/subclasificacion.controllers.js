const subclasificacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

subclasificacionCtl.mostrar=(req,res)=>{
    res.render('subclasificacion/agregar');
}

//mandar
subclasificacionCtl.mandar=async(req,res)=>{
    const id =req.user.id_clasificacion
    const {nombre,detalle}=req.body
    const nuevoEnvio={
        nombre,
        detalle
    }
    await orm.subClasificacion.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/subclasificacion/listar/'+id)
}

subclasificacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from subClasificaciones')
    res.render('subclasificacion/listar',{lista})
}

//traer datos
subclasificacionCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from subClasificaciones where id_subclasificacion =?',[ids])
    res.render('subclasificacion/editar',{lista})
}

subclasificacionCtl.actualizar=async(req,res)=>{
    const id =req.user.id_subclasificacion
    const ids=req.params.id
    const {nombre,detalle}=req.body
    const nuevoEnvio={
        nombre,
        detalle
    }
    await orm.subClasificacion.findOne({where:{id_subclasificacion:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/subclasificacion/listar/'+id);
}
subclasificacionCtl.eliminar= async(req,res) =>{
    const ids= req.params.id
    const id =req.user.id_usuario
    await orm.subClasificacion.destroy({where:{id_subclasificacion:ids}})
    .then(()=>{
    req.flash('success','Eliminado exitosamente')
    res.redirect('/subclasificacion/listar/'+id);   
    })
 }


module.exports=subclasificacionCtl