import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= componentName %>DemoComponent } from './<%= componentSelector %>-demo.component';
import { StoneUIModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    StoneUIModule
  ],
  exports: [
    <%= componentName %>DemoComponent
  ],
  declarations: [<%= componentName %>DemoComponent],
  providers: [],
  entryComponents: [<%= componentName %>DemoComponent]
})
export class <%= componentName %>DemoModule {
}
