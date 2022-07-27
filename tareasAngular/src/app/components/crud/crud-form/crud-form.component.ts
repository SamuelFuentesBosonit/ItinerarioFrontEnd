import { Component, OnInit } from '@angular/core';

import { switchMap, tap } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { Country } from '../../../interfaces/country.interface';
import { User } from '../../../interfaces/user.interface';

import { CountriesService } from '../../../services/countries.service';





@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  namePattern = "([a-zA-Z]+)( ([a-zA-Z]+))? ([a-zA-Z]+)( ([a-zA-Z]+))?";
  passPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted? : any;


  countries!: Country[];

  country: Country = {
    iso2: '',
    iso3: '',
    country: '',
    cities: [

    ]
  };

  cities!: string[];

  constructor(  private formBuilder: FormBuilder,
                private countrySvc: CountriesService) {}

  ngOnInit(): void { 
    this.countrySvc.getCountries()
    .pipe(
      tap( ( countryList: Country[] ) => {this.countries = countryList
      console.log(this.countries)} )
      ).subscribe();

      this.crudForm.get("formCountry")?.valueChanges
        .subscribe( city =>{ this.cities = city.cities
          
        console.log( city.cities )});
    }

  crudForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern ( this.namePattern ) ] ],
    password: [ '', [ Validators.required, Validators.minLength(6), Validators.pattern ( this.passPattern ) ] ],
    passwordConfirm: [ '', [ Validators.required ] ],
    mail: [ '', [ Validators.required, Validators.pattern ( this.mailPattern ) ] ],
    checkBoxPromotion: [ '' ],
    formCountry: [ '', Validators.required ],
    formCity: [ '',  Validators.required ]
  }, {
    passValidator: [this.passConfirm ( 'password', 'passwordConfirm' ) ]
  });


  launchError(value: string){
    return this.crudForm.get(value)?.invalid
    && this.crudForm.get(value)?.touched;
    }
  
  passConfirm( pass: string, passC: string ) {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const password = formGroup.get( pass )?.value;
      const passwordConfirm = formGroup.get( passC )?.value;

      if( password !== passwordConfirm ) {
        formGroup.get( passC )?.setErrors( {
          notEqual: true 
        } )
        return { 
          notEqual: true 
        }
      }
      formGroup.get( passC )?.setErrors( null );
      return null;
    }
  }

  onFormSubmit ( ) {
    this.crudForm.markAllAsTouched();
    } 

} 



