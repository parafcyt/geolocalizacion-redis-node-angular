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

//conexion con bbdd

const redisCliente=require('./conexion/conexion');
const conexion=redisCliente();


//cargo cervecerías
conexion.geoadd('cervecerias', '-32.47', '-58.24', "cer1");
conexion.geoadd('cervecerias', '-43.47', '-46.24', "cer2");
conexion.geoadd('cervecerias', '-78.47', '-58.24', "cer3");
conexion.geoadd('cervecerias', '-22.47', '-77.24', "cer4");




//corro servidor web
app.listen(3000,()=>{
    console.log('escuchando en el 3000');
});