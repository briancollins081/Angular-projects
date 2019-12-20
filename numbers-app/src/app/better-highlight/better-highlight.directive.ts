import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";

  @HostBinding("style.color") color:string = "#130";
  @HostBinding("style.backgroundColor") backgroundColor;

  constructor(private elementRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('click') click(){
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
  }

}
