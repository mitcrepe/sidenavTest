import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

  export function burgerLineAnimation(name: string, yOffset: string, finalDegrees: string){
    return trigger(name, [
        state('open', style({
          transform: `translateY(${yOffset}) rotate(${finalDegrees})`,
        })),
        state('close', style({
            transform: `translateY(0px) rotate(0deg)`,
        })),
        transition('close => open', [
          animate(`200ms ease`, style({
            transform: `translateY(${yOffset})`
          })),
          animate(`300ms ease`, style({
            transform: `translateY(${yOffset}) rotate(${finalDegrees})`
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