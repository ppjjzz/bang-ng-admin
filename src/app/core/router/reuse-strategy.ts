import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';
import { CAN_REUSE_LIST } from '@core/router/can-reuse-list';
import { RouterEventService } from '@core/router/router-event.service';
@Injectable()
export class ReuseStrategy implements RouteReuseStrategy {
    _cacheRouters: { [key: string]: any } = {};
    constructor(private routerEventService: RouterEventService) {
        /* 订阅清除缓存路由 */
        this.routerEventService.clearRouteReuse.subscribe(() => {
            this._cacheRouters = {};
        });
    }
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // 对在允许复用的路由名单允许复用
        if (route.url.length && CAN_REUSE_LIST.includes(route.url[0].path)) {
            return true;
        }
        return false;
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // 按path作为key存储路由快照&组件当前实例对象
        // path等同RouterModule.forRoot中的配置
        this._cacheRouters[route.routeConfig.path] = {
            snapshot: route,
            handle: handle
        };
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // 在缓存中有的都认为允许还原路由
        return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // 从缓存中获取快照，若无则返回null
        if (!route.routeConfig || !this._cacheRouters[route.routeConfig.path]) { return null; }
        return this._cacheRouters[route.routeConfig.path].handle;
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // 同一路由时复用路由
        return future.routeConfig === curr.routeConfig;
    }
}
