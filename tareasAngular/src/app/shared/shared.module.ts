import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { NavbarComponent } from './navbar/navbar.component';

//primeNG
import { PrimengModule } from '../components/primeng.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    PrimengModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
