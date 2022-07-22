import { Component } from '@angular/core';

//services
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-communication-parent-child',
  templateUrl: './communication-parent-child.component.html',
  styleUrls: ['./communication-parent-child.component.css']
})
export class CommunicationParentChildComponent {

  toChild   : string = '';
  fromChild : string = '';

  constructor( private dataService: DataService ) { }

  //service
  parentService () {
    this.toChild = this.dataService.sendTochild();
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
        console.log(message)
        this.toChild = message;
      })
  }
  
}