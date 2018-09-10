import { trigger, state, style, animate, transition, group, animateChild, query, useAnimation, keyframes } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
    state('true', style({
        'width': '250px'
    })),
    state('false', style({
        'width': '50px'
    })),
    transition('true => false', [group([
        animate('400ms ease', keyframes([
            style({ 'width' : '45px', offset: 0.8}),
            style({ 'width' : '50px', offset: 0.9})
        ])),
        query('@*', [
          animateChild()
        ])
    ]),
    ]),
    transition('false => true', [group([
        animate('400ms ease', keyframes([
            style({ 'width' : '260px', offset: 0.8}),
            style({ 'width' : '250px', offset: 0.9})
        ])),
        query('@*', [
          animateChild()
        ])
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

export const marginAdjust = trigger('marginAdjust', [
    state('true', style({
        'margin-left': '250px'
    })),
    state('false', style({
        'margin-left': '50px'
    })),
    transition('true => false', [group([
        animate('300ms ease', keyframes([
            style({ 'margin-left' : '50px'}),
        ])),
    ]),
    ]),
    transition('false => true', [group([
        animate('200ms ease', keyframes([
            style({ 'margin-left' : '250px'}),
            
        ])),
    ]
    )])
]);