import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { IMenuList } from '@app/view/routes/default/interface';
import { CommonApiService } from '@api/common-api.service';
import { IHttpResponse } from '@core/net/interface/HttpResponse';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'com-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  userName = '潘佳志';
  menuList: IMenuList[] = []; // 菜单列表
  openedMenu: IMenuList[] = []; // 已经打开的菜单列表
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor(private commonApiService: CommonApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    /* 远程获取系统菜单 */
    this.commonApiService.getMenuList().subscribe((res: IHttpResponse<IMenuList[]>) => {
      this.menuList = res.result;
      this.bypassSecurityTrustResourceUrl(this.menuList);
    }, err => {
      console.log(err);
    });
  }
  bypassSecurityTrustResourceUrl(url: IMenuList[]): void;
  bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl;
  bypassSecurityTrustResourceUrl(url): any {
    if (!url) {
      return '';
    }
    if (typeof url === 'string') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    for (const i of url) {
      if (typeof i.url === 'string') {
        i.url = this.sanitizer.bypassSecurityTrustResourceUrl(i.url);
      } else {
        this.bypassSecurityTrustResourceUrl(i.childList);
      }
    }
  }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  openMenuName(menuItem): void {
    this.openedMenu.forEach(x => {
      x.activated = false;
      if (x.id === menuItem.id) {
        x.activated = true;
      }
    });
    if (!this.openedMenu.some(x => x.activated)) {
      const newMenuItem = {...menuItem};
      newMenuItem.activated = true;
      this.openedMenu.push(newMenuItem);
    }
  }
  closeMenuName(ev: Event, menuId: number, activated: boolean): void {
    this.openedMenu.forEach((x, idx) => {
      if (x.id === menuId) {
        this.openedMenu.splice(idx, 1);
        if (activated && this.openedMenu[idx]) {
          this.openedMenu[idx].activated = true;
        } else if (activated && this.openedMenu[idx - 1]) {
          this.openedMenu[idx - 1].activated = true;
        }
        return;
      }
    });
    ev.stopPropagation();
  }
  toggleMenuName(menuId: number, activated: boolean): void {
    if (activated) {
      return;
    }
    this.openedMenu.forEach(x => {
      x.activated = false;
      if (x.id === menuId) {
        x.activated = true;
        return;
      }
    });
  }
}
