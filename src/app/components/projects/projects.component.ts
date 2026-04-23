import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  @Input({ required: true }) items!: readonly ProjectItem[];
}

