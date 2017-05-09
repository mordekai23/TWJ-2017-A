
// Comentario
console.log('Hello Word');

var danilo = {
    nombre:"danilo",
    apellido:"nieto",
    fechaNacimiento: new Date(),
    imprimir:function () {
        console.log(this.nombre,this.apellido,this.diferenciaEdad(1992));
    },
    ano:function () {
        return this.fechaNacimiento.getFullYear()
    },
    diferenciaEdad:function (edadAComparar) {
        return Math.abs(this.ano - edadAComparar)
    }
};
danilo.imprimir();

//template strings

var hola= `Ecuador, oficialmente denominado República de Ecuador, es un país latinoamericano ubicado en la parte noroccidental de Sudamérica. Limita al norte con Colombia, al sur y al este con Perú. El océano Pacífico baña la costa occidental y lo separa de las Islas Galápagos, ubicadas mil kilómetros al oeste. Una sección volcánica de la cordillera de los Andes divide el territorio de norte a sur, dejando a su flanco occidental el golfo de Guayaquil y una llanura boscosa, y al oriente, la Amazonía. Ecuador ocupa un área de 283 561 km²,9 por lo que se trata del cuarto país más pequeño del subcontinente. Es el octavo país más poblado de Latinoamérica, con algo más de 16 millones de habitantes, y el más densamente poblado de América del Sur15 y el quinto en el continente. Es el país con una de las más altas concentraciones de ríos por km2 en el mundo,16 como uno de los países de mayor diversidad por km217 18 y como uno de los países con mayor biodiversidad del mundo.19

La capital del país es Quito y la ciudad más poblada, Guayaquil. La lengua oficial es el español, hablado por un 99% de la población, junto a otras trece lenguas indígenas reconocidas, incluyendo kichwa y shuar. Para 2016, el Índice de Desarrollo Humano de Ecuador es catalogado como "alto", ubicándose en el puesto 88 a nivel mundial y 10 a nivel de América Latina, tras Perú y delante de Colombia. Con un PBI PPA de 172 100 millones de dólares, la economía ecuatoriana ocupa el puesto número 59 a nivel mundial20 y el séptimo de Sudamérica.21 El país es un importante exportador de petróleo22 y consta como el principal exportador de banano a nivel mundial23 y uno de los principales de flores, camarones y cacao.24 Ecuador recibió en 2014 aproximadamente 1,3 millones de turistas extranjeros, lo cual posiciona al país como uno de los referentes regionales en recepción de turismo internacional.25

Los primeros asentamientos humanos en el territorio se remontan a 12 000 años a. C. (El Inga, Chobshi, Cubilán, Las Vegas).26 El Imperio incaico conquistó parcialmente la región a mediados del siglo XV, y en 1543 comenzó la conquista española, tras la que permaneció como colonia durante casi trescientos años. La época independentista tuvo sus orígenes en 1809 e inició el proceso emancipador comprendido desde 1820 hasta 1822. Después de la definitiva independencia del dominio español, parte del territorio se integró rápidamente en la Gran Colombia, mientras el territorio del litoral permaneció independiente hasta la anexión manu militari por Simón Bolívar. En 1830 los territorios colombianos del sur se separaron y se creó la nación ecuatoriana. Desde los inicios de la república existió inestabilidad política, lo que condujo al origen de varias revoluciones a lo largo del siglo XIX y conflictos limítrofes con Colombia. El siglo XX estuvo marcado por los conflictos limítrofes con el Perú y la conformación de gobiernos militares. En 1979, el país volvió al sistema democrático, aunque la inestabilidad política de 1996 a 2006 llevó a una crisis económica, política y social que condujo a la dolarización de su economía y al derrocamiento de tres presidentes antes de terminar su mandato.`

var nombre="Danilo"


var htmlES6="<h1>hola "+ nombre+"</h1>"

console.log(`<h1>hola "+ ${nombre}+"</h1>`);

htmlES6
