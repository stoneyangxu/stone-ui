import {Component, ElementRef, OnInit, Renderer2, ViewContainerRef} from "@angular/core";
import {DemoConfigService} from "./shared/demo/demo-config.service";
import {MenuBar} from "./exports/menu-bar/menu-bar.model";
import {ActivatedRoute} from "@angular/router";
import {ThemeService} from "./shared";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'st-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: any[];
  gettingStarted: any;
  menus: MenuBar;
  // largeDataSource = [];

  constructor(private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService,
              private router: ActivatedRoute,
              private themeService: ThemeService,
              private renderer: Renderer2,
              private elementRef: ElementRef,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.themeService.setupTheme('', this.renderer, this.elementRef);
    this.gettingStarted = this.domSanitizer.bypassSecurityTrustHtml(this.demoConfigService.gettingStarted.readMe);
    this.components = this.demoConfigService.components
      .map(cmp => {
        cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);
        cmp.ts = this.fixTSModuleImport(cmp.ts);
        return cmp;
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    this.setupMenus();

    // for (let i = 1; i <= 5000; i++) {
    //   this.largeDataSource.push({ id: i, name: `Name ${i}`, age: 10 });
    // }
  }

  private fixTSModuleImport(code): string {
    return code.replace(/\.\.\/\.\.\/exports(\/.*)?/, 'stone-ui');
  }

  private changeTheme(menu) {
    this.themeService.setupTheme(menu.text, this.renderer, this.elementRef);
  }

  private setupMenus() {
    const cmpMenus = this.components.map(item => {
      return {
        text: item.name,
        url: `#${item.name}`
      };
    });


    const changeThemeHandler = (item) => this.changeTheme(item);

    this.menus = {
      logo: 'https://avatars3.githubusercontent.com/u/26008395?v=3&u=b863316bec1fcf6cdd344591af3a5bcc9715088a&s=400',
      title: 'StoneUI',
      home: './',
      menus: [
        {
          text: '@StoneUI',
          router: ['./'],
          icon: 'glyphicon glyphicon-home'
        },
        {
          text: 'Components',
          children: cmpMenus,
          icon: 'glyphicon glyphicon-fire'
        },
        {
          text: 'API Docs',
          url: '/stone-ui/compodocs/overview.html',
          target: '_blank',
          icon: 'glyphicon glyphicon-heart'
        },
        {
          text: '@Github',
          url: 'https://github.com/stoneyangxu/stone-ui',
          target: '_blank',
          icon: 'glyphicon glyphicon-user'
        },
        {
          text: 'Themes',
          icon: 'glyphicon glyphicon-cog',
          children: [
            {
              text: 'Default',
              handler: changeThemeHandler
            },
            {
              text: 'Dark',
              handler: changeThemeHandler
            },
            {
              text: 'Cosmo',
              handler: changeThemeHandler
            },
            {
              text: 'Paper',
              handler: changeThemeHandler
            },
            {
              text: 'Journal',
              handler: changeThemeHandler
            },
            {
              text: 'Readable',
              handler: changeThemeHandler
            },
            {
              text: 'United',
              handler: changeThemeHandler
            },
            {
              text: 'Sandstone',
              handler: changeThemeHandler
            },
            // {
            //   text: 'Material-Design',
            //   url: '?theme=Material-Design'
            // }
          ]
        }
      ]
    };
  }
}
