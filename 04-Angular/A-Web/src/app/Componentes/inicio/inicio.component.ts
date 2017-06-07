import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Adrian";
  usuarios:UsuarioClass[] = [];
  nuevoUsuario:UsuarioClass = new UsuarioClass("");
  planetas : PlanetaStarWars[] = [];
  //planetas2 : Array<PlanetaStarWars> = [];


  //command + a  y luego command command+alt+l

  arregloUsuarios = [
    {
      nombre: "Danilo",
      apellido: "Nieto",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado:false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:true
    }]



  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }



  ngOnInit() {
    //Esta listo el componente
    //console.log(`El vaor de planeta es: ${this.planetas}`);
    //console.log('Nuevo Usuario: ')
  this._http
    .get("http://localhost:1337/Usuario")
    .subscribe(
      respuesta=>{
        let rjson:UsuarioClass = respuesta.json();
        this.usuarios = rjson;
        console.log("Usuario: ",this.usuarios)
      },
      error=>{
        console.log("Error",error)
      }
    )
  }

  cambiarNombre(): void {
    console.log("Entro");
    this.nombre = "Rafico a Lenin";
  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;

  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta)=>{
              planeta.imagenURL = "/assets/img/"+planeta.name+'.jpg';
              return planeta;
            }
          );
        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }
      );
  }

  crearUsuario(){
    console.log("Entro a crear usuario");

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
        },
        error=>{
          console.log('error',error)
        }
      )
  }

}

  class UsuarioClass {
  nombre:string;
  constructor(nombre?:string){
    this.nombre=nombre;
  }



}
















