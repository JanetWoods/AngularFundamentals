import { Directive, OnInit, Inject, ElementRef } from "@angular/core"
import { JQ_TOKEN } from './jQuery.service'

@Directive({
  selector: '[modal-trigger]'// [] means this is an attribute, not an element. This attribute has been added to the search button on the nav-bar
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) { this.el = ref.nativeElement; }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({})
    })
  }
}
