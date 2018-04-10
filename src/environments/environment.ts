// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// 开发环境

export const environment = {
  env: 'dev',
  production: false,
  /* 配置不同接口的基路径 */
  API_DOMAIN: {
    'default': 'http://47.106.127.130:3000/mock/11/angular-demo', // 开发环境默认所有请求加上/api便于反向代理拦截
    'google': 'http://172.16.14.239:8888/google'
  }
};
