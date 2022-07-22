import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['../communication-parent-child.component.css']
})
export class ChildComponent {
  //input output
  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();
  
  constructor( private dataService: DataService ) { }

  //service
  childService () {
    this.messageToParen.emit( this.dataService.sendTochild() )
  } 

  //output
  childOutput () {
    this.messageToParen.emit( 'CHILD USING OUTPUT EVENT' );
  }

  //observable
  childObservable () {
    this.dataService.sendFromChild()
      .subscribe( message => {
        this.messageToParen.emit( message );
      })
  }  
  
}