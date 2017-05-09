/**
 * Created by USRDEL on 9/5/17.
 */
//FAT ARROW FUNCTION

var holaMundo = function(){ console.log("Hola Mundo") }


holaMundo()

var holaMundo2 = ()=>{ return "hola mundo 2" }

holaMundo2()


var holaMundo3 = (nombre)=> "Hola Mundo 3"
holaMundo3()

var holaMundo4 = (nombre)=> `Hola: ${nombre}`
holaMundo4(`danilo`)


var holaMundo5 = (apellido)=> `Hola: ${apellido}`
holaMundo5(`nieto`)


var holaMundo6 = (nombre,apellido)=> `Sr: ${apellido} ${nombre}`
holaMundo6(`danilo`,`nieto`)

