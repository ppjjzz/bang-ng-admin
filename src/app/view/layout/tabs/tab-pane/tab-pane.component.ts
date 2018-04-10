import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'layout-tab-pane',
  templateUrl: './tab-pane.component.html',
  styleUrls: ['./tab-pane.component.scss']
})
export class TabPaneComponent implements OnInit {
  @Input() label: string; // tab标题
  @ViewChild(TemplateRef) content: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }

}
