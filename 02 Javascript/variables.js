/**
 * Created by USRDEL on 3/5/17.
 */
// En JS se define una variable con la palabra reservado <var>

// ENTEROS
var dos = 2;
var tres = 3 // no es necesario el ;
var quince = 15;
var diezYSiete = 17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

// Float

var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//Todas las demas

var verdaderoOFalso = true;
var falso = false;
var nombre = 'Danilo';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuantroString = 4; //casteo
cuatroString = true;
cuatroString = false;
cuatroString = -2345;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;
console.log(cuatroString);

var variable;
console.log(variable);

var numero2 = 2;
console.log(typeof numero2);

//OBJETOS JSON

var danilo = {
    "id":1,
    nombre:'Danilo',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado: true,
    prestamos:false,
    hijos:null,
    altura:1.78,
    negativo:-1,
    mascota:{
        nombre:'Firulais',
        fechaNacimiento: new Date()
    }
};
console.log('OBJETO:',danilo);
console.log(danilo.altura);
console.log(danilo.mascota.fechaNacimiento);
danilo.altura = 1.48;
console.log(danilo.mascota.fechaNacimiento);
console.log(danilo+" Hola");

var arreglo = [1,
'henry',
2.4,
false,
true,
null,
undefined,
new Date()
]

var nuevoObjeto = {
    papas:['chola','chaucha','maria'],
    cebolla:['paiteña','perla','blanca']
};

var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);

var arregloDeObjetos = [
    {
        id:1,
        nombre: 'Danilo'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];

//splice ('Delimita la posicion en la que vamos a trabajar,
//numero de objetos a eliminarse)

console.log('antes:',arregloDeObjetos);
arregloDeObjetos.splice(0,1);
console.log('despues',arregloDeObjetos);
arregloDeObjetos.splice(0,0,{id:3,nombre:'Eve'});
console.log('despueees:',arregloDeObjetos);