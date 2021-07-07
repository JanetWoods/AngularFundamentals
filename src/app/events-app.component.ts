import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
`
})
export class EventsAppComponent {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenticationStatus().subscribe();
  }
}
