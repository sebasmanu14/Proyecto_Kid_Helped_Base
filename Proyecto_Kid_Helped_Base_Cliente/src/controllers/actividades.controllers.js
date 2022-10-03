const actividadCtl = {}
const orm = require('../conf/dataBase.orm')
const sql = require('../conf/database.sql')

actividadCtl.mostrar = (req, res) => {
    res.render('puntuacion/actividades');
}

actividadCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from actividades')
    res.render('puntuacion/actividades', { lista })
}

module.exports = actividadCtl