import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

//interfaces
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2/'

  get httpGetParams () {
    return new HttpParams()
    .set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpGetParams } );
  }
}
