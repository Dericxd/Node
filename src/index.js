const express = require('express');
const app = express();
const path = require('path');

// Settings => congifuracion
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares

// Routes
app.use(require('./routes/index'));


// Static files
app.use(express.static(path.join(__dirname,'/public')));

// Listening the server => escuchando al servidor
app.listen(app.get('port'), ()=>{ //<- esto se le conoces como funciones de flecha y es equivalente a function (){}
    console.log('Server on port', app.get('port'));
});