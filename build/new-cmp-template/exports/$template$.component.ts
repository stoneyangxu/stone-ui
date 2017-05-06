import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'st-<%= componentSelector %>',
  templateUrl: './<%= componentSelector %>.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: '<%= componentName %>'
})
export class <%= componentName %>Component {

}
