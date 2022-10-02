const actividadCtl = {}
const orm = require('../conf/dataBase.orm')
const sql = require('../conf/database.sql')

actividadCtl.mostrar = (req, res) => {
    res.render('actividad/agregar');
}

//mandar
actividadCtl.mandar = async (req, res) => {
    const id = req.user.id_usuario
    const { nombreActividad, descripcion, urlActividad } = req.body
    const nuevoEnvio = {
        nombreActividad,
        descripcion,
        urlActividad
    }
    await orm.actividad.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/actividad/listar/' + id)
}

actividadCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from actividades')
    res.render('actividad/listar', { lista })
}

//traer datos
actividadCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from actividades where id_actividad =?', [ids])
    res.render('actividad/editar', { lista })
}

actividadCtl.actualizar = async (req, res) => {
    const id = req.user.id_usuario
    const ids = req.params.id
    const { nombreActividad, descripcion, urlActividad } = req.body
    const nuevoEnvio = {
        nombreActividad,
        descripcion,
        urlActividad
    }
    await orm.actividad.findOne({ where: { id_actividad: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/actividad/listar/' + id);
}
actividadCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.actividad.destroy({ where: { id_actividad: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/actividad/listar/' + id);
        })
}


module.exports = actividadCtl