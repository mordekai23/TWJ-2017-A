
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // http
  ],
  bootstrap: [InicioComponent]
})


export class AppModule { }
