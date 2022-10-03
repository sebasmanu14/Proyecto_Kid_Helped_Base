const capacitacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

capacitacionCtl.mostrar=(req,res)=>{
    res.render('tipoCapacitacion/agregar');
}

//mandar
capacitacionCtl.mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {nombre,estado}=req.body
    const nuevoEnvio={
        nombre,
        estado
    }
    await orm.tipoCapacitacion.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/tipoCapacitacion/listar/'+id)
}

capacitacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from tipoCapacitaciones')
    res.render('tipoCapacitacion/listar',{lista})
}

//traer datos
capacitacionCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from tipoCapacitaciones where id_tipoCapacitacion =?',[ids])
    res.render('tipoCapacitacion/editar',{lista})
}

capacitacionCtl.actualizar=async(req,res)=>{
    const id =req.user.id_usuario
    const ids=req.params.id
    const {nombre,estado}=req.body
    const nuevoEnvio={
        nombre,
        estado
    }
    await orm.tipoCapacitacion.findOne({where:{id_tipoCapacitacion:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/tipoCapacitacion/listar/'+id);
}

 capacitacionCtl.eliminar= async(req,res) =>{
    const ids= req.params.id
    const id =req.user.id_usuario
    await orm.tipoCapacitacion.destroy({where:{id_tipoCapacitacion:ids}})
    .then(()=>{
    req.flash('success','Eliminado exitosamente')
    res.redirect('/tipoCapacitacion/listar/'+id);   
    })
 }


module.exports=capacitacionCtl