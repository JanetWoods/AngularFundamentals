import { Directive, OnInit, Inject, ElementRef } from "@angular/core"
import { JQ_TOKEN} from './jQuery.service'

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    this.$('#simple-modal').modal({})
  }
}
