import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesComponent } from './routes.component';
import { PreloadRoutersService } from '@core/router/preload-routers.service';
import { DefaultComponent } from '@app/view/routes/default/default.component';
import { LoginComponent } from '@app/view/routes/login/login.component';
import { DemoTableComponent } from '@app/view/routes/demo-table/demo-table.component';
const routes: Routes = [
  {
      path: '',
      component: RoutesComponent,
      children: [
        {
          path: 'dashboard',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'demo-table',
          component: DemoTableComponent
        },
        {
          path: '',
          component: DefaultComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadRoutersService })], // 路由模式默认为哈希,启动预加载
  providers: [PreloadRoutersService],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
