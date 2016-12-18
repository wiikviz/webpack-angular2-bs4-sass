/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `    
    <nav class="navbar navbar-light bg-faded">
    
      <!-- Toggle Button -->
      <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#nav-content">
        ☰
      </button>
    
      <!-- Nav Content -->
      <div class="collapse navbar-toggleable-xs" id="nav-content">
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
             <a class="nav-link" [routerLink]=" ['./'] ">Index</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]=" ['./home'] " >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]=" ['./detail'] ">Detail</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]=" ['./about'] ">About</a>
          </li>
        </ul>
      </div>
    
    </nav>


  <div class="col-xs-6 text-xs-right">
    <div ngbDropdown [up]="true" class="d-inline-block">
      <button class="btn btn-outline-primary" id="dropdownMenu2" ngbDropdownToggle>Toggle dropup</button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item">Action - 1</button>
        <button class="dropdown-item">Another Action</button>
        <button class="dropdown-item">Something else is here</button>
      </div>
    </div>
  </div>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
