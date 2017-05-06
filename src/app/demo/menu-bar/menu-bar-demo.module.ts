import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarDemoComponent } from './menu-bar-demo.component';
import { StoneUIModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, StoneUIModule, FormsModule],
  exports: [MenuBarDemoComponent],
  declarations: [MenuBarDemoComponent],
  providers: [],
  entryComponents: [MenuBarDemoComponent]
})
export class MenuBarDemoModule {
}
