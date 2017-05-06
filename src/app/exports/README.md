# Getting started 

> Angular4 UI plugin with bootstrap

## Welcome

Welcome to `StoneUI`. This repo is Angular4 ui library for Bootstrap. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/stone-ui) & [API document](/stone-ui/compodocs/overview.html).


## Dependencies

It is all base on Angular4 and Bootstrap css. It no dependency on jQuery or Bootstrap's JavaScript is required.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 4.0.0 or higher)
* [Bootstrap CSS](http://getbootstrap.com/) (`bootstrap-sass` 3.3.7)
* [DateFns](https://date-fns.org/) (`date-fns` 1.27.2 or higher. It is for `DatePicker` parse & format date)


*Notice*: `OnPush` @Input is recommended, so use `Immutable.js` will be easy.

## Installation

After installing the above dependencies, install `StoneUI` via: 
  
    npm install --save stone-ui
  
Once installed you need to import our main module.

    import { StoneUIModule } from 'stone-ui';
  
Then use `StoneUIModule.forRoot()` to declare on your root module:

    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        StoneUIModule.forRoot(),
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }


And use `StoneUIModule` to declare on your feature module:

    @NgModule({
      imports: [CommonModule, FormsModule, StoneUIModule],
      exports: [DatePickerDemoComponent],
      declarations: [DatePickerDemoComponent],
      providers: [],
    })
    export class DatePickerDemoModule {
    }


## Animations

`StoneUI` have got animations done. So You should include `BrowserAnimationsModule` or `NoopAnimationsModule` to your `AppModule`.

example:

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
        BrowserAnimationsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }

## FAQ


Please check [github](https://github.com/stoneyangxu/stone-ui/issues) issue for your common problems / solutions.
