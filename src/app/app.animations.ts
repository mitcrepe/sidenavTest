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
        query('@fadeInOut', [
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
        query('@fadeInOut', [
            animateChild()
        ]),
    ]
    )])
]);

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter',  [
        style({ opacity: '0' }),
        animate('200ms 70ms ease', style({
            opacity: '1'
        })),
    ]),
    transition(':leave',  [
        animate('200ms ease', style({
            opacity: '0'
        })),
    ])
]);