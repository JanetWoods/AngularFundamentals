import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/event.model';
import {EventService} from '../events/index'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px}
    #searchForm {margin-right: 10px;}
    @media (max-width: 1200px) 
    li > a.active{color: #F97924;}
`]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {
}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe
      (sessions => {
      this.foundSessions = sessions;
        return this.foundSessions;
    })
  }

}
