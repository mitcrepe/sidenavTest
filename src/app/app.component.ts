import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
          'max-width': '250px'
      })),
      state('false', style({
          'max-width': '50px'
      })),
      transition('true => false', [group([
          animate('250ms ease', style({
            'max-width': '50px'
          })),
      ]
      )]),
      transition('false => true', [group([
          animate('250ms ease', style({
            'max-width': '250px'
          })),
      ]
      )])
  ]),
  ]
  
})
export class AppComponent {
  title = 'app';
  animationState = 'in';
  isExpanded : boolean = true;
  sidebarButtonType : string = "clear";

  sidebarToggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.sidebarButtonType = "close";
      //this.animationState = 'in';
    } else {
      this.sidebarButtonType = "keyboard_arrow_right";
      //this.animationState = 'out';
    }
  }
}
