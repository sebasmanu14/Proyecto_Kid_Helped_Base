const capacitacionCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

capacitacionCtl.mostrar=(req,res)=>{
    res.render('/usuario/agregar');
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
    res.redirect('/usuario/listar/'+id)
}

capacitacionCtl.listar=async(req,res)=>{
    const lista=await sql.query('select * from capacitaciones ')
}