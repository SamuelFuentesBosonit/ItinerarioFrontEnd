import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html'
})
export class GifsPageComponent {

  @ViewChild('#txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar( ) {

    const valor = this.txtBuscar.nativeElement.value;

    console.log( this.txtBuscar);

    this.txtBuscar.nativeElement.value = '';
  }


}
