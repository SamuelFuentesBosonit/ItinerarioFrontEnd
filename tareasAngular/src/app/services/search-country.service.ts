import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchCountryService {
  info: any={};
  constructor ( private http: HttpClient ) {
    console.log("ahí va!");
    http.get('../../assets/test.json')
    .subscribe( resp => {
      this.info=resp;
      console.log(this.info.country)
    })
    
  }
/*
  constructor(private http: HttpClient) { }
  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('https://api.jsonbin.io/v3/qs/62dea6d9248d43754f03aae8');
  }
  */
}
