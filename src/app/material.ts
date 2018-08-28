import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatSidenavModule,
      MatIconModule
  ],
})
export class MaterialModule { }
