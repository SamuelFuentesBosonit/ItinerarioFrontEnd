import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Dare Devil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lanter',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiar(){
    return ( this.enMayusculas ) 
      ? this.enMayusculas = false
      : this.enMayusculas = true;
  }
  


}
