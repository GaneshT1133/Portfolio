import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { HERO_CONTENT, CONTACT_CONTENT } from '../../data/portfolio.data';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  content = HERO_CONTENT;
  contact = CONTACT_CONTENT;
}
