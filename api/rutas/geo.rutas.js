//imports
const express=require('express');
const rutas= express.Router();
const controladores=require('../controladores/geo.controladores');


//creo rutas
rutas.get('/distancia/5km',controladores.radioPara1);

//exporto
module.exports=rutas;