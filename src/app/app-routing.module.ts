import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JobsViewComponent } from './jobs-view/jobs-view/jobs-view.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jobs', component: JobsViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
