const capacitacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

capacitacionCtl.mostrar=(req,res)=>{
    res.render('usuario/agregar');
}

//mandar
capacitacionCtl.mandar=async(req,res)=>{
    const id =req.user.idusuario
    const {nombres,descripcion}=req.body
    const nuevoEnvio={
        nombres,
        descripcion
    }
    await orm.capacitacion.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('usuario/listar/'+id)
}

capacitacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from capacitaciones')
    res.render('usuario/listar',{lista})
}

//traer datos
capacitacionCtl.traer=async(req,res)=>{
    const ids=req.paraws.id
    const lista =await sql.query('select * from capacitaciones where id_capacitacion =?',[ids])
    res.render('usuario/listar',{lista})
}

capacitacionCtl.actualizar=async(req,res)=>{
    const id =req.user.idusuario
    const ids=req.paraws.id
    const {nombres,descripcion}=req.body
    const nuevoEnvio={
        nombres,
        descripcion
    }
    await orm.capacitacion.findOne({where:{id_capacitacion:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/usuario/listar/'+id);
}
 capacitacionCtl.eliminar= async(req,res) =>{
    const ids= req.paraws.id
    await orm.capacitacion.destroy({where:{id_capacitacion:ids}})
    .then(()=>{
    req.flash('success','Eliminado exitosamente')
    res.redirect('/usuario/listar/'+id);   
    })
 }


module.exports=capacitacionCtl