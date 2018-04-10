import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate } from '@angular/router';
import { UserService } from '@api/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private userService: UserService) { }
    canActivate(): boolean {
        return !!sessionStorage.getItem('Authorization');
    }
    canActivateChild(): boolean {
        if (!!this.userService.getUserInfo()) {
            return true;
        }
        alert('登录过期,请重新登录');
        const port = window.top.location.port ? `:${window.top.location.port}` : ``;
        window.top.location.href = `https://cas2.banggood.cn/cas?service=http://${window.top.location.hostname}${port}`;
        return false;
    }
}