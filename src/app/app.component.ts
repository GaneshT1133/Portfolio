import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  readonly navItems = [
    { label: 'Home', anchor: '#home' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Timeline', anchor: '#timeline' },
    { label: 'Contact', anchor: '#contact' }
  ];

  readonly architectureStack = [
    'Angular',
    'Spring Boot',
    'Lambda',
    'SQS',
    'Kinesis',
    'DynamoDB',
    'CloudWatch',
    'ECS',
    'Docker',
    'Jenkins'
  ];

  readonly highlights = [
    { title: 'Experience', value: '3+ Years' },
    { title: 'Core Strength', value: 'Spring Boot Microservices' },
    { title: 'Cloud Stack', value: 'AWS + Docker + CI/CD' }
  ];

  readonly projects = [
    {
      name: 'CTI Connectivity Microservice',
      stack: 'Spring Boot | Step Functions | SQS | Lambda | ECS | DynamoDB',
      summary:
        'Built REST APIs for CTI vendor integrations (Avaya, Cisco) with multi-region workflow controls and audit-safe configuration.',
      impact: 'Faster vendor onboarding and resilient event processing.'
    },
    {
      name: 'Media Playback Service',
      stack: 'Spring Boot | JPA | Hibernate | DynamoDB | EC2 | EFS',
      summary:
        'Enhanced media APIs with caching and encrypted EFS integration while strengthening production logging and monitoring.',
      impact: 'Lower response time and more stable production operations.'
    }
  ];

  ngAfterViewInit(): void {
    const revealElements = Array.from(
      (this.host.nativeElement as HTMLElement).querySelectorAll('.reveal')
    ) as HTMLElement[];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('is-visible');
            this.observer?.unobserve(element);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealElements.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
