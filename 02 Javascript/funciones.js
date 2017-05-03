/**
 * Created by USRDEL on 3/5/17.
 */

//void

function holaMundo(){
    console.log('hola Mundo');
};

holaMundo();

//entero
//el doble de un entero

function doble(numero) {
    return numero*2;
}
console.log(doble(2));//4

//Devuelva mult 2 num
function multiplicar2(a,b) {
    return a*b;
}
console.log(multiplicar2(2,5));

var seis =  multiplicar2(1,6);
var multiplicacion = multiplicar2;
console.log(multiplicacion(8,9));
//funciones anonimas
//void
var hola = function hola() { // no es necesario poner el nombre
    console.log('hola')
}
hola();
console.log(hola()); //undefined

var resultado = hola();
console.log(resultado); //undefined

console.log('>>Hola:',hola);

function  hazAlgo(algo) {
    algo()
}

hazAlgo(function () {
    console.log('Holaaa')
});
hazAlgo(function () {
    return 2
});

function  transformarNumero(numero,transformacion) {
    transformacion(numero);
}

transformarNumero(5,function (numero) {
    return numero * 2;
});
transformarNumero(8,function (numero) {
    return numero / 2
});