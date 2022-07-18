import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    
  }
}
