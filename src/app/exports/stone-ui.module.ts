import {ModuleWithProviders, NgModule} from '@angular/core';
import {TabsModule} from './tabs';
import {MenuBarModule} from './menu-bar';
import {AlertModule} from './alert';


@NgModule({
  imports: [
    TabsModule,
    MenuBarModule,
    AlertModule
  ],
  exports: [
    TabsModule,
    MenuBarModule,
    AlertModule
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
