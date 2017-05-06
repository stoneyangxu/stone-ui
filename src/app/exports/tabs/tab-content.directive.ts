import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[stTabContent]',
})
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
