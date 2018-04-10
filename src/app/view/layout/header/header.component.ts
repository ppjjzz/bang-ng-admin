import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RoutersList } from './interface';
import { Router } from '@angular/router';
import { RouterEventService } from '@core/router/router-event.service';


@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() routers: RoutersList[] = [{title: '', path: '/'}];
  constructor(private router: Router, private routerEventService: RouterEventService) { }

  ngOnInit() {

  }
  go(path) {
    if (!path) {
      return;
    }
    this.routerEventService.clearRouteReuse.next();
    this.router.navigate([path]);
  }
}
