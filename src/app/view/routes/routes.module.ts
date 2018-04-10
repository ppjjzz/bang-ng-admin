import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { ShareModule } from '@share/share.module';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { DemoTableComponent } from './demo-table/demo-table.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RoutesRoutingModule
  ],
  declarations: [RoutesComponent,
    DefaultComponent,
    LoginComponent,
    DemoTableComponent
],
  exports: [RoutesComponent]
})
export class RoutesModule { }
