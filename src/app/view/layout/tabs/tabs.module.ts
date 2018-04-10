import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent,
    TabPaneComponent
  ],
  exports: [TabsComponent, TabPaneComponent]
})
export class TabsModule { }