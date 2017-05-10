/**
 * Created by USRDEL on 10/5/17.
 */


//FOR EACCH--->itera un arreglo
//OPERADORES


let arreglo = [8,6,9,10,4,2,7,8];

let resultado = arreglo.map((valor,indice)=>{
        return valor*2/10;
});

//console.log(resultado)

let arreglo2 = [{
    nombre:"Danilo", // Sr. o Sra. Danilo
    fecha:new Date().getDate(),
    ano:new Date().getFullYear()
},{
    nombre: "Brenda", //Sr. o Sra. Brenda
    fecha:new Date().getDate(),
    ano:new Date().getFullYear()
}];

let resultadoNombres = arreglo2.map((valor,indice)=>{
        return "Sr. o Sra. " + valor.ano;
});

console.log(resultadoNombres)


let nuevoArreglo = arreglo2.map((usuario)=>{
    usaurio.nombre = "Sr. o Sra. " + usuario.nombre
usaurio.fechaCreacion = new Date();
usaurio.anoCreacion = new Date().getFullYear()
});

console.log(nuevoArreglo)
