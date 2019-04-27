//imports
const express=require('express');
const rutas= express.Router();
const controladores=require('../controladores/geo.controladores');


//creo rutas
rutas.get('/radio5km',controladores.radios);
rutas.get('/iniciarbbdd',controladores.iniciarListas);
rutas.get('/distancia',controladores.distancia);
rutas.get('/radio',controladores.radioPara1);

//exporto
module.exports=rutas;