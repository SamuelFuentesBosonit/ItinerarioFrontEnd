import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchCountryService {

  constructor(private http: HttpClient) { }
  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('src/assets/test.json');
  }
/*
  getCountry ( url: string ) {
    return this.http.get(url);
  }
  */
}
