import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
//tarea 01 
import { DisplayHideComponent } from './display-hide/display-hide.component';
//tarea 02 communication-parent-child
import { ChildComponent } from './communication-parent-child/child/child.component';
import { CommunicationParentChildComponent } from './communication-parent-child/communication-parent-child.component';
//tarea 03 crud
import { CrudComponent } from './crud/crud.component';
import { CrudTableComponent } from './crud/crud-table/crud-table.component';
import { CrudFormComponent } from './crud/crud-form/crud-form.component';
//tarea 04  search-on-type
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
//tarea 05 light-switch
import { LightSwitchComponent } from './light-switch/light-switch.component';
//tarea 06 external library with data
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
//tarea 07 counter
import { CounterComponent } from './counter/counter.component';

//primeNG
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [
    //tarea 01 display-hide
    DisplayHideComponent,
    //tarea 02 communication-parent-child
    ChildComponent,
    CommunicationParentChildComponent,
    //tarea 03 crud
    CrudComponent,
    CrudFormComponent,
    CrudTableComponent,
    //tarea 04  search-on-type
    SearchOnTypeComponent,
    //tarea 05 light-switch
    LightSwitchComponent,
    //tarea 06 external library with data
    ExternalLibraryWithDataComponent,
    //tarea 07 counter
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
