import {AfterViewInit, Component, EventEmitter, Input, Output, Renderer2, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'st-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements AfterViewInit {

  @Input() type: string;
  @Input() dismissible: boolean;

  @Output() close = new EventEmitter();

  constructor(private viewContainerRef: ViewContainerRef, private renderer: Renderer2) {
    this.dismissible = true;
  }

  ngAfterViewInit(): void {
  }

  onClose() {
    this.close.emit(null);
  }
}
