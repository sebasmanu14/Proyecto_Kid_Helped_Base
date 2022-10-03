const objetivoCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

objetivoCtl.mostrar=(req,res)=>{
    res.render('objetivo/agregar');
} 
 
//mandar
objetivoCtl.mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {objetivo,redesSociales}=req.body
    const nuevoEnvio={
        objetivo,
        redesSociales
    }
    await orm.objetivo.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/objetivo/listar/'+id)
}

objetivoCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from objetivos')
    res.render('objetivo/listar',{lista})
}

//traer datos
objetivoCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from objetivos where id_objetivo =?',[ids])
    res.render('objetivo/editar',{lista})
}

objetivoCtl.actualizar=async(req,res)=>{
    const id =req.user.id_usuario
    const ids=req.params.id
    const {objetivo, redesSociales}=req.body
    const nuevoEnvio={
        objetivo,
        redesSociales
       
    }
    await orm.objetivo.findOne({where:{id_objetivo:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/objetivo/listar/'+id);
}

objetivoCtl.eliminar= async(req,res) =>{
   const ids= req.params.id
   const id =req.user.id_usuario
   await orm.objetivo.destroy({where:{id_objetivo:ids}})
   .then(()=>{
   req.flash('success','Eliminado exitosamente')
   res.redirect('/objetivo/listar/'+id);   
   })
}


module.exports=objetivoCtl