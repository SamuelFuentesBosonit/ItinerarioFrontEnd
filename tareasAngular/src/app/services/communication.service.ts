//tarea 02 communication-parent-child
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//tarea 02 communication-parent-child

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

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
