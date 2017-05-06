import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDemoComponent } from './alert-demo.component';
import { StoneUIModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    StoneUIModule
  ],
  exports: [
    AlertDemoComponent
  ],
  declarations: [AlertDemoComponent],
  providers: [],
  entryComponents: [AlertDemoComponent]
})
export class AlertDemoModule {
}
