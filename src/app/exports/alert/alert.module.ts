import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
})
export class AlertModule {
}
