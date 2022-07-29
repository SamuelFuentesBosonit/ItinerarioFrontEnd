import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
//interfaces
import { Country } from '../../../interfaces/country.interface';
import { User } from '../../../interfaces/user.interface';
//servicios
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  //patterns 
  namePattern = "([a-zA-Z]+)( ([a-zA-Z]+))? ([a-zA-Z]+)( ([a-zA-Z]+))?";
  mailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //passPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";, Validators.pattern ( this.passPattern )


  isValidFormSubmitted? : any;

  //array de countries del JSON
  countries!: Country[];

  //country que se usará de puntero, para elegir las cities del JSON
  country: Country = {
    iso2: '',
    iso3: '',
    country: '',
    cities: []
  };

  //array de cities(string) que se usá para almacenar el array de cities del JSON
  cities!: string[];

  constructor(  private formBuilder: FormBuilder,
                private countrySvc: CrudService) {}

  ngOnInit ( ): void { 
    //cargar lista de paises(countries)
    this.countrySvc.getCountries()
    .pipe(
      tap( ( countryList: Country[] ) => {
        this.countries = countryList
        console.log(this.countries)
      } ) ).subscribe();
      //cargar lista de ciudades desde el país seleccionado en el formulario
      this.crudForm.get("formCountry")?.valueChanges
        .subscribe( city =>{ this.cities = city.cities
        console.log( city.cities )
      } );
    }

  //mi formulario
  crudForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern ( this.namePattern ) ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    passwordConfirm: [ '', [ Validators.required, Validators.minLength(6) ] ],
    mail: [ '', [ Validators.required, Validators.pattern ( this.mailPattern ) ] ],
    checkBoxPromotion: [ '', Validators.required ],
    formCountry: [ '', Validators.required ],
    formCity: [ '',  Validators.required ]
  }, {
    passValidator: [this.passConfirm ( 'password', 'passwordConfirm' ) ]
  });

  //lanzador de errores
  launchError ( value: string ) {
    return this.crudForm.get( value )?.invalid
    && this.crudForm.get( value )?.touched;
  }

  //doble comprobación de valores
  reCheckAll (  name: string, mail: string, pass: string, cPass: string ) {
    return this.crudForm.get( name )?.valid     && this.crudForm.get( name )?.touched,
           this.crudForm.get( mail )?.valid    && this.crudForm.get( mail )?.touched,
            this.crudForm.get( pass )?.valid    && this.crudForm.get( pass )?.touched,
            this.crudForm.get( cPass )?.valid   && this.crudForm.get( cPass )?.touched,
            this.crudForm.get( "formCountry" )?.valid && this.crudForm.get( "formCountry" )?.touched,
            this.crudForm.get( "formCity" )?.valid    && this.crudForm.get( "formCity" )?.touched
  }

  //comprobar si no se ha tocado algún input
  unTouchedInput ( value: string ) {
    return this.crudForm.get( value )?.untouched;
  }

  //passConfirmation
  passConfirmation ( ): boolean {
    let b : boolean = false;
    const pa1 = this.crudForm.get( "password" )?.value;
    const pa2 = this.crudForm.get( "passwordConfirm" )?.value;
    ( pa1 === pa2 )
    ? b = true
    : b = false;
    return b;
  }
  
  passConfirm (p1: string, p2: string) {
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
  //random ID GEN
  randomIdGen ( ) {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  // on Submit
  onFormSubmit ( ) {
    const user: User = {
      name : this.crudForm.get("name")?.value,
      pass: this.crudForm.get("password")?.value,
      promotion: this.crudForm.get("checkBoxPromotion")?.value,
      mail:  this.crudForm.get("mail")?.value,
      country: this.crudForm.get("formCountry")?.value.country,
      city: this.crudForm.get("formCity")?.value,
      id: this.randomIdGen().toString()
    }
    this.countrySvc.insertUser( user )
      .subscribe();
  } 

  //boton para pruebas
  testButtons(){
    console.log('funciona')
    const test = this.crudForm.get("checkBoxPromotion")?.value;
    console.log(test);
  }

} 



