import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(valueHe: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    if( ordenarPor === 'sin valor' ){
      return valueHe;
    }else{
      valueHe = valueHe.sort( ( a,b ) => ( a.nombre > b.nombre ) ? 1 : -1 );
      return valueHe;
    }
  }

}
