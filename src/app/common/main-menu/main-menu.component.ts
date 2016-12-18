import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {ROUTES} from '../../app.routes';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  public isBs3: boolean = false;
  public routes: any = ROUTES;
  public search: any = {text: ""};
  public hash: string = '';

  private router: Router;

  public constructor(router: Router) {
    this.router = router;
    this.routes = this.routes.filter((v: any) => v.path !== '**');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.hash = event.url;
      }
    });
  }
}
