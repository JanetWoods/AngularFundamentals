import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  templateUrl: './create-event.component.html'
 
})
export class CreateEventComponent {
  newEvent
  isDirty:boolean=true
  constructor(private router: Router) { }
  
  cancel() {
    this.router.navigate(['/events'])
  }
  saveEvent(formValues) {
    console.log(formValues)
  }

}
