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
          'max-width': '500px', 'opacity': '1', 'visibility': 'visible', 'padding-left': '15px', 'padding-right': '15px'
      })),
      state('false', style({
          'max-width': '0px', 'opacity': '0', 'visibility': 'hidden', 'padding-left': '0px', 'padding-right': '0px'
      })),
      transition('true => false', [group([
          animate('250ms ease', style({
              'opacity': '0'
          })),
          animate('300ms ease', style({
              'max-width': '0px', 'padding-left': '0px', 'padding-right': '0px'
          })),
          animate('600ms ease', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('false => true', [group([
          animate('1ms ease', style({
              'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-width': '500px', 'padding-left': '15px', 'padding-right': '15px'
          })),
          animate('400ms ease-in', style({
              'opacity': '1'
          }))
      ]
      )])
  ]),
  ]
  
})
export class AppComponent {
  title = 'app';
  animationState = 'in';
  sidebarTextVisible : boolean = true;
  sidebarButtonType : string = "clear";

  sidebarToggle() {
    this.sidebarTextVisible = !this.sidebarTextVisible;
    if (this.sidebarTextVisible) {
      this.sidebarButtonType = "close";
      //this.animationState = 'in';
    } else {
      this.sidebarButtonType = "keyboard_arrow_right";
      //this.animationState = 'out';
    }
  }
}
