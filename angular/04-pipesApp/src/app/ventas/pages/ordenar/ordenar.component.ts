import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  cambiar(){
    return ( this.enMayusculas ) 
      ? this.enMayusculas = false
      : this.enMayusculas = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
