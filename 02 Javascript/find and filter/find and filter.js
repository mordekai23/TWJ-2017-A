/**
 * Created by USRDEL on 10/5/17.
 */

//Find Filter

let arreglo = [8,6,9,10,4,2,7,8];

let notasSupletorio = arreglo.map((valor,indice)=>{
        return valor/5;
})
.filter((valor)=>{
    return valor>=1;})
.find((valor)=>{
    return valor== 1.7;
})
;

console.log(notasSupletorio)