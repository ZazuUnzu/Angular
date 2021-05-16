import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './../persona';

@Component({
  selector: 'app-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit {

  listaPersonas: Array<Persona> = []

  persona: Persona = {
    nombre: '',
    apellidos: '',
    edad: 0,
    dni: '',
    cumpleanos: '',
    colorFavorito: '',
    sexo: '',
  }

  selectSexo = [
    { id: 1, value: 'Mujer' },
    { id: 2, value: 'Hombre' },
    { id: 3, value: 'No binario' },
    { id: 4, value: 'No declarado' }
  ]

  // opcionesSexo: string[] = ['Mujer', 'Hombre', 'No binario', 'No declarado']

  accion: string = 'insertar'
  posicion: number = 0



  constructor() { }

  ngOnInit(): void {}

 

  insertarContacto(): void {
    if (this.accion === 'insertar') {

      if (this.persona.edad >=0 && this.persona.edad <= 125) {
  
          //**** OTRA FORMA DE MOSTRAR LA FECHA EN DD/MM/AAAA:
          //1. Crear una variable para instanciar y almacenar la fecha de nacimiento
          // let fechaNacimiento = new Date(this.persona.cumpleanos)
          //2.  Obtener la fecha en formato dd/mm/aaaa
          // let dia = fechaNacimiento.getDay()
          // let mes = fechaNacimiento.getMonth()
          // let anyo = fechaNacimiento.getUTCFullYear()
          // this.persona.cumpleanos = `${dia}/${mes}/${anyo}`
  
          this.listaPersonas.push(this.persona);

          this.persona = {
            nombre: '',
            apellidos: '',
            edad: 0,
            dni: '',
            cumpleanos: '',
            colorFavorito: '',
            sexo: '',
          }

      } else {
        alert('La edad debe estar comprendida entre 0 y 125 años')
      }
  
    } else {
      this.listaPersonas[this.posicion] = this.persona
      this.accion = 'insertar'
    }
    
  }
  actualizarContacto(posicionActualizar: number): void {
    this.persona = this.listaPersonas[posicionActualizar]
    this.accion = 'actualizar'
    this.posicion = posicionActualizar
  }
  
  eliminarContacto(posicionEliminar: number): void {
    this.listaPersonas.splice(posicionEliminar, 1)
  } 
  resetForm(miform: NgForm) {
    miform.resetForm();
  }
}
  
  




