import { Injectable, Type } from '@angular/core';
import {
  MenuBarDemoComponent,
} from '../../demo';
import {AlertDemoComponent} from "../../demo/alert/alert-demo.component";

@Injectable()
export class DemoConfigService {

  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: Array<{ name: string, cmp: Type<any>, directory?: string, readMe?: any, html?: string, ts?: string }> = [
    {
      name: 'MenuBar',
      directory: 'menu-bar',
      cmp: MenuBarDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/menu-bar/README.md'),
      html: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.html'),
      ts: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.ts'),
    },
    {
      name: 'Alert',
      directory: 'alert',
      cmp: AlertDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/alert/README.md'),
      html: require('!raw-loader!../../demo/alert/alert-demo.component.html'),
      ts: require('!raw-loader!../../demo/alert/alert-demo.component.ts'),
    },
    // component declare
  ];
}
