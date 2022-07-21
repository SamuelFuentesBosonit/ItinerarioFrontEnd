import { Component, OnInit } from '@angular/core';
import { Tarea02Service } from '../tarea02.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
/*
  messageService() {
    this.tare02Service.sendParentToChild('PARENT USING SERVICE')
  }
  */

  constructor( /* public tare02Service: Tarea02Service */ ) { }

  ngOnInit(): void {
  }

}
