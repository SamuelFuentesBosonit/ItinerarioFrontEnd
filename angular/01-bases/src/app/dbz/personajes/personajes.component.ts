import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];

  get peronajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){  }

}
