import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CursorDirective } from './directives/cursor.directive';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NAV_ITEMS } from './data/portfolio.data';
import { filter, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CursorDirective,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private router = inject(Router);
  readonly brandName = 'GANESH TODKAR';
  readonly navItems = NAV_ITEMS;

  isLockedPage$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.isLockedPath(this.router.url)),
    startWith(this.isLockedPath(this.router.url))
  );

  private isLockedPath(url: string): boolean {
    // Normalize URL by removing query params and trailing slashes
    const path = url.split('?')[0].replace(/\/$/, '') || '/';
    const lockedPaths = ['/', '/home', '/contact'];
    return lockedPaths.includes(path);
  }
}

