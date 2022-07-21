import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//modules
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LazyRoutingModule } from './components/lazy-routing.module';
import { PrimengModule } from './components/primeng.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    ComponentsModule,
    LazyRoutingModule,
    PrimengModule,
    SharedModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
