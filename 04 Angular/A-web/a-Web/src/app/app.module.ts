import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//decorators sirven para meter metadatos
//logica-html, visualizacion-css
@NgModule({
  declarations: [
    AppComponent
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
