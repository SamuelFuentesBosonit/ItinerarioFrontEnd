import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';
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

  namePattern = "^[a-z0-9_-]{8,15}$";
  passPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted? : any;


  countries!: Country[];

  constructor(  private countrySvc: CountriesService,
                private formBuilder: FormBuilder ) {}

  ngOnInit(): void { 
    this.countrySvc.getCountries()
    .pipe(
      tap( ( countryList: Country[] ) => this.countries = countryList )
    )
    .subscribe();
  }

  crudForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern ( this.namePattern ) ] ],
    password: [ '', [ Validators.required, Validators.minLength(6), Validators.pattern ( this.passPattern ) ] ],
    passwordConfirm: [ '', [ Validators.required ] ],
    mail: [ '', [ Validators.required, Validators.pattern ( this.mailPattern ) ] ],
    checkBoxPromotion: [ '' ],
    country: [ '', Validators.required ],
    city: [ '',  Validators.required ]
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



