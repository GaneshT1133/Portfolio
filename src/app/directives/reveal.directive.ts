import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  inject
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private fallbackTimer?: number;

  @Input() revealDelay = 0;

  @HostBinding('class.reveal') readonly revealClass = true;
  @HostBinding('class.is-visible') isVisible = false;

  @HostBinding('style.--reveal-delay')
  get revealDelayCss(): string {
    return `${this.revealDelay}ms`;
  }

  private show(): void {
    if (this.isVisible) return;

    // Set the state for Angular bindings (if/when change detection runs)
    // and also update the DOM directly to avoid relying on zone-patched
    // IntersectionObserver callbacks.
    this.isVisible = true;
    this.host.nativeElement.classList.add('is-visible');
  }

  ngAfterViewInit(): void {
    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      this.show();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          this.show();
          this.observer?.disconnect();
          if (this.fallbackTimer) window.clearTimeout(this.fallbackTimer);
          this.fallbackTimer = undefined;
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    this.observer.observe(this.host.nativeElement);

    // Avoid an initial "blank page" feeling by revealing above-the-fold content quickly,
    // even if the first IntersectionObserver callback is delayed.
    const rect = this.host.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const initiallyInView = rect.top < viewportHeight * 0.95 && rect.bottom > viewportHeight * -0.05;
    if (initiallyInView) {
      this.fallbackTimer = window.setTimeout(() => this.show(), 140);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.fallbackTimer) window.clearTimeout(this.fallbackTimer);
    this.fallbackTimer = undefined;
  }
}

