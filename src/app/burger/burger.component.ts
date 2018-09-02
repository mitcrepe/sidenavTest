import { Component, OnInit, Input } from '@angular/core';
import { burgerLineAnimation } from './burger.animations';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  animations: [
    burgerLineAnimation('firstLine', '8px', '45deg'),
    burgerLineAnimation('secondLine', '0px', '135deg'),
    burgerLineAnimation('thirdLine', '-8px', '135deg')
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
