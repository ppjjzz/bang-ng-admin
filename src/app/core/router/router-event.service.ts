import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/* 全局路由事件服务 */
@Injectable()
export class RouterEventService {
    /* 清除缓存路由快照 */
    public clearRouteReuse = new Subject();
    constructor() { }
}