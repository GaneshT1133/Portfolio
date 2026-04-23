import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TimelineItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  @Input({ required: true }) items!: readonly TimelineItem[];
}

