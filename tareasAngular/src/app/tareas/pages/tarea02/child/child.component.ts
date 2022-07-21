import { Component, Input, OnInit } from '@angular/core';
import { Tarea02Service } from '../tarea02.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //@Input() message: string ='';

  constructor( /*public tarea02Service: Tarea02Service*/ ) { }

  ngOnInit(): void {
  }

}
