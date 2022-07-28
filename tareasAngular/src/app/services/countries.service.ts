import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private reFresh$ = new Subject<void>();

  private apiURLcountries ='http://localhost:3000/countries';
  private apiURLusers ='http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  get refresh$ ( ) {
    return this.reFresh$;
  }

  getCountries( ) : Observable<Country[]> {
    return this.http.get<Country[]>( this.apiURLcountries )
  }
  getUsers( ) : Observable<User[]> {
    return this.http.get<User[]>( this.apiURLusers )
  }

  insertUser( user: User ): Observable<User> {
    console.log(user, 'service')
    return this.http.post<User>( this.apiURLusers, user )    
  }

  delUser( user: User ): Observable<User> {
    return this.http.delete<User>(`${this.apiURLusers}/${user.id}`)
    /*
     .pipe(
        tap( ( ) => this.refresh$.next( )
         )
      );
    */
  }


}
