import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EstiloComponent } from './estilo/estilo.component';
//decorators sirven para meter metadatos
//logica-html, visualizacion-css
@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    EstiloComponent
  ],
  imports: [
    //module en angular es una aplicacion
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
