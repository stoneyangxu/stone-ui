import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[stTabTitle]',
})
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
