import { Component } from '@angular/core';

//services
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-communication-parent-child',
  templateUrl: './communication-parent-child.component.html',
  styleUrls: ['./communication-parent-child.component.css']
})
export class CommunicationParentChildComponent {

  toChild: string = '';
  fromChild: string = '';

  constructor( private dataService: DataService ) { 
    dataService.parentComponent = this
  }

  //service
  parentService () {
    this.dataService.childComponent.message = 'PARENT USING SERVICE';
  }

  //input
  parentInput () {
    this.toChild = 'PARENT USING INPUT PROPERTY';
  }
  
  message ( message: string ) {
    this.fromChild = message;
  }

  //observable
  parentObservable () {
    this.dataService.sendFromParent()
      .subscribe( message => {
        this.toChild = message;
      })
  }
  //clean
  clean () {
    this.dataService.childComponent.message = ''
    this.fromChild = '';
  }

}