import { Component } from '@angular/core';

//services
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-communication-parent-child',
  templateUrl: './communication-parent-child.component.html',
  styleUrls: ['./communication-parent-child.component.css']
})
export class CommunicationParentChildComponent {

  toChild   : string = '';
  fromChild : string = '';

  constructor( private communicationService: CommunicationService ) { }

  //service
  parentService () {
    this.toChild = this.communicationService.sendTochild();
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
    this.communicationService.sendFromParent()
      .subscribe( message => {
        console.log(message)
        this.toChild = message;
      })
  }
  
}