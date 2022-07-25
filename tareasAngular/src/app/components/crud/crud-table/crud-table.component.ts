import { Component, Input, OnInit } from '@angular/core';
//interfaces
import { Usser } from '../../../interfaces/usser.interface';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  @Input() ussers: Usser[] = []

  constructor() { }

  ngOnInit(): void {
  }

}