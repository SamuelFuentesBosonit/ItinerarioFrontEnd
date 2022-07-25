import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:any={};
  constructor( private http:HttpClient ) {
    console.log("Servicio Corriendo");
    http.get('../../assets/countries.json').subscribe( resp => {
      this.info=resp;
      console.log(this.info)
    })
   }
}
