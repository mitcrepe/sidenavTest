import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsViewComponent } from './jobs-view/jobs-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobsViewComponent],
  exports: [
    JobsViewComponent
  ]
})
export class JobsViewModule { }
