import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  @Input() tiltMax = 15;
  
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transformStyle = 'preserve-3d';
    this.el.nativeElement.style.transition = 'transform 0.15s ease-out';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate relative to center. X movement rotates Y axis, Y movement rotates X axis
    const rotateX = ((y - centerY) / centerY) * -this.tiltMax;
    const rotateY = ((x - centerX) / centerX) * this.tiltMax;
    
    this.el.nativeElement.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
    this.el.nativeElement.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    
    // reset transition speed back to fast for next enter
    setTimeout(() => {
      this.el.nativeElement.style.transition = 'transform 0.15s ease-out';
    }, 600);
  }
}
