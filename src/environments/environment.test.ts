// 测试环境

export const environment = {
    env: 'test',
    production: true,
    /* 配置不同接口的基路径 */
    API_DOMAIN: {
        'default': 'http://47.106.127.130:3000/mock/11/angular-demo',
        'google': 'http://172.16.14.239:8888/google'
    }
};
