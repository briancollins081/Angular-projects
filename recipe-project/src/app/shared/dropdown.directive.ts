import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick(){
    this.isOpen=!this.isOpen;
    // console.log(this.elementRef.nativeElement.getElementsByClassName('dropdown-menu')[0].classList);
    this.elementRef.nativeElement.getElementsByClassName('dropdown-menu')[0].classList.toggle('show');
  }

}
