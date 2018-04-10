import { Injectable } from '@angular/core';
import { ApiService } from '@core/net/api.service';
import { ApiConfig } from '@core/net/api.config';

const BASE_URL = '';

/* 公共API服务 */
@Injectable()
export class CommonApiService {
    private fullUrl: string;
    constructor(private apiService: ApiService, private apiConfig: ApiConfig) {
        this.fullUrl = this.apiConfig.getDomain() + BASE_URL;
    }
    /**
     * 登录系统验证账号密码
     */
    login() {
        return this.apiService.post(`${this.fullUrl}/login`);
    }
    /**
     * 获取系统菜单
     */
    getMenuList() {
        return this.apiService.get(`${this.fullUrl}/getMenuList`);
    }
}