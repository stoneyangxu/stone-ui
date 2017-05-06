import { NgModule, ModuleWithProviders } from '@angular/core';
import { RebirthNGConfig } from './rebirth-ng.config';
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
export class RebirthNGModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthNGModule,
      providers: [
        { provide: RebirthNGConfig, useClass: RebirthNGConfig },
      ]
    };
  }
}
