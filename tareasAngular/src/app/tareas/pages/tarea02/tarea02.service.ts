import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tarea02Service {

  parentMessageEvent: EventEmitter<any> = new EventEmitter();
  childMessageEvent : EventEmitter<any> = new EventEmitter();

  sendParentToChild ( message: string) {
    this.parentMessageEvent.emit( message );
  }

  sendChildToParent ( message: string ) {
    this.childMessageEvent.emit( message );   
  }

  constructor() { }
}
