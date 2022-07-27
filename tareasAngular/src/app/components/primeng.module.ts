import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    MenubarModule
  ]
})
export class PrimengModule { }
