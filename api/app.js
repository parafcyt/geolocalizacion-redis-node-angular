//imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


//instancio servidor
const app=express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//llamo a rutas
app.use('/api',require('./rutas/geo.rutas'));




//corro servidor web
app.listen(3000,()=>{
    console.log('escuchando en el 3000');
});