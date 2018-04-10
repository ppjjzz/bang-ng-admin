import { ErrorHandler } from '@angular/core';
import * as fundebug from 'fundebug-javascript';
import { environment } from '@env/environment';
fundebug.apikey = '19017ce1f2ec779f8bae787ebfbd568bed2b4644490b50d0e9fca7caf13f5f0a';
const user = JSON.parse(sessionStorage.getItem('user'));
if (user) {
    fundebug.user = {
        name: user.entitys[0].name ? user.entitys[0].name : '',
        email: user.entitys[0].email ? user.entitys[0].email : ''
    };
}
switch (environment.env) {
    case 'dev':
        fundebug.silent = true;
        fundebug.silentConsole = true;
        break;
    case 'test':
        fundebug.silent = true;
        fundebug.releasestage = 'test';
        break;
    case 'prod':
        fundebug.releasestage = 'production';
        break;
}

export class FundebugErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        fundebug.notifyError(err);
    }
}
