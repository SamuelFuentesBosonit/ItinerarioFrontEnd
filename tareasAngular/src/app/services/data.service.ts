import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//components
//tarea 02 communication-parent-child
import { ChildComponent } from '../components/communication-parent-child/child/child.component';
import { CommunicationParentChildComponent } from '../components/communication-parent-child/communication-parent-child.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//tarea 02 communication-parent-child

  //observable
  private _Parent : BehaviorSubject<string> = new BehaviorSubject<string>( 'PARENT USING SUBJECT' );
  private _Child  : BehaviorSubject<string> = new BehaviorSubject<string>( 'CHILD USING SUBJECT' );

  constructor() { }

  //service
  sendToParent () {
    return 'CHILD USING SERVICE';
  }
  sendTochild () {
    return 'PARENT USING SERVICE';
  }

  //observable
  sendFromParent () {
    return this._Parent.asObservable();
  }
  sendFromChild () {
    return this._Child.asObservable();
  }
  
}
