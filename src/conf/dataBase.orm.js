const Sequelize=require('sequelize')
const mysql=require('mysql2/promise')

const dbName=process.env.DB_SCHEMAS || 'kidhelped'

mysql.createConnection({
    host:process.env.DB_HOST || '127.0.0.1',
    port:process.env.DB_PORT || '3306',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PASSWORD || ''
}).then(connection=>{
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res)=>{
        console.info('creada o comprobada')
    })
})
//Models
const usuarioModels=require('../models/usuario')

//Conexion
const sequelize=new Sequelize(
    'kidhelped',
    'root',
    '',{
host:'localhost',
dialect:'mysql',
pool:{
    max:10,
    min:0,
    require:30000,
    idle:10000
}
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('conectado')
})
.catch(err=>{
    console.log('no conectado')
})

sequelize.sync({force:false})
.then(()=>{
    console.log('tablas sincronizadas')
})
//sincronia
const usuario=usuarioModels(sequelize,Sequelize)

//relaciones


module.exports={
usuario,

}