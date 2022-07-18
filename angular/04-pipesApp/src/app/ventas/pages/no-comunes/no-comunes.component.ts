import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nlSelect
  nombre: string = 'Samuel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nlPlural
  clientes: string[] = ['Maria', 'Rodolfo', 'Pedro', 'Marco', 'Aurelio', 'Quinto'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }
  
  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Samuel',
    edad: 31,
    direccion: 'Sevilla, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Temenemos data de promesa' );
    }, 3500
    );
  })

}
