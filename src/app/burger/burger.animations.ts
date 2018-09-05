import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

  export function burgerLineAnimation(name: string, yOffset: string, finalDegrees: number){
    return trigger(name, [
        state('open', style({
          transform: `translateY(${yOffset}) rotate(${finalDegrees}deg)`,
        })),
        state('close', style({
            transform: `translateY(0px) rotate(0deg)`,
        })),
        transition('close => open', [
          animate(`200ms ease`, style({
            transform: `translateY(${yOffset})`
          })),
          animate(`70ms linear`, style({
            transform: `translateY(${yOffset}) rotate(${finalDegrees/2}deg)`
          })),
          animate(`200ms ease-out`, style({
            transform: `translateY(${yOffset}) rotate(${finalDegrees}deg)`
          })),
        ]),
    
        transition('open => close', [
          animate(`200ms ease`, style({
            transform: `translateY(${yOffset}) rotate(0deg)`
          })),
          animate(`300ms ease`, style({
            transform: `translateY(0px) rotate(0deg)`
          })),
        ])
      ]);
  }