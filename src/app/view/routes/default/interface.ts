import { SafeUrl } from '@angular/platform-browser';

/**
 * 系统菜单接口
 */
export interface IMenuList {
    childList: IMenuList[]; // 子菜单列表
    id: number; // 菜单ID
    icon: string; // 菜单图标
    level: number; // 菜单级别
    url: string | SafeUrl; // 菜单地址
    menuName: string; // 菜单名称
    activated?: boolean; // 当前菜单是否激活
}
