import { Injectable } from '@angular/core';
import { ApiService } from '@core/net/api.service';
import { ApiConfig } from '@core/net/api.config';

const BASE_URL = '';

@Injectable()
export class DemoTableApiService {
    private fullUrl: string;
    constructor(private apiService: ApiService, private apiConfig: ApiConfig) {
        this.fullUrl = this.apiConfig.getDomain() + BASE_URL;
    }
    /**
     * 获取表格数据
     * @param params 参数
     */
    getTableData(params) {
        return this.apiService.post(`${this.fullUrl}/getTableData`, params);
    }
}
