import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroContent } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, TiltDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input({ required: true }) content!: HeroContent;
}

