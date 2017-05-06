import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
  AfterContentInit
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'st-tabs',
  templateUrl: './tabs.component.html',
  exportAs: 'tabs'
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input() type: 'tabs' | 'pills' = 'tabs';
  @Input() activeTab: number |string;
  @Input() vertical: boolean;
  @Input() justified: boolean;
  @Input() cssClass: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() activeTabChange = new EventEmitter<number| string>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.activeTab === undefined && this.tabs.length) {
      this.select(this.tabs.first.id);
    }
  }

  select(id: number | string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disabled) {
      this.activeTab = id;
      this.activeTabChange.emit(id);
    }
  }

}
