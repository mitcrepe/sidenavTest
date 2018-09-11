import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JobsviewComponent } from './jobsview/jobsview.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jobs', component: JobsviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
