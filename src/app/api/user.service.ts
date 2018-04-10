import { Injectable } from '@angular/core';



@Injectable()
export class UserService {
    constructor() {

    }
    /**
     * 获取登录用户信息
    */
    getUserInfo() {
        return JSON.parse(sessionStorage.getItem('user'));
    }
}
