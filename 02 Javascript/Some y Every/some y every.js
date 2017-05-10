/**
 * Created by USRDEL on 10/5/17.
 */

//Some y Every

let arreglo = [8,6,9,10,4,2,7,8];

let notasSupletorio = arreglo.map((valor,indice)=>{
        return valor/5;
})
.every((valor)=>{//some or every and
    return valor>0;
})
;

console.log(notasSupletorio)
////FALTA EL REDUCE