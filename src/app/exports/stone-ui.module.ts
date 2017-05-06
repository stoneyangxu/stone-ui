import { NgModule, ModuleWithProviders } from '@angular/core';
import { TabsModule } from './tabs';
import {MenuBarModule} from './menu-bar';


@NgModule({
  imports: [
    TabsModule,
    MenuBarModule,
  ],
  exports: [
    TabsModule,
    MenuBarModule,
  ],
  declarations: [],
  providers: [],
})
export class StoneUIModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: StoneUIModule,
      providers: [
      ]
    };
  }
}
