import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDivider, MatDividerModule} from '@angular/material';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatSidenavModule,
      MatIconModule,
      MatDividerModule
  ],
})
export class MaterialModule { }
