import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'skyblue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.defaultColor
    );
  }

  @HostListener('mouseenter') mouseenter(eventData: Event): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.highlightColor
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.defaultColor
    );
  }
}
