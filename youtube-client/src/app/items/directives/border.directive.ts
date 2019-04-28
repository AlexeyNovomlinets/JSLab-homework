import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'border', '2px solid #5b7ede');
  }
}
