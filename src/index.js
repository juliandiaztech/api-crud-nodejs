const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');

const { database } = require('./keys');

// INICIALIZATIONS

const app = express();


// SETTINGS

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

// MIDDLEWARES

app.use(session({
    secret: 'superfuds-app',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//GLOBAL VARIABLES

app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    next();
});

//ROUTES

app.use(require('./routes/index'));
app.use('/bodegas', require('./routes/bodegas'));

app.use(require('./routes/authentication'));

//PUPLIC

app.use(express.static(path.join(__dirname, 'public')));

//starting server

app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});
