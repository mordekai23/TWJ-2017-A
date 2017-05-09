
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


