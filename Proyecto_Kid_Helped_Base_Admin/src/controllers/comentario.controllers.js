const comentarioCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

comentarioCtl .mostrar=(req,res)=>{
    res.render('comentario/agregar');
}

//mandar
comentarioCtl .mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {comentario,fecha_puclicacion}=req.body
    const nuevoEnvio={
        comentario,
        fecha_puclicacion
    }
    await orm.comentario.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/comentario/listar/'+id)
}

comentarioCtl .listar=async(req,res)=>{
    const lista=await sql.query('select * from comentarios')
    res.render('comentario/listar',{lista})
}

//traer datos
comentarioCtl .traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from comentarios where id_comentario =?',[ids])
    res.render('comentario/editar',{lista})
}

comentarioCtl .actualizar=async(req,res)=>{
    const id =req.user.id_usuario
    const ids=req.params.id
    const {comentario, fecha_puclicacion}=req.body
    const nuevoEnvio={
        comentario,
        fecha_puclicacion
       
    }
    await orm.comentario.findOne({where:{id_comentario:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/comentario/listar/'+id);
}
comentarioCtl .eliminar= async(req,res) =>{
   const ids= req.params.id
   const id =req.user.id_usuario
   await orm.comentario.destroy({where:{id_comentario:ids}})
   .then(()=>{
   req.flash('success','Eliminado exitosamente')
   res.redirect('/comentario/listar/'+id);   
   })
}


module.exports=comentarioCtl 