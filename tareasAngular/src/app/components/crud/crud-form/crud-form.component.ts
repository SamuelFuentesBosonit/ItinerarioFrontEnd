import { Component, OnInit } from '@angular/core';

import { Country } from '../../../interfaces/country.interface';

import { CountriesService } from '../../../services/countries.service';

import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  countries!: Country[];

  constructor( private countrySvc: CountriesService ) {}

  ngOnInit(): void { 
    this.countrySvc.getCountries()
    .pipe(
      tap( ( countryList: Country[] ) => this.countries = countryList )
    )
    .subscribe();
  }
  
}


