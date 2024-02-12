import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
@Input() affect:string = "";
  constructor(private el:ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    if(this.affect === "underline"){
      this.el.nativeElement.style.textDecoration = "underline";
    }
    else{
    this.el.nativeElement.style.fontWeight = "700";
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = "none";
    this.el.nativeElement.style.fontWeight = "400";
  }

}
