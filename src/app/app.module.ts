import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  MenuBarDemoModule,
} from './demo';
import { StoneUIModule } from './exports';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule.forRoot(),
    StoneUIModule.forRoot(),
    BrowserAnimationsModule,
    MenuBarDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


