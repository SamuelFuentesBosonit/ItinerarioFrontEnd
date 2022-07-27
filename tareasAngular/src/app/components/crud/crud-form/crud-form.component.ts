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
  //passPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";, Validators.pattern ( this.passPattern )
  mailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted? : any;


  countries!: Country[];

  country: Country = {
    iso2: '',
    iso3: '',
    country: '',
    cities: []
  };

  cities!: string[];

  constructor(  private formBuilder: FormBuilder,
                private countrySvc: CountriesService) {}

  ngOnInit ( ): void { 
    this.countrySvc.getCountries()
    .pipe(
      tap( ( countryList: Country[] ) => {this.countries = countryList
      console.log(this.countries)} )
      ).subscribe();

      this.crudForm.get("formCountry")?.valueChanges
        .subscribe( city =>{ this.cities = city.cities
        console.log( city.cities )
      }
      );
    }

  crudForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern ( this.namePattern ) ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    passwordConfirm: [ '', [ Validators.required ] ],
    mail: [ '', [ Validators.required, Validators.pattern ( this.mailPattern ) ] ],
    checkBoxPromotion: [ '', Validators.required ],
    formCountry: [ '', Validators.required ],
    formCity: [ '',  Validators.required ]
  }, {
    passValidator: [this.passConfirm ( 'password', 'passwordConfirm' ) ]
  });

  launchError ( value: string ) {
    return this.crudForm.get( value )?.invalid
    && this.crudForm.get( value )?.touched;
  }

  unTouchedInput ( value: string ) {
    return this.crudForm.get( value )?.untouched;
  }

  testPass (p1:string, p2:string) {
    const pa1 = this.crudForm.get( p1 )?.value;
    this.crudForm.get( p1 )?.touched;
    const pa2 = this.crudForm.get( p2 )?.value;
    this.crudForm.get( p1 )?.touched;
    (pa1 == pa2)
    ?true 
    :false;
  }
  
  passConfirm ( p1: string, p2: string) {
    return (formGroup: AbstractControl ): ValidationErrors | null => {
      const pass1 = formGroup.get( p1 )?.value;
      const pass2 = formGroup.get( p2 )?.value;

      if( pass1 !== pass2 ) {
        formGroup.get( p2 )?.setErrors({
          notEquals: true
         })
         return { notEquals : true };
      }
      return null;
    }

  }

  onFormSubmit ( ) {
    this.crudForm.markAllAsTouched();
    } 

} 



