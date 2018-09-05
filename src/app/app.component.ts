import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group, animateChild, query } from '@angular/animations';
import { slideInOut, fadeInOut, marginAdjust } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInOut,
    fadeInOut,
    marginAdjust
  ]
  
})
export class AppComponent {
  title = 'app';
  isExpanded : boolean = true;
  sidebarButtonType : string = "clear";
  menuState : string = 'open';

  sidebarToggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.sidebarButtonType = "close";
      this.menuState = 'open';
    } else {
      this.sidebarButtonType = "menu";
      this.menuState = 'close';
    }
  }

  onFinish(){
    console.log("it finished!!!");
  }
}
