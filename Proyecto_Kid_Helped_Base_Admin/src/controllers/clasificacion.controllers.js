const clasificacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

clasificacionCtl.mostrar=(req,res)=>{
    res.render('clasificacion/agregar');
}

//mandar
clasificacionCtl.mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {nombre,detalle}=req.body
    const nuevoEnvio={
        nombre,
        detalle
    }
    await orm.clasificacion.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/clasificacion/listar/'+id)
}

clasificacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from clasificaciones')
    res.render('clasificacion/listar',{lista})
}

//traer datos
clasificacionCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from clasificaciones where id_clasificacion =?',[ids])
    res.render('clasificacion/editar',{lista})
}

clasificacionCtl.actualizar=async(req,res)=>{
    const id =req.user.id_clasificacion
    const ids=req.params.id
    const {nombre, detalle}=req.body
    const nuevoEnvio={
        nombre,
        detalle
    }
    await orm.clasificacion.findOne({where:{id_clasificacion:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/clasificacion/listar/'+id);
}
 clasificacionCtl.eliminar= async(req,res) =>{
    const ids= req.params.id
    const id =req.user.id_clasificacion
    await orm.clasificacion.destroy({where:{id_clasificacion:ids}})
    .then(()=>{
    req.flash('success','Eliminado exitosamente')
    res.redirect('/clasificacion/listar/'+id);   
    })
 }


module.exports=clasificacionCtl