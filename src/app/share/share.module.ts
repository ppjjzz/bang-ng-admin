/*
共享模块，引入各个routes模块的需要的模块，统一exports
如引入第三方ui模块，必须在模块中exports
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgShowDirective } from '@share/directives/ngShow';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from '@app/view/layout/header/header.component';
import { PageMainComponent } from '@app/view/layout/page-main/page-main.component';
import { SearchBarComponent } from '@app/view/layout/search-bar/search-bar.component';
import { RolePipe } from '@share/pipes/role.pipe';

/* 注册共享的组件,指令和管道 */
const COMPONENTS = [
  HeaderComponent,
  PageMainComponent,
  SearchBarComponent
];
const DIRECTIVES = [
  NgShowDirective
];
const PIPES = [
  RolePipe
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class ShareModule {
}



