import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['../communication-parent-child.component.css']
})
export class ChildComponent {
  //input output
  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();
  
  constructor( private communicationService: CommunicationService ) { }

  //service
  childService () {
    this.messageToParen.emit( this.communicationService.sendTochild() )
  } 

  //output
  childOutput () {
    this.messageToParen.emit( 'CHILD USING OUTPUT EVENT' );
  }

  //observable
  childObservable () {
    this.communicationService.sendFromChild()
      .subscribe( message => {
        this.messageToParen.emit( message );
      })
  }  
  
}