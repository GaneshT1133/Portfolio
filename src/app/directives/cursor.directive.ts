import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCursor]',
  standalone: true
})
export class CursorDirective implements AfterViewInit, OnDestroy {
  private cursorDot!: HTMLElement;
  private cursorOutline!: HTMLElement;
  
  private mouseX = -100;
  private mouseY = -100;
  private outlineX = -100;
  private outlineY = -100;
  private animationFrameId: number = 0;
  private observer: MutationObserver | null = null;
  private hasMoved = false;

  constructor(
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createCursorElements();
      this.animateCursor();
      this.addHoverListeners();
      this.setupObserver();
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createCursorElements() {
    document.body.style.cursor = 'none';

    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'custom-cursor-dot';
    
    this.cursorOutline = document.createElement('div');
    this.cursorOutline.className = 'custom-cursor-outline';

    this.cursorDot.style.opacity = '0';
    this.cursorOutline.style.opacity = '0';

    document.body.appendChild(this.cursorDot);
    document.body.appendChild(this.cursorOutline);

    const styles = `
      .custom-cursor-dot {
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9999;
        pointer-events: none;
        mix-blend-mode: difference;
        transition: opacity 0.3s ease;
      }
      .custom-cursor-outline {
        width: 40px;
        height: 40px;
        border: 1.5px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9998;
        pointer-events: none;
        transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, opacity 0.3s ease;
        mix-blend-mode: difference;
      }
      .custom-cursor-outline.hovering {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-color: #fff;
      }
      .custom-cursor-outline.scrolling {
        border-color: #ce7afd;
        border-width: 3px;
        width: 30px;
        height: 30px;
      }
      a, button, input, textarea, [routerLink], .keyword-link, .view-btn, .cw-btn {
        cursor: none !important;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.hasMoved) {
      this.hasMoved = true;
      this.cursorDot.style.opacity = '1';
      this.cursorOutline.style.opacity = '1';
      this.outlineX = e.clientX;
      this.outlineY = e.clientY;
    }
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    
    this.cursorDot.style.left = `${this.mouseX}px`;
    this.cursorDot.style.top = `${this.mouseY}px`;
  }

  private animateCursor = () => {
    this.outlineX += (this.mouseX - this.outlineX) * 0.15;
    this.outlineY += (this.mouseY - this.outlineY) * 0.15;

    this.cursorOutline.style.left = `${this.outlineX}px`;
    this.cursorOutline.style.top = `${this.outlineY}px`;

    this.animationFrameId = requestAnimationFrame(this.animateCursor);
  }

  private addHoverListeners() {
    const interactables = document.querySelectorAll('a, button, input, textarea, [routerLink], .keyword-link, .view-btn, .cw-btn, .nav-link');
    interactables.forEach(el => {
      if (!(el as any)._cursorAttached) {
        (el as any)._cursorAttached = true;
        el.addEventListener('mouseenter', () => this.cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => this.cursorOutline.classList.remove('hovering'));
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Optional: add a scrolling class to the cursor if needed
    this.cursorOutline.classList.add('scrolling');
    clearTimeout((this as any).scrollTimeout);
    (this as any).scrollTimeout = setTimeout(() => {
      this.cursorOutline.classList.remove('scrolling');
    }, 150);
  }

  private setupObserver() {
    this.observer = new MutationObserver(() => {
      this.addHoverListeners();
    });
    this.observer.observe(document.body, { childList: true, subtree: true });
  }
}
