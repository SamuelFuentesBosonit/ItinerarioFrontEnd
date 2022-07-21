import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildComponent } from '../components/communication-parent-child/child/child.component';
import { CommunicationParentChildComponent } from '../components/communication-parent-child/communication-parent-child.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  childComponent! : ChildComponent
  parentComponent!: CommunicationParentChildComponent

  //service
  serviceFromParent: string = 'PARENT USING SERVICE';
  serviceFromChild : string = 'CHILD USING SERVICE';
  
  //observable
  parentObservable : string = 'PARENT USING OBSERVABLE';
  childObservable  : string = 'CHILD USING OBSERVABLE';
  
  private subjectParent : BehaviorSubject<string> = new BehaviorSubject<string>(this.parentObservable);
  private subjectChild  : BehaviorSubject<string> = new BehaviorSubject<string>(this.childObservable);

  constructor() { }

  //service
  sendToParent(){
    return this.serviceFromChild;
  }
  sendTochild(){
    return this.serviceFromParent;
  }
  //observable
  sendFromParent(){
    return this.subjectParent.asObservable();
  }
  sendFromChild(){
    return this.subjectChild.asObservable();
  }
}
