import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
//interface
import { Country } from '../interfaces/country.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _refresh$ = new Subject<void>();

  private apiURLcountries ='http://localhost:3000/countries';
  private apiURLusers ='http://localhost:3000/users';

  private _Table  : BehaviorSubject<boolean> = new BehaviorSubject<boolean>( true );

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
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
      .pipe(
        tap( ( ) => this._refresh$.next( ) )
    ); 
  }

  getOneUser( user: User ): Observable<User> {
    return this.http.get<User>(`${this.apiURLusers}/${user.id}`)
  }

  editUser( user: User ): Observable<User> {
    return this.http.post<User>(`${this.apiURLusers}/${user.id}`, user)
  }

  delUser( user: User ): Observable<User> {
    return this.http.delete<User>(`${this.apiURLusers}/${user.id}`)
     .pipe(
        tap( ( ) => this._refresh$.next( ) )
      );
  
  }
  //editar
  sendFromTableToForm  () {
    return this._Table.asObservable();
  }
}
