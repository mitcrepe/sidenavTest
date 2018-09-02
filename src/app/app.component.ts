import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group, animateChild, query } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
          'width': '250px'
      })),
      state('false', style({
          'width': '50px'
      })),
      transition('true => false', [group([
          animate('250ms ease', style({
            'width': '50px'
          })),
          query('@firstLine', [
            animateChild()
          ]),
          query('@secondLine', [
            animateChild()
          ]),
          query('@thirdLine', [
            animateChild()
          ]),
      ]
      )]),
      transition('false => true', [group([
          animate('250ms ease', style({
            'width': '250px'
          })),
          query('@firstLine', [
            animateChild()
          ]),
          query('@secondLine', [
            animateChild()
          ]),
          query('@thirdLine', [
            animateChild()
          ]),
      ]
      )])
  ]),

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
}
