import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.scss']
})
export class JobsViewComponent implements OnInit {
  div1Height: number;
  resizerHolded: boolean;


  constructor() { }

  ngOnInit() {
  }

  onResizerMove(event: MouseEvent) {
    if (this.resizerHolded) {
      this.div1Height = event.clientY-5;
    }
    //console.log(event);
  }

  onResizerMouseDown(event: MouseEvent) {
    this.resizerHolded = true;
  }

  onResizerMouseUp(event: MouseEvent) {
    this.resizerHolded = false;
  }
}
