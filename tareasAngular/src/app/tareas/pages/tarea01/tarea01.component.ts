import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarea01',
  templateUrl: './tarea01.component.html',
  styleUrls: ['./tarea01.component.css']
})
export class Tarea01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgOne  : string = 'assets/images/one.png';
  imgTwo  : string = 'assets/images/two.gif';
  one     : string = 'visible';
  two     : string = 'hidden';

  display(){
    if (this.one === 'visible') {
      this.one = 'hidden';
      this.two = 'visible';
    } else {
      this.one = 'visible';
      this.two = 'hidden';
    }
  }

}
