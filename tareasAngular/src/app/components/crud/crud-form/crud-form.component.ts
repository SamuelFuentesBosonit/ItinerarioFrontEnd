import { Component, OnInit } from '@angular/core';
import data from 'src/assets/countries.json'

import { SearchCountryService } from 'src/app/services/search-country.service';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { SelectItem } from 'primeng/api/selectitem';
import { Country } from '../../../interfaces/country.interface';
import { InfoPaginaService } from '../../../services/info-pagina.service';



@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  constructor( public infoPagina: InfoPaginaService ) {  }

 ngOnInit(): void { }

  /*
  lista2 : string[] = ["hola","que","tal", "estas"];

  lista: any = this.json.getCountry;

  public contentfile:string='';
  
  item: string = '';

  country!: Country[] 
  */
  /*=[
    {
        "iso2": "AF",
        "iso3": "AFG",
        "country": "Afghanistan",
        "cities": [
          "Herat",
          "Kabul",
          "Kandahar",
          "Molah",
          "Rana",
          "Shar",
          "Sharif",
          "Wazir Akbar Khan"
      ]
    },
    {
        "iso2": "AL",
        "iso3": "ALB",
        "country": "Albania",
        "cities": [
          "Elbasan",
          "Petran",
          "Pogradec",
          "Shkoder",
          "Tirana",
          "Ura Vajgurore"
      ]     
    }
  ]
*/
/*
  constructor( public json: SearchCountryService ) {
   }

  ngOnInit(): void {
    this.json.getCountry()
    .subscribe( country => {
      country = this.country;
    })

  }

  public firstWay():void{
    console.log(data);   
  }
*/
 /*
  ngOnInit(): void {
    this.json.getCountry('src/assets/countries.json').subscribe( ( res: any ) => {
      console.log( res );
    })
  }
  */
}


