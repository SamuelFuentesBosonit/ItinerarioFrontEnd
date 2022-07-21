import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.css']
})
export class DisplayHideComponent implements OnInit {

  imgOne    : string = 'assets/images/one.png';
  imgTwo    : string = 'assets/images/two.gif';
  isVisible : string = 'visible';
  eEgg      : string = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }

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
