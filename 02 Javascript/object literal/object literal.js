/**
 * Created by USRDEL on 10/5/17.
 */

//object literals

//no es necesario poner nombre:nombre solo nombre

var nuevaFuncion = (nombre,apellido)=>{

    var usuario1= {
        nombre:nombre,
        apellido
    };
    console.log(`hola `+usuario1.nombre + usuario1.apellido);

    var usuario2 = {
        nombre
    };
    console.log(usuario1.nombre);

}

nuevaFuncion(`danilo`,`nieto`)

//let es el nuevo var
