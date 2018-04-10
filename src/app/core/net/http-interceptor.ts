
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, mergeMap, finalize, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import * as NProgress from 'nprogress';
import { LoggerErrorService } from '@core/logger-error.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

/**
 * @export 返回拦截器类
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private logger: LoggerErrorService, private nzMessageService: NzMessageService, private router: Router) {
  }
  intercept = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    const AUTHORIZATION_TOKEN = sessionStorage.getItem('Authorization') || ''; // 获取登录授权TOKEN
    NProgress.start(); // 显示顶部加载进度条
    /* 设置全局的请求头 */
    const newReq = req.clone({
      setHeaders: {
        'Authorization': AUTHORIZATION_TOKEN
      }
    });
    return next.handle(newReq).pipe(
      tap((res: any) => {
      })
      , mergeMap((event: any) => {
        if (event instanceof HttpResponse && (event.status !== 200 || !event.body.is_success)) {
          return Observable.create(observer => observer.error(event));
        }
        if (event instanceof HttpResponse) {
          NProgress.done();
          if (event.headers.has('Authorization')) {
            sessionStorage.setItem('Authorization', `Bearer ${event.headers.get('Authorization')}`);
          }
        }
        return Observable.create(observer => observer.next(event));
      })
      , catchError((res: HttpResponse<any>) => {
        NProgress.done();
        switch (res.status) {
          case 401:
            // 拦截到401错误
            this.nzMessageService.warning('未授权登录或者登录过期，请重新登录');
            setTimeout(() => {
              sessionStorage.removeItem('Authorization');
              this.router.navigate(['/login']);
            }, 2000);
            break;
          case 200:
            // 业务层级错误处理
            if (res.body.msg) {
              const params = req.method === 'POST' ? JSON.stringify(req.body) : null;
              this.logger.loggerError(res.body.msg, params); // 业务级错误记录POST请求参数
            }
            break;
          case 404:

            break;
          case 500:
            this.nzMessageService.error('服务器出错');
            break;
          default:
            this.nzMessageService.error('发生了一个未知的错误');
            break;
        }
        return _throw(res);
      }), finalize(() => {

      })
    );
  }
}

