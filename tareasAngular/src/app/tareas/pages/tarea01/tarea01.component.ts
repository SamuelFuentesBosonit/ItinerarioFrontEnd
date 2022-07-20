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

  imgOne    : string = 'assets/images/one.png';
  imgTwo    : string = 'assets/images/two.gif';
  isVisible : string = 'visible';
  eEgg      : string = 'hidden';
  //display and hide img
  displayHide(){
    (this.isVisible === 'visible')
    ? this.isVisible = 'hidden'
    : (this.isVisible = 'visible', this.eEgg = 'hidden');
  }
  //display the EasterEgg
  easterEgg(){
    this.isVisible = 'hidden';
    this.eEgg = 'visible';
  }
}
