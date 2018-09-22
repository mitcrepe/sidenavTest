import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { BurgerComponent } from './burger/burger.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

import { JobsViewModule } from './jobs-view/jobs-view.module';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    JobsViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
