// import { Directive } from '@angular/core';

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appSpyscroll]',
  standalone: true
})
export class SpyscrollDirective {

  @Input() targetId: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const targetElement = document.getElementById(this.targetId);

    if (targetElement) {
      const yOffset = window.pageYOffset;
      const targetOffset = targetElement.offsetTop;

      if (yOffset >= targetOffset) {
        // Element is in view, implement your logic here
        console.log('Element in view:', this.targetId);
      } else {
        // Element is not in view, implement your logic here
      }
    }
  }

}
