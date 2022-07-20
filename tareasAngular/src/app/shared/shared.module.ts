import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes Propios
import { NavbarComponent } from './navbar/navbar.component';

//primeNG propio
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }