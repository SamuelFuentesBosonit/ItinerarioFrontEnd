import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ComunicationParentChildComponent } from './comunication-parent-child/comunication-parent-child.component';
import { CommunicationParentChildComponent } from './communication-parent-child/communication-parent-child.component';
import { CrudComponent } from './crud/crud.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    DisplayHideComponent,
    ComunicationParentChildComponent,
    CommunicationParentChildComponent,
    CrudComponent,
    SearchOnTypeComponent,
    LightSwitchComponent,
    ExternalLibraryWithDataComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
