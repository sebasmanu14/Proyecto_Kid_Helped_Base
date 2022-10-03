const videoActividadCtl = {}
const orm = require('../conf/dataBase.orm')
const sql = require('../conf/database.sql')

videoActividadCtl.mostrar = (req, res) => {
    res.render('videoActividad/agregar');
}

//mandar
videoActividadCtl.mandar = async (req, res) => {
    const id = req.user.id_actividad
    const { url, descripcion, titulo, tipo } = req.body
    const nuevoEnvio = {
        url,
        descripcion,
        titulo,
        tipo
    }
    await orm.video.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/videoActividad/listar/' + id)
}

videoActividadCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from videos')
    res.render('videoActividad/listar', { lista })
}

//traer datos
videoActividadCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from videos where id_video =?', [ids])
    res.render('videoActividad/editar', { lista })
}

videoActividadCtl.actualizar = async (req, res) => {
    const id = req.user.id_actividad
    const ids = req.params.id
    const { url, descripcion, titulo, tipo } = req.body
    const nuevoEnvio = {
        url,
        descripcion,
        titulo,
        tipo
    }
    await orm.video.findOne({ where: { id_video: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/videoActividad/listar/' + id);
}
videoActividadCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_actividad
    await orm.video.destroy({ where: { id_video: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/videoActividad/listar/' + id);
        })
}


module.exports = videoActividadCtl