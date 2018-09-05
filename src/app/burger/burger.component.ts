import { Component, OnInit, Input } from '@angular/core';
import { burgerLineAnimation } from './burger.animations';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  animations: [
    burgerLineAnimation('firstLine', '8px', 225),
    burgerLineAnimation('secondLine', '0px', 315),
    burgerLineAnimation('thirdLine', '-8px', 315)
  ]
})
export class BurgerComponent implements OnInit {
  @Input()
  state: string;

  @Input()
  color = '#fff';

  constructor() { }

  ngOnInit() { }

}
