const puntCtl = {};
const orm =require('../conf/dataBase.orm')
const sql =require('../conf/database.sql')

puntCtl.showPuntuacion = (req, res) => {
    res.render("puntuacion/puntuacion");
};

//enviar datos
puntCtl.enviar=async(req,res) =>{
    const id =req.cliente.id_cliente
    const {puntuacion}=req.body
    const nuevoEnvio={
        puntuacion
    }
    await orm.puntCtl.create(nuevoEnvio)
    req.flash('success','guardado exisosamente')
    res.redirect('puntuacion/puntuacion'+id)
}

puntCtl.lista=async(req,res)=>{
    const lista=await sql.query('select * from puntuacion')
    res.render('puntuacion/puntuacion',{lista})
}

//traer los datos 
puntCtl.traer=async(req,res)=>{
    const ids=req.params.id
    const lista = await sql.query('select * from puntuaciones where id_puntuacion =?', [ids])
    res.render('puntuacion/puntuacion',{lista})
}

//actualizar
puntCtl.actualizar=async(req,res)=>{
    const id = req.cliente.id_cliente
    const ids = req.params.id
    const{puntuacion}=req.body
    const nuevoEnvio={
        puntuacion
    }
    await orm.puntuacion.findOne({where:
    {id_puntuacion:ids}})
    .then(actualizar =>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','actualizado exitosamente')
    res.redirect('/puntuacion/actualizar'+id);
}

puntCtl.eliminar= async(req,res) =>{
    const ids= req.params.id
    const id = req.cliente.id_cliente
    await orm.puntuacion.destroy({where:
    {id_puntuacion:ids}})
    .then(()=>{
        req.flash('success','Eliminado Exitosamente')
        res.redirect('/puntuacion/puntuacion'+id)
    })

}
module.exports = puntCtl;