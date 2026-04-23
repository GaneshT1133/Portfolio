import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { HighlightItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent {
  @Input({ required: true }) items!: readonly HighlightItem[];
}

