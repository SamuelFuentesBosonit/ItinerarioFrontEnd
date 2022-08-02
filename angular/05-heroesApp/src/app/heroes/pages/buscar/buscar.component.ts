import { Component, OnInit } from '@angular/core';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroes[] = [];
  heroeSeleccionado: Heroes | undefined;

  constructor( private heroesSvc: HeroesService) { }

  ngOnInit(): void {
  }

  buscando ( ) {
    this.heroesSvc.getSugerencias( this.termino.trim() )
      .subscribe( heroes => this.heroes = heroes )
  }

  opcionSeleccionada ( event: MatAutocompleteSelectedEvent) {

    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;
    this.heroesSvc.getHeroePorId( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe )

  }

}
