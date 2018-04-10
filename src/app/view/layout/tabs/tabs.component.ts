import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabPaneComponent } from './tab-pane/tab-pane.component';

@Component({
  selector: 'layout-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabPaneComponent) tabPaneCom: QueryList<TabPaneComponent>;
  tabs: TabPaneComponent[] = [];
  activeTabIndex = 0; // 目前激活的tab索引
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.tabPaneCom.forEach((item) => {
      this.tabs.push(item);
    });
  }
  changeTab(activeIndex) {
    if (this.activeTabIndex === activeIndex) {
      return;
    }
    this.activeTabIndex = activeIndex;
  }
}
