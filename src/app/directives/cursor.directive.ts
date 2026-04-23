import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCursor]',
  standalone: true
})
export class CursorDirective implements AfterViewInit, OnDestroy {
  private cursorDot!: HTMLElement;
  private cursorOutline!: HTMLElement;
  
  // To handle requestAnimationFrame cleanly
  private mouseX = 0;
  private mouseY = 0;
  private outlineX = 0;
  private outlineY = 0;
  private animationFrameId: number = 0;

  constructor(
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createCursorElements();
      this.animateCursor();
      this.addHoverListeners();
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private createCursorElements() {
    // Hide default cursor across entire body cleanly
    document.body.style.cursor = 'none';

    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'custom-cursor-dot';
    
    this.cursorOutline = document.createElement('div');
    this.cursorOutline.className = 'custom-cursor-outline';

    document.body.appendChild(this.cursorDot);
    document.body.appendChild(this.cursorOutline);

    // Initial styles
    const styles = `
      .custom-cursor-dot {
        width: 8px;
        height: 8px;
        background-color: #ff478e;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9999;
        pointer-events: none;
      }
      .custom-cursor-outline {
        width: 40px;
        height: 40px;
        border: 2px solid rgba(255, 71, 142, 0.5);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9998;
        pointer-events: none;
        transition: width 0.2s, height 0.2s, background-color 0.2s;
      }
      .custom-cursor-outline.hovering {
        width: 60px;
        height: 60px;
        background-color: rgba(255, 71, 142, 0.1);
        border-color: rgba(255, 71, 142, 0.1);
      }
      /* Ensure nothing interactive flashes default cursor if we can help it */
      a, button, input, [appTilt] {
        cursor: none !important;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    
    // Dot perfectly tracks mouse
    this.cursorDot.style.left = `${this.mouseX}px`;
    this.cursorDot.style.top = `${this.mouseY}px`;
  }

  private animateCursor = () => {
    // Lerp (linear interpolation) for trailing effect on the outline ring
    this.outlineX += (this.mouseX - this.outlineX) * 0.15;
    this.outlineY += (this.mouseY - this.outlineY) * 0.15;

    this.cursorOutline.style.left = `${this.outlineX}px`;
    this.cursorOutline.style.top = `${this.outlineY}px`;

    this.animationFrameId = requestAnimationFrame(this.animateCursor);
  }

  private addHoverListeners() {
    const interactables = document.querySelectorAll('a, button, [appTilt]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursorOutline.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        this.cursorOutline.classList.remove('hovering');
      });
    });
  }
}
