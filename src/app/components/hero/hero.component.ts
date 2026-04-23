import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroContent } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

import { HERO_CONTENT } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, TiltDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  content = HERO_CONTENT;
}

