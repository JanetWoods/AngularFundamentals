import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router'
import { Error404Component } from './errors/404.component'
import { Routes } from '@angular/router'
import { AuthService } from './user/auth.service'
import { FormsModule} from '@angular/forms'
import {
  EventsListComponent,
  EventDetailsComponent,
  EventListResolver,
  EventThumbnailComponent,
  EventService,
  EventRouteActivator,
  CreateEventComponent,
}from './events/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event.  Do you really want to cancel?')
  return true
}
