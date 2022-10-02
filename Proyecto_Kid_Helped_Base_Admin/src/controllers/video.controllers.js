const videoCtl = {}
const orm = require('../conf/dataBase.orm')
const sql = require('../conf/database.sql')

videoCtl.mostrar = (req, res) => {
    res.render('video/agregar');
}

//mandar
videoCtl.mandar = async (req, res) => {
    const id = req.user.id_capacitacion
    const { url, descripcion, titulo, tipo } = req.body
    const nuevoEnvio = {
        url,
        descripcion,
        titulo,
        tipo
    }
    await orm.video.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/video/listar/' + id)
}

videoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from videos')
    res.render('video/listar', { lista })
}

//traer datos
videoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from videos where id_video =?', [ids])
    res.render('video/editar', { lista })
}

videoCtl.actualizar = async (req, res) => {
    const id = req.user.id_capacitacion
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
    res.redirect('/video/listar/' + id);
}
videoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.video.destroy({ where: { id_video: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/video/listar/' + id);
        })
}


module.exports = videoCtl