import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TIMELINE } from '../../data/portfolio.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  items = TIMELINE;
}
