import { InjectionToken } from '@angular/core';
import { PLATFORM_INFO, PLATFORM } from './store/common';

/**
 * 获取外层平台ID
 */
export function getPlatformInfo(): PLATFORM {
    const platformIdEl = top.window.document.querySelector('.current_plat');
    if (platformIdEl) {
        return PLATFORM_INFO[platformIdEl.getAttribute('data-platformid')];
    } else {
        return PLATFORM_INFO[1];
    }
}

export const PLATFORM_CONFIG = new InjectionToken<string>('platform.config');