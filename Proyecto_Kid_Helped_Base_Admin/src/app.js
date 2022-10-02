const express = require("express");
const morgan = require("morgan"); 
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

const {database}=require('./keys')

//Inicializacion
const app = express();    
require('./lib/passport')

const handlebars=exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname,("views"), "layouts"),
    partialsDir: path.join(__dirname,("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
})

//Settings
app.set('port', process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine( ".hbs",handlebars.engine);
app.set("view engine", ".hbs");
// widdlewars
app.use(morgan("dev"));
app.use(fileupload())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret:'julieth',
    resave:false,
    saveUninitialized:false,
    store: new mysqlstore(database)
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
//global
app.use((req, res, next) => {
    app.locals.message=req.flash('message')
    app.locals.success=req.flash('success')
    app.locals.user=req.user
  next();
});
//public
app.use(express.static(path.join(__dirname, "public")));
//routes
app.use(require('./routes/index.router'))
app.use(require('./routes/login.router'))
app.use('/capacitacion',require('./routes/capacitacion.router'))
app.use('/tipoCapacitacion',require('./routes/tipocapacitacion.router')) 
app.use('/video',require('./routes/video.router'))
app.use('/clasificacion',require('./routes/clasificacion.router'))
app.use('/subclasificacion',require('./routes/subclasificacion.router'))
app.use('/objetivo',require('./routes/objetivo.router'))
app.use('/actividad', require('./routes/actividad.router'))
app.use('/videoActividad', require('./routes/videoActividad.router'))
app.use('/comentario', require('./routes/comentario.router'))
module.exports=app

