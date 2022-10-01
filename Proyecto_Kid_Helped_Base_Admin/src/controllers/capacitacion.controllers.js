const capacitacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

capacitacionCtl.mostrar=(req,res)=>{
    res.render('capacitacion/agregar');
}

//mandar
capacitacionCtl.mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {nombres,descripcion,estado}=req.body
    const nuevoEnvio={
        nombres,
        descripcion,
        estado
    }
    await orm.capacitacion.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/capacitacion/listar/'+id)
}

capacitacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from capacitaciones')
    res.render('capacitacion/listar',{lista})
}

//traer datos
capacitacionCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from capacitaciones where id_capacitacion =?',[ids])
    res.render('capacitacion/editar',{lista})
}

capacitacionCtl.actualizar=async(req,res)=>{
    const id =req.user.id_usuario
    const ids=req.params.id
    const {nombres,descripcion,estado}=req.body
    const nuevoEnvio={
        nombres,
        descripcion,
        estado
    }
    await orm.capacitacion.findOne({where:{id_capacitacion:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/capacitacion/listar/'+id);
}
 capacitacionCtl.eliminar= async(req,res) =>{
    const ids= req.params.id
    const id =req.user.id_usuario
    await orm.capacitacion.destroy({where:{id_capacitacion:ids}})
    .then(()=>{
    req.flash('success','Eliminado exitosamente')
    res.redirect('/capacitacion/listar/'+id);   
    })
 }


module.exports=capacitacionCtl