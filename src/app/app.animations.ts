import { trigger, state, style, animate, transition, group, animateChild, query, useAnimation } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
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
    ]),
    ]),
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
]);