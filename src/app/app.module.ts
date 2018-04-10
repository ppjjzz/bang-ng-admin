import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { CoreModule } from './core/core.module';
import { RoutesModule } from './view/routes/routes.module';
import { AppComponent } from './app.component';
import { environment } from '@env/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FundebugErrorHandler } from '@core/fundebug-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RoutesModule,
    /* 默认打包环境为prod时注册ServiceWorker,如不需要可以注释掉,相关配置可以参考英文官网 */
    environment.env === 'prod' ? ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) : []
  ],
  providers: [
    { provide: ErrorHandler, useClass: FundebugErrorHandler }, // 注册Fundebug前端监控插件
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
