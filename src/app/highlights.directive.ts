import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private elme:ElementRef) { }
  // @HostListener("click") onClicks(){
  //   this.color("green")
  // }

  // @HostListener("dblclick") onDoubleClicks(){
  //   this.color("null")
  // }

  
  // private color(action: 'green){
  //   this.elem.nativeElement.style.color=action;
  // }

}
