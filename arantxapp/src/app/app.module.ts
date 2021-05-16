import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}], 
  bootstrap: [AppComponent]
})
export class AppModule { }
