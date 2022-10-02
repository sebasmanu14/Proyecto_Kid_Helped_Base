const respuestaComentarioCtl = {}
const orm = require('../conf/dataBase.orm')
const sql = require('../conf/database.sql')

respuestaComentarioCtl.mostrar = (req, res) => {
    res.render('respuestaComentario/agregar');
}


respuestaComentarioCtl.mandar = async (req, res) => {
    const id = req.user.id_comentario
    const { creacionrespuestaComentario, actualizarrespuestaComentario } = req.body
    const nuevoEnvio = {
        actualizarrespuestaComentario,
        creacionrespuestaComentario
    }
    await orm.respuestaComentario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/respuestaComentario/listar/' + id)
}

respuestaComentarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from actividades')
    res.render('respuestaComentario/listar', { lista })
}

//traer datos
respuestaComentarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from actividades where id_actividad =?', [ids])
    res.render('respuestaComentario/editar', { lista })
}

respuestaComentarioCtl.actualizar = async (req, res) => {
    const id = req.user.id_comentario
    const ids = req.params.id
    const { creacionrespuestaComentario, actualizarrespuestaComentario} = req.body
    const nuevoEnvio = {
        actualizarrespuestaComentario,
        creacionrespuestaComentario
    }
    await orm.respuestaComentario.findOne({ where: { id_respuestaComentario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/respuestaComentario/listar/' + id);
}
respuestaComentarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_comentario
    await orm.respuestaComentario.destroy({ where: { id_respuestaComentario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/respuestaComentario/listar/' + id);
        })
}


module.exports = respuestaComentarioCtl