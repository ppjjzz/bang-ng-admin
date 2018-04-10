import { Injectable } from '@angular/core';
import * as fundebug from 'fundebug-javascript';

@Injectable()
export class LoggerErrorService {

    constructor() { }
    loggerError(err, params?) {
        console.error(err);
        fundebug.notifyError(err, {
            '参数': JSON.stringify(params)
        });
    }
}