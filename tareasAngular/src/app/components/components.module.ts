import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { CommunicationParentChildComponent } from './communication-parent-child/communication-parent-child.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

//primeNG
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [
    CommunicationParentChildComponent,
    CounterComponent,
    CrudComponent,
    DisplayHideComponent,
    ExternalLibraryWithDataComponent,
    LightSwitchComponent,
    SearchOnTypeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ComponentsModule { }